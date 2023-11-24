import { createContext, useEffect, useState } from 'react';
import { ARTICLES_LOCAL_STORAGE_KEY, BACKEND_URL } from './consts';

export const ArticlesContext = createContext({
    articles: [],
    fetchArticles: () => [],
    sendArticles: (articles) => {},
    getArticle: (id) => ({}),
});

export const ArticlesContextProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const asyncSetArticles = async () => setArticles(await fetchArticles());
        asyncSetArticles();
    }, []);

    const fetchArticles = async () => {
        const response = await fetch(BACKEND_URL);

        return JSON.parse(await response.json());
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
