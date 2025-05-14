import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './reducers/auth/auth.slice'
import userSlice from "@redux/reducers/user/user.slice";

export const rootReducer = combineReducers({
    login:authSlice,
    usersData:userSlice
});