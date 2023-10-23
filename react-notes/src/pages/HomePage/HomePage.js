import { Outlet, useOutlet } from 'react-router-dom';
import { useState } from 'react';

import { getArticles } from '../../articles';

import { HomePageContextProvider } from './HomePage.context';
import { ArticleCreationForm, Header, Navbar } from './components';
import { handleAction } from './HomePage.handleAction';
import styles from './HomePage.module.css';

export async function homePageLoader() {
    return getArticles();
}

export async function homePageAction({ request, params }) {
    const formData = await request.formData();
    const intent = formData.get('intent');
    const handler = handleAction[intent];

    if (handler) await handler(params, formData);
    else throw new Error(`There is not a handler for '${intent}' in HomePage`);

    return null;
}

export const HomePage = () => {
    const [height, setHeight] = useState(document.documentElement.clientHeight);
    const outlet = useOutlet();

    return (
        <HomePageContextProvider>
            <div style={{ minHeight: height }}>
                <Header />
                <div className={styles.content}>
                    <Navbar style={{ height: height }} />
                    <div className={styles.articleContainer}>
                        {outlet ? <Outlet /> : <ArticleCreationForm />}
                    </div>
                </div>
            </div>
        </HomePageContextProvider>
    );
};

export default HomePage;
