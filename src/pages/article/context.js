import { createContext, useEffect, useState } from 'react';
import { ARTICLES_LOCAL_STORAGE_KEY } from './consts';

export const ArticlesContext = createContext({
    articles: [],
    fetchArticles: () => [],
    sendArticles: (articles) => {},
    getArticle: (id) => ({}),
});

export const ArticlesContextProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        setArticles(fetchArticles());
    }, []);

    const fetchArticles = () => {
        const localStorageObject = localStorage.getItem(
            ARTICLES_LOCAL_STORAGE_KEY,
        );
        let articles = [];

        if (!!localStorageObject) {
            articles = Array.from(JSON.parse(localStorageObject));
        }

        return articles;
    };

    const sendArticles = (articles) => {
        localStorage.setItem(
            ARTICLES_LOCAL_STORAGE_KEY,
            JSON.stringify(articles),
        );
        setArticles(articles);
    };

    const getArticle = (id) =>
        fetchArticles().find((article) => article.id === id);

    return (
        <ArticlesContext.Provider
            value={{
                articles,
                fetchArticles,
                sendArticles,
                getArticle,
            }}
        >
            {children}
        </ArticlesContext.Provider>
    );
};
