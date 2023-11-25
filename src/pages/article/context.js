import { createContext, useEffect, useState } from 'react';
import { BACKEND_URL } from './consts';

export const ArticlesContext = createContext({
    articles: [],
    fetchArticles: () => [],
    sendArticle: (artilce) => {},
    removeArticleRequest: (id) => {},
    sendUpdatedArticle: (id, articleData) => {},
    getArticle: (id) => ({}),
});

export const ArticlesContextProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [areArticlesLoad, setAreArticlesLoad] = useState(false);

    useEffect(() => {
        (async () => {
            console.log('preload starts');
            const _articles = await fetchArticles();
            setArticles(_articles);
        })().then(() => setAreArticlesLoad(true));
    }, []);

    const fetchArticles = async () => {
        const response = await fetch(BACKEND_URL, { method: 'get' });
        const json = await response.json();
        const _articles = [];

        json.forEach((a) => {
            const date = new Date(a.LessonDate);
            const lessonDateString = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;

            _articles.push({
                id: a.Id,
                title: a.Title,
                lessonDate: lessonDateString,
                content: a.Content,
            });
        });

        return _articles;
    };

    const sendArticle = async (articleData) => {
        const response = await fetch(BACKEND_URL, {
            method: 'post',
            body: JSON.stringify(articleData),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const id = (await response.json()).Id;

        const _articles = [...articles, { id, ...articleData }];
        setArticles(_articles);

        return id;
    };

    const removeArticleRequest = async (id) => {
        const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: 'delete',
        });

        if (!response.ok) return;

        const _articles = articles.filter((a) => a.id !== id);
        setArticles(_articles);
    };

    const sendUpdatedArticle = async (id, articleData) => {
        const requestBody = { ...articleData };
        requestBody.lessonDate = new Date(articleData.lessonDate).toJSON();

        const response = await fetch(`${BACKEND_URL}/${id}`, {
            method: 'put',
            body: JSON.stringify(requestBody),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) return;

        const _articles = articles.map((a) =>
            a.id === id ? { id, ...articleData } : a,
        );
        setArticles(_articles);
    };

    const getArticle = (id) => articles.find((article) => article.id === id);

    return (
        <ArticlesContext.Provider
            value={{
                articles,
                fetchArticles,
                sendArticle,
                removeArticleRequest,
                sendUpdatedArticle,
                getArticle,
            }}
        >
            {children}
        </ArticlesContext.Provider>
    );
};
