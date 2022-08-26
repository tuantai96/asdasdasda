import {USER_API_URL} from "./config";
import baseApi from "../baseApi";

const getAllMenus = () => baseApi.get(`${USER_API_URL}/getAllMenu`, {});

const getUserMenu = currentOgRoleId => baseApi.get(`${USER_API_URL}/getUserMenu?currentOgRoleId=${currentOgRoleId}`, {});

export {
    getAllMenus,
    getUserMenu
}