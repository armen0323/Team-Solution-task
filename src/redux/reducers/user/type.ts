import {RequestStateProperty} from "@redux/reducerCreator";

export interface IUserInfoResponse {
    data: IUser;
    support?: {
        url: string;
        text: string;
    };
}

export interface IUserInitialState {
    userData: RequestStateProperty<IUserPaginationResponse, ErrorState>;
    userInfo:RequestStateProperty<IUserInfoResponse, ErrorState>;
}