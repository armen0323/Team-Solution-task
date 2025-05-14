import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import {Home, NotFound, Signin, Signup, UserDetails, Users} from "@pages/";
import {PrivateRoutesEnum, PublicRoutesEnum} from "@enum/routs.enum";


const AppRoutes = () => {
    return (
        <Routes>
            <Route element={<PublicRoute />}>
                <Route path={PublicRoutesEnum.SignIn} element={<Signin />} />
                <Route path={PublicRoutesEnum.SignUp} element={<Signup />} />
            </Route>
            <Route element={<PrivateRoute />}>
                <Route path={PrivateRoutesEnum.Home} element={<Home />} />
                <Route path={PrivateRoutesEnum.Users} element={<Users />} />
                <Route path={PrivateRoutesEnum.UserDetails} element={<UserDetails />} />
            </Route>
            <Route path="/" element={<Navigate to={PrivateRoutesEnum.Home} />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
};

export default AppRoutes;
