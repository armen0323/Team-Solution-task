import {RequestStateProperty} from "@redux/reducerCreator";


export interface ILoginResponse {
    token: string;
}

export interface IAuthInitialState {
    loginState: RequestStateProperty<ILoginResponse, ErrorState>;
    signupState: RequestStateProperty<ILoginResponse, ErrorState>;
}

export interface ILoginPayload {
    email: string;
    password: string;
}