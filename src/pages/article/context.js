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

    const sendArticle = async (articleData) => {
        const response = await fetch(BACKEND_URL, {
            method: 'post',
            body: JSON.stringify(articleData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const location = response.getHeader('location');
        const values = location.split('/');
        const id = values[values.length - 1];

        const _articles = articles;
        _articles.push({ id, ...articleData });
        setArticles(_articles);

        return id;
    };

    const removeArticleRequest = (id) => {
        fetch(`${BACKEND_URL}/${id}`, { method: 'delete' });

        const _articles = articles.filter((a) => a.id !== id);
        setArticles(_articles);
    };

    const sendUpdatedArticle = (id, articleDate) => {
        fetch(`${BACKEND_URL}/${id}`, {
            method: 'put',
            body: JSON.stringify(articleDate),
        });

        const _articles = articles;
        const index = _articles.findIndex((a) => a.id === id);
        _articles[index] = { id, ...articleDate };
        setArticles(_articles);
    };

    const getArticle = (id) => articles.find((article) => article.id === id);

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
