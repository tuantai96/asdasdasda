import {createStore} from 'vuex';
import auth from "./modules/auth";
import createPersistedState from "vuex-persistedstate";
import userSetting from "./modules/userSetting";
import menus from "./modules/menus";
import {GATEWAY_URL} from "/api/configService";
// import language from "./modules/language";

export default createStore({
    modules: {
        auth,
        userSetting,
        menus,
        // language,
    },
    plugins: [createPersistedState(),
    ],
    getters: {
        appName(state) {
            return state.appName || 'VUE CORE';
        },
        appTitle(state) {
            return state.appTitle || 'Vue core';
        },
        appFooter(state) {
            return state.appFooter;
        },
        appLogo(state) {
            return state.appLogo ? GATEWAY_URL + `/files/preview/${state.appLogo}`
                .replaceAll('\\', '/')
                .replaceAll('\/\/', '/') : '/banner.png';
        },

    },
    state: {
        locate: null,
        appName: null,
        appTitle: null,
        appFooter: null,
        appLogo: null
    },
    mutations: {
        setLocate(state, locate) {
            state.locate = locate;
        },
        setAppName(state, appName) {
            state.appName = appName;
        },
        setAppTitle(state, appTitle) {
            state.appTitle = appTitle;
        },
        setAppFooter(state, appFooter) {
            state.appFooter = appFooter;
        },
        setAppLogo(state, appLogo) {
            state.appLogo = appLogo;
        },
    },
    actions: {
        changeLocate(context, locate) {
            context.commit('setLocate', locate);
        },
        updateAppInfo(context, {appName, appTitle, appFooter, appLogo}) {
            context.commit('setAppName', appName);
            context.commit('setAppTitle', appTitle);
            context.commit('setAppFooter', appFooter);
            context.commit('setAppLogo', appLogo);
        }
    }

});
