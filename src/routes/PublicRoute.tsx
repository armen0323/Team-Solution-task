import { Navigate, Outlet } from 'react-router-dom';
import Cookies from 'js-cookie';

const PublicRoute = () => {
    const token = Cookies.get('access_token');
    return token ? <Navigate to="/home" /> : <Outlet />;
};

export default PublicRoute;
