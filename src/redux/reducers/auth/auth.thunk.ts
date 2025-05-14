import {createAsyncThunk} from "@reduxjs/toolkit";
import {ILoginPayload, ILoginResponse} from "./types";
import {isAxiosError} from "axios";
import {EndpointEnum} from "@enum/endpoint.enum";
import {baseApi} from "@api/axios";

export const loginThunk = createAsyncThunk<
 ILoginResponse,
    ILoginPayload
>("login", async (data: ILoginPayload, thunkAPI) => {
    try {
        const response = await baseApi.post(EndpointEnum.login, data);
        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
});

export const registrationThunk = createAsyncThunk<
    ILoginResponse,
    ILoginPayload
>("register", async (data: ILoginPayload, thunkAPI) => {
    try {
        const response = await baseApi.post(EndpointEnum.registration, data);

        return response.data;
    } catch (error) {
        if (isAxiosError(error)) {
            return thunkAPI.rejectWithValue(error?.response?.data);
        }
    }
});