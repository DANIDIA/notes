import { useContext, useEffect } from 'react';

import { ARTICLES_LOCAL_STORAGE_KEY } from '../HomePage.constants';
import { HomePageContext } from '../HomePage.context';

export const ArticlesList = () => {
    const { articles, setArticles, setSelectedArticle } =
        useContext(HomePageContext);

    useEffect(() => {
        const _articles = JSON.parse(
            localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY),
        );
        if (_articles) {
            setArticles([..._articles]);
        }

        // eslint-disable-next-line
    }, []);

    const handleArticleTitleClick = (id) => {
        setSelectedArticle(articles.find((article) => article.id === id));
    };

    return (
        <div>
            <h3>Articles list</h3>
            <ul>
                {articles.map((article) => (
                    <li
                        key={article.id}
                        onClick={() => handleArticleTitleClick(article.id)}
                    >
                        <b>{article.title}</b>
                    </li>
                ))}
            </ul>
        </div>
    );
};
