import { v1 } from 'uuid';
import { ARTICLES_LOCAL_STORAGE_KEY } from './pages/HomePage';

function exportArticles() {
    return JSON.parse(localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY)) || [];
}

export function createArticle(article) {
    const articles = exportArticles();
    articles.push({ ...article, id: v1(Date.now()) });
    localStorage.setItem(ARTICLES_LOCAL_STORAGE_KEY, JSON.stringify(articles));
}

export function getArticles() {
    const articles = exportArticles();
    return articles;
}

export function getArticle(id) {
    return exportArticles().find((article) => article.id === id);
}

export function deleteArticle(id) {
    const articles = exportArticles();
    localStorage.setItem(
        ARTICLES_LOCAL_STORAGE_KEY,
        JSON.stringify(articles.filter((article) => article.id !== id)),
    );
}
