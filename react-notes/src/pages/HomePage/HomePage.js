import {HomePageContextProvider} from "./HomePage.context";
import {ArticleCreationForm, ArticlesActionButtons, ArticlesList, ArticleView} from "./components";

export const HomePage = () => {

    return (
        <HomePageContextProvider>
            <div>
                <ArticleCreationForm/>

                <ArticlesActionButtons/>

                <ArticlesList/>

                <ArticleView/>
            </div>
        </HomePageContextProvider>
    );
};

export default HomePage;
