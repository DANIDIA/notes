import { Outlet } from 'react-router-dom';
import { HomePageContextProvider } from './HomePage.context';
import {
    ArticleCreationForm,
    ArticlesActionButtons,
    ArticlesList,
} from './components';

export const HomePage = () => {
    return (
        <HomePageContextProvider>
            <div>
                <ArticlesList />
                <ArticlesActionButtons />
                <ArticleCreationForm />
                <Outlet />
            </div>
        </HomePageContextProvider>
    );
};

export default HomePage;
