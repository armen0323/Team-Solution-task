import axios, { AxiosError } from "axios";
import Cookies from "js-cookie";
import {BASE_URL, DEFAULT_HEADERS} from "./constant";

export const baseApi = axios.create({
    baseURL: BASE_URL,
    headers: { ...DEFAULT_HEADERS },
});

baseApi.interceptors.request.use(
    async (config) => {
        const token = Cookies.get("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => Promise.reject(error)
);

baseApi.interceptors.response.use(
    (response) => {
        return response;
    },
    (error: AxiosError) => {
        if (error?.response?.status === 401 && Cookies.get("access_token")) {
            Cookies.remove("access_token");
            window.location.href = "/signin";
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);