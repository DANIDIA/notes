import { createContext, useEffect, useState } from 'react';
import { ARTICLES_LOCAL_STORAGE_KEY, BACKEND_URL } from './consts';

export const ArticlesContext = createContext({
    articles: [],
    fetchArticles: () => [],
    sendArticles: (articles) => {},
    sendArticle: (artilce) => {},
    removeArticleRequest: (id) => {},
    updateArticle: (id, articleData) => {},
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

    const sendArticle = async (article) => {
        const response = await fetch(BACKEND_URL, {
            method: 'post',
            body: JSON.stringify(article),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const location = response.getHeader('location');
        const values = location.split('/');
        return values[values.length - 1];
    };

    const removeArticleRequest = (id) => {
        fetch(`${BACKEND_URL}/${id}`, { method: 'delete' });
    };

    const sendUpdatedArticle = (id, articleDate) => {
        fetch(`${BACKEND_URL}/${id}`, {
            method: 'put',
            body: JSON.stringify(articleDate),
        });
    };

    const getArticle = (id) =>
        fetchArticles().find((article) => article.id === id);

    return (
        <ArticlesContext.Provider
            value={{
                articles,
                fetchArticles,
                sendArticles,
                sendArticle,
                removeArticleRequest,
                updateArticle: sendUpdatedArticle,
                getArticle,
            }}
        >
            {children}
        </ArticlesContext.Provider>
    );
};
