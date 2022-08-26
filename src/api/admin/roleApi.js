// role api
import baseApi from "../baseApi";
import {objectDataToQueryString} from "../../commons/Utils";
import {GATEWAY_URL} from "../configService";


const ROLES_API_URL = `${GATEWAY_URL}/admin/roles`;

const searchRole = (data) => {
    try {
        return baseApi.get(`${ROLES_API_URL}/searchRoles?${objectDataToQueryString(data)}`, {});
    } catch (e) {
        return e;
    }
}

const getRoleInfo = (data) => {
    try {
        return baseApi.get(`${ROLES_API_URL}/getRoleInfo/${data.roleId}`, {});
    } catch (e) {
        return e;
    }
}

const createRole = (data) => {
    try {
        return baseApi.post(`${ROLES_API_URL}/addRole`, data);
    } catch (e) {
        return e;
    }
};

const updateRole = (data) => {
    try {
        return baseApi.put(`${ROLES_API_URL}/updateRole/${data.roleId}`, data);
    } catch (e) {
        return e;
    }
};

const deleteRole = (data) => {
    try {
        return baseApi.del(`${ROLES_API_URL}/deleteRole/${data.roleId}`);
    } catch (e) {
        return e;
    }
};

const deleteRoles = (data) => {
    try {
        return baseApi.del(`${ROLES_API_URL}/deleteRoles?roleIds=${data.roleIds}`);
    } catch (e) {
        return e;
    }
};

const configRoleMenu = (data) => {
    try {
        return baseApi.post(`${ROLES_API_URL}/configRoleMenu?roleId=${data.roleId}&menuIds=${data.menuIds}`, {});
    } catch (e) {
        return e;
    }
};

export {searchRole, getRoleInfo, createRole, updateRole, deleteRole, deleteRoles, configRoleMenu};