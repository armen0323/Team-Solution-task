import styles from './styles.module.scss';
import {FC} from "react";
import {generatePath, Link} from "react-router-dom";
import {PrivateRoutesEnum} from "@enum/routs.enum";

// TODO extends User entity type which must be declared global
interface UserCardProps {
    user: IUser;
}

 const UserCard: FC<UserCardProps> = ({user}) => {

    return (
        <Link className={styles.card} to={generatePath(PrivateRoutesEnum.UserDetails, { id: String(user.id) })}>
            <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} className={styles.avatar} />
            <div className={styles.info}>
                <h2 className={styles.name}>
                    {user.first_name} {user.last_name}
                </h2>
                <p className={styles.email}>{user.email}</p>
            </div>
        </Link>
    );
};

export default UserCard;