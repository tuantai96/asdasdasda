import {USER_API_URL} from "./config";
import baseApi from "../baseApi";

const userChangePassword = (oldPassword, newPassword) => baseApi.put(`${USER_API_URL}/changePassword`, {
    oldPassword: oldPassword,
    newPassword: newPassword
});
const getUserInfo = () => baseApi.get(`${USER_API_URL}/getUserInfo`, null);

const saveUserInfo = (data) => baseApi.postWithFile(`${USER_API_URL}/saveUserInfo`, data);

const getRolesInfo = () => baseApi.get(`${USER_API_URL}/getRolesInfo`, null);

export {
    userChangePassword,
    getUserInfo,
    saveUserInfo,
    getRolesInfo
};