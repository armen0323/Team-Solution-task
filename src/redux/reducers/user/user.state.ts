import {makeRequestStateProperty} from "@redux/reducerCreator";
import {IUserInfoResponse, IUserInitialState} from "../user/type";

export const initialUserState: IUserInitialState = {
    userData: makeRequestStateProperty<IUserPaginationResponse, ErrorState>(),
    userInfo:makeRequestStateProperty<IUserInfoResponse,ErrorState>()
};