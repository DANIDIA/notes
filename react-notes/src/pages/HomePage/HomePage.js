import { Outlet } from 'react-router-dom';
import { HomePageContextProvider } from './HomePage.context';
import { ArticlesActionButtons, ArticlesList } from './components';

export const HomePage = () => {
    return (
        <HomePageContextProvider>
            <div>
                <ArticlesList />
                <ArticlesActionButtons />
                <Outlet />
            </div>
        </HomePageContextProvider>
    );
};

export default HomePage;
