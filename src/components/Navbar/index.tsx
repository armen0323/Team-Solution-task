import React from 'react';
import styles from './styles.module.scss';
import {Link} from "react-router-dom";
import {PrivateRoutesEnum, PublicRoutesEnum} from "@enum/routs.enum";
import Cookies from "js-cookie";

export const Navbar: React.FC = () => {
    {/* TODO make top navbar go to users page, home page, user details and logout */
    }
    const handleLogout = () => {
        Cookies.remove("access_token");
        window.location.href = PublicRoutesEnum.SignIn
    }
    return (
        <nav className={styles.navbar}>
            <Link to="/" className={styles.logo}>
                MyApp
            </Link>

            <ul className={styles.navLinks}>
                {Object.entries(PrivateRoutesEnum)
                    .filter(([_, path]) => !path.includes(':'))
                    .map(([label, path]) => (
                        <li className={styles.item} key={path}>
                            <Link className={styles.link} to={path}>
                                {label.replace(/([A-Z])/g, ' $1').trim()}
                            </Link>
                        </li>
                    ))}
                <li className={styles.item} onClick={handleLogout}>
                    <p className={styles.link}> Log out</p>
                </li>
            </ul>
        </nav>
    );


};