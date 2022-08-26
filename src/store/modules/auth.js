import authApi from "../../api/authApi";
import {GATEWAY_URL} from "/../api/configService";

export default {
    namespaced: true,
    state: {
        user: null,
        authorization: null,
        refreshToken: null
    },
    getters: {
        isAdmin(state) {
            return state.user && state.user.roles && state.user.roles.some(role => role.roleCode === "ADMIN");
        },
        getAvatarUrl(state) {
            return state.user && state.user.avatar ? GATEWAY_URL + `/files/preview/${state.user.avatar}`
                .replaceAll('\\', '/')
                .replaceAll('\/\/', '/') : '';
        }
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setAuthorization(state, authorization) {
            state.authorization = authorization;
        },
        setRefreshToken(state, token) {
            state.refreshToken = token;
        }
    },
    actions: {
        setUserAndLocate(context, {user, locate}) {
            context.commit('setLocate', locate, {root: true});
            context.commit('setUser', user);
        },
        async login(context, {adminLogin, username, password}) {
            const loginAction = adminLogin ? await authApi.adminLogin(username, password) : await authApi.login(username, password);

            Promise.resolve(loginAction).then(data => {
                const {user, tokenType, accessToken, refreshToken} = data || {};

                Promise.all([
                    context.commit('setUser', user),
                    context.commit('setAuthorization', `${tokenType} ${accessToken}`),
                    context.commit('setRefreshToken', refreshToken),
                ]);
            });
        },
        logout(context) {
            context.commit('setUser', null);
            context.commit('setAuthorization', null);
            context.dispatch('menus/clearUserMenu', null, {root: true});
        },
        refreshToken(context, data) {
            context.commit('setAuthorization', `${data.tokenType} ${data.accessToken}`);
            context.commit('setRefreshToken', data.refreshToken);
        },
        saveUserWithoutRole(context, data) {
            if (!data.roles) {
                let roles;
                if (context.state.user && context.state.user.roles) {
                    roles = context.state.user.roles
                }
                data.roles = roles
            }
            context.commit('setUser', data);
        }
    },
};