import {createI18n} from "vue-i18n";
import UserVi from "./admin/user.vi.json";
import UserEn from "./admin/user.en.json";
import RoleVi from "./admin/role.vi.json";
import RoleEn from "./admin/role.en.json";
import OrganizationEn from "./admin/organization.en.json";
import OrganizationVi from "./admin/organization.vi.json";
import MenuEn from "./admin/menu.en.json";
import MenuVi from "./admin/menu.vi.json";
import ApplicationEn from "./admin/application.en.json";
import ApplicationVi from "./admin/application.vi.json";
import En from "./en.json";
import Vi from "./vi.json";


const i18n = createI18n({
    legacy: false,
    locale: 'vi',
    fallbackLocale: 'vi',
    globalInjection: true,
    messages: {
        en: {...En, ...UserEn, ...RoleEn, ...OrganizationEn, ...MenuEn, ...ApplicationEn},
        vi: {...Vi, ...UserVi, ...RoleVi, ...OrganizationVi, ...MenuVi, ...ApplicationVi},
    }
})

export default i18n

