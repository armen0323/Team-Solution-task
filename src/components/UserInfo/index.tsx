import React, {FC} from 'react';
import styles from './styles.module.scss'

interface UserInfoProps {
    user: IUser;
}

const UserInfo: FC<UserInfoProps> = ({ user }) => {
    return (
        <div className={styles.wrapper}>
            <img src={user.avatar} alt={user.first_name} className={styles.avatar} />
            <div className={styles.info}>
                <h2 className={styles.name}>
                    {user.first_name} {user.last_name}
                </h2>
                <p className={styles.email}>{user.email}</p>
                <p className={styles.description}>
                    This is a detailed profile view. You can extend this with more user data.
                </p>
            </div>
        </div>
    );
};

export default UserInfo;
