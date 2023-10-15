import { useContext } from 'react';

import { HomePageContext } from '../HomePage.context';
import { ARTICLES_LOCAL_STORAGE_KEY } from '../HomePage.constants';

export const ArticleView = () => {
    const { selectedArticle, articles, setArticles, setSelectedArticle } =
        useContext(HomePageContext);

    function handleDeleteArticleClick(e) {
        const _articles = [...articles.filter((a) => a !== selectedArticle)];
        localStorage.setItem(
            ARTICLES_LOCAL_STORAGE_KEY,
            JSON.stringify(_articles),
        );
        setArticles(_articles);
        setSelectedArticle(null);
    }
    
    // ToDo: Far later: editing of an article

    return !!selectedArticle ? (
        <div>
            <div>
                <h2>{selectedArticle.title}</h2>
                <button onClick={handleDeleteArticleClick}>X</button>
            </div>

            <small>{selectedArticle.lessonDate}</small>

            <p>{selectedArticle.content}</p>
        </div>
    ) : null;
};
