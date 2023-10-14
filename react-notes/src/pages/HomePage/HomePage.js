import {HomePageContext, HomePageContextProvider} from "./HomePage.context";
import {ArticleCreationForm, ArticlesActionButtons, ArticlesList, ArticleView} from "./components";
import {useContext} from "react";

export const HomePage = () => (
    <HomePageContextProvider>
        <div>
            <ArticleCreationForm/>

            <ArticlesActionButtons/>

            <ArticlesList/>

            <ArticleView/>
        </div>
    </HomePageContextProvider>
);

export default HomePage;
