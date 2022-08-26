import {createI18n} from "vue-i18n";
import store from "../store";
import en from "../locales/en.json";
import vi from "../locales/vi.json";
import {AdminLocaleEn, AdminLocaleVi} from "../locales/admin";

import userSettingEN from "../locales/user-setting/en.json";
import userSettingVI from "../locales/user-setting/vi.json";
import MenusEN from "../locales/menu/en.json";
import MenusVI from "../locales/menu/vi.json";

const i18n = createI18n({
    legacy: false,
    locale: store.getters["userSetting/language"].code || 'en',
    fallbackLocale: 'en',
    globalInjection: true,
    messages: {
        en: {...en, ...AdminLocaleEn, ...userSettingEN, ...MenusEN},
        vi: {...vi, ...AdminLocaleVi, ...userSettingVI, ...MenusVI}
    }
})

export default i18n