import React, {useEffect} from "react";
import styles from "./styles.module.scss"
import { useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "@hooks/useRedux";
import {userInfoThunk} from "@redux/reducers/user/user.thunk";
import {UserInfo, UserNotFound} from "@components";
import {resetUserInfo} from "@redux/reducers/user/user.slice";

 const UserDetails:React.FC = () => {
    // TODO  create userDetails page, show user info by id; id declared in the url params, dynamically read id and get specific info for that user
     const { id } = useParams()
     const dispatch = useAppDispatch();
     const userInfo = useAppSelector(state => state.usersData.userInfo)
     const user = userInfo?.data?.data;
     useEffect(() => {
         if (id) {
             dispatch(resetUserInfo());
             dispatch(userInfoThunk(id));
         }
     }, [id]);
     if (!user && userInfo?.isLoading) {
         return <div className={styles.loading}>Loading user...</div>;
     }
     if (!user && !userInfo?.isLoading && userInfo?.error) {
       return  <UserNotFound/>
     }
     if (!user) {
         return null;
     }
    return (
        <div className={styles.userDetails}>
            <UserInfo user={user}/>
        </div>
    )
}

export default UserDetails