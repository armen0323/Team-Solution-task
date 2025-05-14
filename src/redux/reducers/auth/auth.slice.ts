import {createSlice} from "@reduxjs/toolkit";
import {initialLoginState} from "./auth.state";
import {makeRequestExtraReducer, RequestList} from "../../reducerCreator";
import {loginThunk, registrationThunk} from "./auth.thunk";
import {IAuthInitialState} from "./types";

const authSlice = createSlice({
    name:'login',
    initialState: initialLoginState,
    reducers:{

    },
    extraReducers: (builder) => {
        makeRequestExtraReducer<RequestList<IAuthInitialState>>(
            builder,
            loginThunk,
            "loginState"
        );
        makeRequestExtraReducer<RequestList<IAuthInitialState>>(
            builder,
            registrationThunk,
            "signupState"
        );
    }
})

export default authSlice.reducer;