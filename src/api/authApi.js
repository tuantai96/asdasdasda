import baseApi from "./baseApi";
import {GATEWAY_URL} from "./configService";

const AUTH_API_URL = `${GATEWAY_URL}/auth`


async function login(username, password) {
    const url = `${AUTH_API_URL}/login`
    return await baseApi.post(url, {username: username, password: password})
}

async function adminLogin(username, password) {
    const url = `${AUTH_API_URL}/admin/login`
    return await baseApi.post(url, {username: username, password: password})
}

function logout(userId) {
    const url = `${AUTH_API_URL}/logout`
    return baseApi.post(url, {userId: userId})
}

export default {
    login,
    adminLogin,
    logout
}