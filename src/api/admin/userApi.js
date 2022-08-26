import baseApi from '../baseApi';
import {objectDataToQueryString} from '../../commons/Utils';
import {GATEWAY_URL} from "../configService";

const USERS_API_URL = `${GATEWAY_URL}/admin/users`;

const searchUser = (data) => {
    try {
        return baseApi.get(`${USERS_API_URL}/searchUsers?${objectDataToQueryString(data)}`, {});
    } catch (e) {
        return e;
    }
}

const getUserInfo = (data) => {
    try {
        return baseApi.get(`${USERS_API_URL}/getUserInfo/${data.userId}`, {});
    } catch (e) {
        return e;
    }
}

const createUser = (data) => {
    try {
        return baseApi.post(`${USERS_API_URL}/addUser`, data);
    } catch (e) {
        return e;
    }
};

const updateUser = (data) => {
    try {
        return baseApi.put(`${USERS_API_URL}/updateUser/${data.userId}`, data.formData);
    } catch (e) {
        return e;
    }
};

const deleteUser = (data) => {
    try {
        return baseApi.del(`${USERS_API_URL}/deleteUser/${data.userId}`);
    } catch (e) {
        return e;
    }
};

const deleteUsers = (data) => {
    try {
        return baseApi.del(`${USERS_API_URL}/deleteUsers?userIds=${data.userIds}`);
    } catch (e) {
        return e;
    }
};

const changePassword = (data) => {
    const {userId, password} = data;
    try {
        return baseApi.put(`${USERS_API_URL}/changePassword/${userId}`, {password});
    } catch (e) {
        return e;
    }
}

const setDefaultRole = (data) => {
    try {
        return baseApi.put(`${USERS_API_URL}/setDefaultRole`, data);
    } catch (e) {
        return e;
    }
}

const removeDefaultRole = (data) => {
    try {
        return baseApi.put(`${USERS_API_URL}/removeDefaultRole`, data);
    } catch (e) {
        return e;
    }
}

const getOrganizationRole = (data) => {
    try {
        return baseApi.get(`${USERS_API_URL}/getOrganizationRole/${data.userId}`, {});
    } catch (e) {
        return e;
    }
}

const joinOrganization = (data) => {
    try {
        return baseApi.put(`${USERS_API_URL}/joinOrganization`, data);
    } catch (e) {
        return e;
    }
}

const leaveOrganization = (data) => {
    try {
        return baseApi.put(`${USERS_API_URL}/leaveOrganization`, data);
    } catch (e) {
        return e;
    }
}

const removeOrganizationRole = (data) => {
    try {
        return baseApi.put(`${USERS_API_URL}/removeOrganizationRole`, data);
    } catch (e) {
        return e;
    }
}

const defaultOrganizationRole = (data) => {
    try {
        return baseApi.put(`${USERS_API_URL}/defaultOrganizationRole`, data);
    } catch (e) {
        return e;
    }
}

export {
    //user api
    searchUser,
    getUserInfo,
    createUser,
    updateUser,
    deleteUser,
    deleteUsers,
    changePassword,
    setDefaultRole,
    removeDefaultRole,
    getOrganizationRole,
    joinOrganization,
    leaveOrganization,
    removeOrganizationRole,
    defaultOrganizationRole
};
