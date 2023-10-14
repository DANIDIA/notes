import { HomePageContextProvider } from './HomePage.context';
import {
    ArticleCreationForm,
    ArticlesActionButtons,
    ArticlesList,
    ArticleView,
} from './components';

// ToDo: change url to an article ID
// ToDo: show an article when url is with an article ID

export const HomePage = () => (
    <HomePageContextProvider>
        <div>
            <ArticleCreationForm />

            <ArticlesActionButtons />

            <ArticlesList />

            <ArticleView />
        </div>
    </HomePageContextProvider>
);

export default HomePage;
