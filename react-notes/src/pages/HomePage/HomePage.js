import {useEffect, useState} from "react";
import {HomePageContextProvider} from "./HomePage.context";
import {ArticleCreationForm, ArticlesActionButtons} from "./components";

const ARTICLES_LOCAL_STORAGE_KEY = 'articles'

export const HomePage = () => {

    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        const _articles = JSON.parse(localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY))
        if (_articles) {
            setArticles([..._articles])
        }
    }, []);

    const handleArticleTitleClick = (creationDate) => {
        setSelectedArticle(articles.find(article => article.creationDate === creationDate))
    }

    return (
        <HomePageContextProvider>
            <div>
                <ArticleCreationForm/>

                <ArticlesActionButtons/>

                <div>
                    <h3>Articles list</h3>
                    <ul>
                        {articles.map((article, key) => (
                            <li key={key} onClick={() => handleArticleTitleClick(article.creationDate)}>
                                <b>
                                    {article.title}
                                </b>
                            </li>
                        ))}
                    </ul>
                </div>

                {!!selectedArticle && (
                    <div>
                        <h2>{selectedArticle.title}<br/><small>{new Date(selectedArticle.creationDate).toString()}</small>
                        </h2>
                        <p>{selectedArticle.content}</p>
                    </div>
                )}
            </div>
        </HomePageContextProvider>
    )
}

export default HomePage