import store from "../store/index.js";
import axios from 'axios';
import {GATEWAY_URL} from "./configService";
import EventBus from "../commons/EventBus";

// async function doGetRequest(url) {
//     const options = {
//         method: "GET",
//         headers: {
//             "Content-Type": 'application/json',
//             "Authorization": store.state.auth.authorization,
//         },
//     }
//     const response = await fetch(url, options)
//         .catch(err => console.log(err))
//     return response.json()
// }
//
// async function doPostRequest(url, body) {
//     const options = {
//         method: "POST",
//         headers: {
//             "Content-Type": 'application/json',
//             "Authorization": store.state.auth.authorization,
//         },
//         body: JSON.stringify(body)
//     }
//
//     const response = await fetch(url, options)
//         .catch(err => console.log(err))
//     return response.json()
// }

const LOGIN_URL = `${GATEWAY_URL}/auth/login`;
const REFRESH_TOKEN_URL = `${GATEWAY_URL}/auth/refreshToken`;

function initialClient(hasFile) {
    let axiosInstance = axios.create({
        timeout: 60000,
        responseType: 'json',
        headers: {
            'Accept': 'application/json',
            'Content-Type': hasFile ? 'multipart/form-data' : 'application/json',
        },
    });
    axiosInstance.interceptors.request.use(
        (config) => {
            const token = store.state.auth.authorization;
            if (token) {
                config.headers['Authorization'] = token;
            }
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );
    axiosInstance.interceptors.response.use(
        (res) => {
            return res;
        },
        (err) => {
            const originalConfig = err.config;

            if (originalConfig.url !== LOGIN_URL && err.response) {
                // Access Token was expired
                if (err.response.status === 403 && originalConfig.url === REFRESH_TOKEN_URL) {
                    EventBus.dispatch("logout");
                    return Promise.reject(err);
                }
                if (err.response.status === 401 && !originalConfig._retry) {
                    console.log("retry: ", originalConfig._retry);
                    originalConfig._retry = true;
                    try {
                        console.log(store.state.auth.refreshToken);
                        axiosInstance.post(REFRESH_TOKEN_URL, {
                            refreshToken: store.state.auth.refreshToken,
                        }).then(
                            (rs) => store.dispatch('auth/refreshToken', rs.data)
                        );
                        return axiosInstance(originalConfig);
                    } catch (_error) {
                        return Promise.reject(_error);
                    }
                }
            }

            return Promise.reject(err);
        }
    );
    return axiosInstance;
}

const request = async (method, path, data, hasFile) => {
    console.log(`${method.toUpperCase()}: ${path}`, data);
    return new Promise((resolve, reject) => {
        data = data || {};
        let request = {};
        const client = initialClient(hasFile);
        switch (method) {
            case 'get':
                request = client.get(path, data || {});
                break;
            case 'post':
                request = client.post(path, data || {});
                break;
            case 'patch':
                request = client.patch(path, data || {});
                break;
            case 'put':
                request = client.put(path, data || {});
                break;
            case 'delete':
                request = client.delete(path, data || {});
                break;
            default:
                request = client.get(path, data || {});
                break;
        }
        request.then(response => {
            console.log(`RESPONSE: ${path}`, response.data);
            resolve(response.data || {});
        }).catch(err => {
            reject(err.response);
        });
    });
};

const post = async (path, data) => {
    return await request("post", path, data);
};

const get = async (path, data) => {
    return await request("get", path, data);
};

const put = async (path, data) => {
    return await request("put", path, data);
};

const del = async (path, data) => {
    return await request("delete", path, data);
};

const postWithFile = async (path, data) => {
    return await request("post", path, data, true);
};


export default {
    request,
    post, get, put, del,
    postWithFile
};