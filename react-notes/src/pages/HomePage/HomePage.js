import { Outlet } from 'react-router-dom';

import { getArticles } from '../../articles';

import { HomePageContextProvider } from './HomePage.context';
import { Header, Navbar } from './components';
import { handleAction } from './HomePage.handleAction';
import styles from './HomePage.module.css';
import { handlerMatch } from '../../handlerMatch';

export async function homePageLoader() {
    return getArticles();
}

export const homePageAction = async (args) => handlerMatch(args, handleAction);

export const HomePage = () => {
    const height = document.documentElement.clientHeight;

    return (
        <HomePageContextProvider>
            <div style={{ minHeight: height }}>
                <Header />
                <div className={styles.content}>
                    <Navbar style={{ height: height }} />
                    <div className={styles.articleContainer}>
                        <Outlet />
                    </div>
                </div>
            </div>
        </HomePageContextProvider>
    );
};

export default HomePage;
