import Constants from "../../commons/Constants";

export default {
    namespaced: true,
    state: {
        language: null,
        theme: null,
        componentScale: null
    },
    getters: {
        language(state) {
            return state.language || Constants.defaultLanguage
        },
        theme(state) {
            return state.theme || {darkTheme: false, theme: "bootstrap4-light-blue"}
        },
        componentScale(state) {
            return state.componentScale || 14
        }


    },
    mutations: {
        setLanguage(state, language) {
            state.language = language;
        },
        setTheme(state, theme) {
            state.theme = theme
        },
        setComponentScale(state, scale) {
            state.componentScale = scale
        }
    },
    actions: {
        setTheme(context, {darkTheme, theme}) {
            context.commit("setTheme", {darkTheme, theme})
        },
        setComponentScale(context, scale) {
            context.commit("setComponentScale", scale)
        },
        setLanguage(context, {name, code}) {
            context.commit("setLanguage", {name, code})
        },
        clearUserSetting(context) {
            context.commit("setTheme", null);
            context.commit("setComponentScale", null);
            context.commit("setLanguage", null);
        }
    }
}