import React, {FC} from 'react';
import styles from './styles.module.scss';
import {Pagination, UserCard} from "@components";
import useUsers from "./_services/useUsers";


const Users: FC = () => {
  // TODO define global type User type and , The state is to that type
    const { usersData, totalPages, currentPage, handlePageChange,isLoading } = useUsers()

    if (!usersData && isLoading) {
        return <div className={styles.loading}>Loading users...</div>;
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                {usersData?.map((element) => {
                    return <div className={styles.user} key={element?.id}>
                        <UserCard
                            user={element}
                        />
                    </div>
                })}
            </div>
            <Pagination
                currentPage={currentPage}
                totalPages={totalPages ?? 1}
                onPageChange={handlePageChange}
            />
        </div>
    );
};

export default Users;