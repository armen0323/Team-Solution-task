import {createAsyncThunk} from "@reduxjs/toolkit";
import {baseApi} from "@api/axios";

import {isAxiosError} from "axios";
import {EndpointEnum} from "@enum/endpoint.enum";
import { IUserInfoResponse } from "./type";


export const userThunk = createAsyncThunk
("users", async (page:number, thunkAPI) => {

    try {
        const response = await baseApi.get(`${EndpointEnum.users}?page=${page}`);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
});

export const userInfoThunk = createAsyncThunk<IUserInfoResponse,string>
("usersInfo", async (id, thunkAPI) => {

    try {
        const response = await baseApi.get(`${EndpointEnum.users}/${id}`);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
});