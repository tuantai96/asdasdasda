const status = {
    active: 'active',
    inactive: 'inactive',
};

const roleType = {
    roleTypeDefault: 'DEFAULT',
    roleTypeOrganization: 'ORGANIZATION',
};

const statusOptions = [
    {
        label: 'Active',
        value: true,
    },
    {
        label: 'Inactive',
        value: false,
    },
];

const roleTypeOptions = [
    {
        label: 'Default',
        value: 'DEFAULT',
    },
    {
        label: 'Organization',
        value: 'ORGANIZATION',
    },
];


const genderOptions = [
    {
        label: 'Male',
        value: 1,
    },
    {
        label: 'Female',
        value: 2,
    },
    {
        label: 'Other',
        value: 0,
    },
];

const languages = [
    {name: "English", code: "en"},
    {name: "Tiếng Việt", code: "vi"},
];

const actionLogActions = [
    "CREATE", "UPDATE", "DELETE", "CONFIG", "CHANGE_PASSWORD"
];

const actionLogModules = [
    "admin.user", "admin.role", "admin.menu", "admin.organization", "admin.application"
];

const authLogActions = [
    "LOGIN", "LOGOUT"
];

const authLogResult = [
    "SUCCESS", "FAIL"
];

const defaultLanguage = languages.find(l => l.code === localStorage.getItem("locate") || "vi");

const pageSize5 = 5;
const pageSize10 = 10;
const pageSize25 = 25;
const pageSize50 = 50;

export default {
    status,
    statusOptions,
    roleType,
    roleTypeOptions,
    genderOptions,
    pageSize5,
    pageSize10,
    pageSize25,
    pageSize50,
    languages,
    defaultLanguage,
    actionLogActions,
    actionLogModules,
    authLogActions,
    authLogResult
};
