import {makeRequestStateProperty} from '../../reducerCreator';
import {IAuthInitialState, ILoginResponse} from "./types";

export const initialLoginState: IAuthInitialState = {
    loginState: makeRequestStateProperty<ILoginResponse, ErrorState>(),
    signupState:makeRequestStateProperty<ILoginResponse,ErrorState>()
};
