import {createSlice} from "@reduxjs/toolkit";
import {initialUserState} from "./user.state";
import {makeRequestExtraReducer, RequestList} from "@redux/reducerCreator";
import {userInfoThunk, userThunk} from "./user.thunk";
import {IUserInitialState} from "./type";

const userSlice = createSlice({
    name: 'user',
    initialState: initialUserState,
    reducers: {
        resetUserInfo: (state) => {
            state.userInfo.data = null;
        }

    },
    extraReducers: (builder) => {
        makeRequestExtraReducer<RequestList<IUserInitialState>>(
            builder,
            userThunk,
            "userData"
        );
        makeRequestExtraReducer<RequestList<IUserInitialState>>(
            builder,
            userInfoThunk,
            "userInfo"
        );
    }
})
export const {resetUserInfo} = userSlice.actions;
export default userSlice.reducer;