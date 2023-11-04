import { ARTICLES_LOCAL_STORAGE_KEY } from '../../layouts';

export const fetchArticles = () => {
    const localStorageObject = localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY);
    let articles = [];

    if (!!localStorageObject) {
        articles = Array.from(JSON.parse(localStorageObject));
    }

    return articles;
};

export const sendArticles = (articles) => {
    localStorage.setItem(ARTICLES_LOCAL_STORAGE_KEY, JSON.stringify(articles));
};

export const getArticle = (id) => {
    return fetchArticles().find((article) => article.id === id);
};
