import { Outlet } from 'react-router-dom';
import { HomePageContextProvider } from './HomePage.context';
import { ArticlesActionButtons, Navbar } from './components';
import './HomePage.styles.css';
import { useState } from 'react';

export const HomePage = () => {
    const [height, setHeight] = useState(document.documentElement.clientHeight);

    return (
        <HomePageContextProvider>
            <div style={{ height }}>
                <div className="fixed-content">
                    <Navbar />
                </div>
                <div className="scrollable-content">
                    <Outlet />
                </div>
            </div>
        </HomePageContextProvider>
    );
};

export default HomePage;
