import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles.module.scss';

const UserNotFound: React.FC = () => {
    return (
        <div className={styles.wrapper}>
            <img src="/images/not-found.webp" alt="User Not Found" className={styles.image} />
            <h2 className={styles.title}>User Not Found</h2>
            <p className={styles.description}>
                Sorry, we couldn’t find the user you were looking for. It may have been removed or the ID is incorrect.
            </p>
            <Link to="/users" className={styles.button}>
                ← Back to Users
            </Link>
        </div>
    );
};

export default UserNotFound;
