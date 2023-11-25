import { Outlet } from 'react-router-dom';

import { Header, Sidebar } from './components';
import styles from './MainLayout.module.css';
import { useEffect, useState } from 'react';

export const MainLayout = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const onWindowHeightResizeHandle = () => {
            setWindowHeight(window.innerHeight);
        };

        window.addEventListener('resize', onWindowHeightResizeHandle);

        return () =>
            window.removeEventListener('resize', onWindowHeightResizeHandle);
    }, []);

    return (
        <div style={{ minHeight: windowHeight }}>
            <Header />

            <div className={styles.content}>
                <Sidebar style={{ height: windowHeight }} />

                <div className={styles.articleContainer}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default MainLayout;
