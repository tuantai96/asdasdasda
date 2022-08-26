import {GATEWAY_URL} from "../configService";
import baseApi from "../baseApi";

const APP_API_URL = `${GATEWAY_URL}/admin/app`;

const getAppInfo = () => baseApi.get(APP_API_URL);

const saveAppInfo = (data) => baseApi.post(`${APP_API_URL}/save`, data);

export {
    getAppInfo,
    saveAppInfo
};