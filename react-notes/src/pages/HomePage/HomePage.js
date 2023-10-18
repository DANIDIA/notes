import { Outlet } from 'react-router-dom';
import { HomePageContextProvider } from './HomePage.context';
import { ArticlesActionButtons, Navbar } from './components';
import styles from './HomePage.module.css';
import { useState } from 'react';

export const HomePage = () => {
    const [height, setHeight] = useState(document.documentElement.clientHeight);

    return (
        <HomePageContextProvider>
            <div style={{ height }}>
                <div className={styles.content}>
                    <Outlet />
                </div>
                <div>
                    <Navbar />
                </div>
            </div>
        </HomePageContextProvider>
    );
};

export default HomePage;
