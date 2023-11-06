import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from './components';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
    const height = document.documentElement.clientHeight;

    return (
        <div style={{ minHeight: height }}>
            <Header />

            <div className={styles.content}>
                <Sidebar style={{ height: height }} />

                <div className={styles.articleContainer}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
