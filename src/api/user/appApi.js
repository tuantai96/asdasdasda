import baseApi from "../baseApi";
import {USER_API_URL} from "./config";

const getAppInfo = () => baseApi.get(`${USER_API_URL}/getAppInfo`, {});

export {
    getAppInfo
};