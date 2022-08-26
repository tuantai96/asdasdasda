// log api
import baseApi from "../baseApi";
import {objectDataToQueryString} from "../../commons/Utils";
import {GATEWAY_URL} from "../configService";

const LOGS_API_URL = `${GATEWAY_URL}/admin/log`;

const searchActionLog = (data) => {
    try {
        return baseApi.get(`${LOGS_API_URL}/searchActionLog?${objectDataToQueryString(data)}`, {});
    } catch (e) {
        return e;
    }
}

const exportActionLog = (data) => {
    try {
        return baseApi.post(`${LOGS_API_URL}/exportActionLog`, data);
    } catch (e) {
        return e;
    }
}

const deleteActionLog = (data) => {
    try {
        return baseApi.del(`${LOGS_API_URL}/deleteActionLog/${data.actionLogId}`);
    } catch (e) {
        return e;
    }
};

const deleteActionLogs = (data) => {
    try {
        return baseApi.del(`${LOGS_API_URL}/deleteActionLogs?actionLogIds=${data.actionLogIds}`);
    } catch (e) {
        return e;
    }
};

const searchAuthLog = (data) => {
    try {
        return baseApi.get(`${LOGS_API_URL}/searchAuthLog?${objectDataToQueryString(data)}`, {});
    } catch (e) {
        return e;
    }
}

const exportAuthLog = (data) => {
    try {
        return baseApi.post(`${LOGS_API_URL}/exportAuthLog`, data);
    } catch (e) {
        return e;
    }
}

const deleteAuthLog = (data) => {
    try {
        return baseApi.del(`${LOGS_API_URL}/deleteAuthLog/${data.authLogId}`);
    } catch (e) {
        return e;
    }
};

const deleteAuthLogs = (data) => {
    try {
        return baseApi.del(`${LOGS_API_URL}/deleteAuthLogs?authLogIds=${data.authLogIds}`);
    } catch (e) {
        return e;
    }
};

export {
    searchActionLog,
    exportActionLog,
    deleteActionLog,
    deleteActionLogs,
    searchAuthLog,
    exportAuthLog,
    deleteAuthLog,
    deleteAuthLogs
};