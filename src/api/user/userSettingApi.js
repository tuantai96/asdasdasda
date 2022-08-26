import {USER_API_URL} from "./config";
import baseApi from "../baseApi";

const getUserSetting = () => baseApi.get(`${USER_API_URL}/getUserSetting`, {});

const saveUserSetting = (userSetting) => baseApi.post(`${USER_API_URL}/saveSetting`, userSetting);


export {
    getUserSetting,
    saveUserSetting
};