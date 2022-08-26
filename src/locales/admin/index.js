import UserEn from "/src/locales/admin/user.en.json";
import UserVi from "/src/locales/admin/user.vi.json";
import RoleEn from '/src/locales/admin/role.en.json';
import RoleVi from '/src/locales/admin/role.vi.json';
import MenuEn from '/src/locales/admin/menu.en.json';
import MenuVi from '/src/locales/admin/menu.vi.json';
import ApplicationEn from '/src/locales/admin/application.en.json';
import ApplicationVi from '/src/locales/admin/application.vi.json';
import OrganizationEn from '/src/locales/admin/organization.en.json';
import OrganizationVi from '/src/locales/admin/organization.vi.json';
import LogVi from '/src/locales/admin/log.vi.json';
import LogEn from '/src/locales/admin/log.en.json';

export const AdminLocaleEn = {
    ...UserEn, ...RoleEn, ...MenuEn, ...OrganizationEn, ...ApplicationEn, ...LogEn
}

export const AdminLocaleVi = {
    ...UserVi, ...RoleVi, ...MenuVi, ...OrganizationVi, ...ApplicationVi, ...LogVi
}