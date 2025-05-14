import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';
import {Navbar} from "@components/Navbar";

const PrivateRoute = () => {
    const token = Cookies.get('access_token');
    // @Note aystex petq e stugver naev useri infon ,bayc qani vor es api-n chuni hamapatasxan endpoint stugumy katarelem miayn tokenov
    return token ? <div>
        <Navbar/>
        <Outlet />
    </div>  : <Navigate to="/signin" />;
};

export default PrivateRoute;
