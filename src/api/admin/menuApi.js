// menu api
import baseApi from "../baseApi";
import {GATEWAY_URL} from "../configService.js";

const MENU_API_URL = `${GATEWAY_URL}/admin/menus`;

const getAllMenus = () => {
    try {
        return baseApi.get(`${MENU_API_URL}/getMenus`, {});
    } catch (e) {
        return e;
    }
}

const getMenuInfo = (data) => {
    try {
        return baseApi.get(`${MENU_API_URL}/getMenuInfo/${data.menuId}`, {});
    } catch (e) {
        return e;
    }
}

const getByParentMenus = (parentMenuId) => {
    try {
        return baseApi.get(`${MENU_API_URL}/getByParentMenu?parentMenuId=${parentMenuId}`, {});
    } catch (e) {
        return e;
    }
};

const getByRole = (data) => {
    try {
        return baseApi.get(`${MENU_API_URL}/getByRole?roleId=${data.roleId}`, {});
    } catch (e) {
        return e;
    }
};

const createMenu = (data) => {
    try {
        return baseApi.post(`${MENU_API_URL}/createMenu`, data);
    } catch (e) {
        return e;
    }
};

const updateMenu = (data) => {
    try {
        return baseApi.put(`${MENU_API_URL}/updateMenu/${data.menuId}`, data);
    } catch (e) {
        return e;
    }
};

const deleteMenu = (data) => {
    try {
        return baseApi.del(`${MENU_API_URL}/deleteMenu/${data.menuId}`, {});
    } catch (e) {
        return e;
    }
};

const deleteMenus = (data) => {
    try {
        return baseApi.del(`${MENU_API_URL}/deleteMenus?menuIds=${data.menuIds}`, {});
    } catch (e) {
        return e;
    }
};


export {
    deleteMenus,
    deleteMenu,
    updateMenu,
    createMenu,
    getByParentMenus,
    getByRole,
    getMenuInfo,
    getAllMenus
}