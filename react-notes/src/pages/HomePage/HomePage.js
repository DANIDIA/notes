import { Outlet } from 'react-router-dom';
import { useState } from 'react';

import { getArticles } from '../../articles';

import { HomePageContextProvider } from './HomePage.context';
import { Header, Navbar } from './components';
import { handleAction } from './HomePage.handleAction';
import styles from './HomePage.module.css';

export async function homePageLoader() {
    return getArticles();
}

export async function homePageAction({ request, params }) {
    const formData = await request.formData();
    const intent = formData.get('intent');
    const handler = handleAction[intent];

    console.log('home page action');

    if (handler) await handler(params, formData);
    else throw new Error(`There arn't a handler for '${intent}' in HomePage`);

    return null;
}

export const HomePage = () => {
    const [height, setHeight] = useState(document.documentElement.clientHeight);

    return (
        <HomePageContextProvider>
            <div style={{ height }}>
                <div className={styles.content}>
                    <Header />
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
