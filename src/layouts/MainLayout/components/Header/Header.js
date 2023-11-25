import { Link } from 'react-router-dom';

import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                HOME
            </Link>
        </header>
    );
};
