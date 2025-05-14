import styles from './styles.module.scss'
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.code}>404</h1>
            <p className={styles.title}>Page Not Found</p>
            <p className={styles.description}>
                The page you're looking for doesn't exist or has been moved.
            </p>
            <Link to="/" className={styles.homeButton}>
                ← Back to Home
            </Link>
        </div>
    )
}
export default NotFound