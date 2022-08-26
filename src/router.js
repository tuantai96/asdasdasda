import {createRouter, createWebHashHistory} from 'vue-router';
import App from './App.vue';
import NotFound from './pages/Error';

const routes = [
    {
        path: '/',
        name: 'app',
        component: App,
        children: [
            {
                path: '',
                name: 'dashboard',
                component: () => import('./components/Dash-board.vue')
            },
            {
                path: '/dashboard',
                name: 'Dashboard',
                component: () => import('./view/Dashboard.vue')
            },
            {
                path: '/create-user',
                name: 'CreateUser',
                component: () => import('./view/system-management/user/UserInformation.vue')
            },
            {
                path: '/userdetail',
                name: 'UserDetail',
                component: () => import('./view/system-management/user/UserDetail.vue')
            },
            {
                path: '/userslist',
                name: 'userslist',
                component: () => import('./view/system-management/user/UserManagement.vue')
            },
            {
                path: '/rolelist',
                name: 'RoleList',
                component: () => import('./view/system-management/role/RoleManagement.vue')
            },
            {
                path: '/create-role',
                name: 'CreateRole',
                component: () => import('./view/system-management/role/RoleInformation')
            },
            {
                path: '/menulist',
                name: 'MenuList',
                component: () => import('./view/system-management/menu/MenuManagement.vue')
            },
            {
                path: '/create-menu',
                name: 'CreateMenu',
                component: () => import('./view/system-management/menu/MenuInformation.vue')
            },
            {
                path: '/organizationlist',
                name: 'OrganizationList',
                component: () => import('./view/system-management/organization/OrganizationManagement.vue')
            },
            {
                path: '/create-organization',
                name: 'CreateOrganization',
                component: () => import('./view/system-management/organization/OrganizationInformation.vue')
            },
            {
                path: '/application',
                name: 'Application',
                component: () => import('./view/system-management/application/ApplicationManagement.vue')
            },
            {
                path: '/formlayout',
                name: 'formlayout',
                component: () => import('./components/FormLayoutDemo.vue')
            },
            {
                path: '/input',
                name: 'input',
                component: () => import('./components/InputDemo.vue')
            },
            {
                path: '/floatlabel',
                name: 'floatlabel',
                component: () => import('./components/FloatLabelDemo.vue')
            },
            {
                path: '/invalidstate',
                name: 'invalidstate',
                component: () => import('./components/InvalidStateDemo.vue')
            },
            {
                path: '/button',
                name: 'button',
                component: () => import('./components/ButtonDemo.vue')
            },
            {
                path: '/table',
                name: 'table',
                component: () => import('./components/TableDemo.vue')
            },
            {
                path: '/list',
                name: 'list',
                component: () => import('./components/ListDemo.vue')
            },
            {
                path: '/tree',
                name: 'tree',
                component: () => import('./components/TreeDemo.vue')
            },
            {
                path: '/panel',
                name: 'panel',
                component: () => import('./components/PanelsDemo.vue')
            },
            {
                path: '/overlay',
                name: 'overlay',
                component: () => import('./components/OverlayDemo.vue')
            },
            {
                path: '/media',
                name: 'media',
                component: () => import('./components/MediaDemo.vue')
            },
            {
                path: '/menu',
                component: () => import('./components/MenuDemo.vue'),
                children: [
                    {
                        path: '',
                        component: () => import('./components/menu/PersonalDemo.vue')
                    },
                    {
                        path: '/menu/seat',
                        component: () => import('./components/menu/SeatDemo.vue')
                    },
                    {
                        path: '/menu/payment',
                        component: () => import('./components/menu/PaymentDemo.vue')
                    },
                    {
                        path: '/menu/confirmation',
                        component: () => import('./components/menu/ConfirmationDemo.vue')
                    },
                ],
            },
            {
                path: '/messages',
                name: 'messages',
                component: () => import('./components/MessagesDemo.vue')
            },
            {
                path: '/file',
                name: 'file',
                component: () => import('./components/FileDemo.vue')
            },
            {
                path: '/chart',
                name: 'chart',
                component: () => import('./components/ChartDemo.vue')
            },
            {
                path: '/misc',
                name: 'misc',
                component: () => import('./components/MiscDemo.vue')
            },
            {
                path: '/crud',
                name: 'crud',
                component: () => import('./pages/CrudDemo.vue')
            },
            {
                path: '/crud1',
                name: 'crud1',
                component: () => import('./pages/CrudDemo1.vue')
            },
            {
                path: '/timeline',
                name: 'timeline',
                component: () => import('./pages/TimelineDemo.vue')
            },
            {
                path: '/empty',
                name: 'empty',
                component: () => import('./components/EmptyPage.vue')
            },
            {
                path: '/documentation',
                name: 'documentation',
                component: () => import('./components/Documentation-api.vue')
            },
            {
                path: '/blocks',
                name: 'blocks',
                component: () => import('./components/BlocksDemo.vue')
            },
            {
                path: '/icons',
                name: 'icons',
                component: () => import('./components/IconDemo.vue')
            },
        ]
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./pages/Login.vue')
    },
    {
        path: '/loggedout',
        name: 'loggedout',
        component: () => import('./view/LoggedOut.vue')
    },
    {
        path: '/empty',
        name: 'empty',
        component: () => import('./view/EmptyComponent.vue')
    },
    {
        path: '/landing',
        name: 'landing',
        component: () => import('./pages/LandingDemo.vue')
    },
    {
        path: '/error',
        name: 'error',
        component: () => import('./pages/Error.vue')
    },
    {
        path: '/notfound',
        name: 'notfound',
        component: () => import('./pages/NotFound.vue')
    },
    {
        path: '/access',
        name: 'access',
        component: () => import('./pages/Access.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('./components/test.vue')
    },
    {
        path: "/:pathMatch(.*)*",
        component: NotFound,
    }
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
