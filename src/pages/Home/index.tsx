import React, {useEffect} from "react"
import {resetUserInfo} from "@redux/reducers/user/user.slice";
import {userInfoThunk} from "@redux/reducers/user/user.thunk";
import {useAppDispatch, useAppSelector} from "@hooks/useRedux";
import styles from "./styles.module.scss";
import {UserInfo} from "@components";

 const Home:React.FC = () => {
    // TODO make home page and show random user info used https://reqres.in/api/users/:id or other api as you wish
     const dispatch = useAppDispatch();
     const userInfo = useAppSelector(state => state.usersData.userInfo)
     const user = userInfo?.data?.data;
     const randomId = Math.floor(Math.random() * 12) + 1;
     useEffect(() => {
         if (randomId) {
             dispatch(resetUserInfo());
             dispatch(userInfoThunk(String(randomId)));
         }
     }, []);

     if (!user && userInfo?.isLoading) {
         return <div className={styles.loading}>Loading user...</div>;
     }

     if (!user) {
         return null;
     }
    return (
        <div className={styles.home}>
            <UserInfo user={user}/>
        </div>
    )
}
export default Home