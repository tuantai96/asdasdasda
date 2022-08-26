import {getUserMenu} from "../../api/user/menuApi";

export default {
    namespaced: true,
    state: {
        menus: null,
    },
    getters: {},
    mutations: {
        setMenus(state, menus) {
            state.menus = menus;
        },

    },
    actions: {
        async loadUserMenus(context) {
            if (context.state.menus === null) {
                const user = context.rootState.auth.user
                if (user) {
                    let defaultRole;
                    let roleId;
                    console.log(user)
                    if (user.organizationRoles && user.organizationRoles.length) {
                        defaultRole = user.organizationRoles.find(role => role.isDefault === true);
                        if (defaultRole) {
                            roleId = defaultRole.roleId;
                        } else {
                            roleId = user.organizationRoles[0].roleId;
                        }
                    } else {
                        roleId = 0
                    }
                    roleId = roleId == null ? 0 : roleId;
                    await getUserMenu(roleId)
                        .then(data => {
                            if (!Array.isArray(data)) {
                                data = [];
                            }
                            context.commit('setMenus', data)
                        })
                }
            }
        },
        setUserMenus(context, data) {
            context.commit('setMenus', data)
        },
        clearUserMenu(context) {
            context.commit('setMenus', null);
        }
    }
}