import { v1 } from 'uuid';
import { ARTICLES_LOCAL_STORAGE_KEY } from './pages/HomePage';

function importArticles() {
    const articles = Array.from(
        JSON.parse(localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY)),
    );
    return articles || [];
}

function exportArticles(articles) {
    loadArticlesFromJSON(JSON.stringify(articles));
}

export function loadArticlesFromJSON(json) {
    localStorage.setItem(ARTICLES_LOCAL_STORAGE_KEY, json);
}

export function getArticlesInJSON() {
    return localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY);
}

export function createArticle(article) {
    const articles = importArticles();
    articles.push({ ...article, id: v1(Date.now()) });
    exportArticles(articles);
}

export function getArticles() {
    const articles = importArticles();
    return articles;
}

export function getArticle(id) {
    return importArticles().find((article) => article.id === id);
}

export function deleteArticle(id) {
    const articles = importArticles();
    exportArticles(articles.filter((article) => article.id !== id));
}

export function updateArticle(id, { title, lessonDate, content }) {
    const articles = importArticles();
    const index = articles.findIndex((article) => article.id === id);
    articles[index] = { id, title, lessonDate, content };
    exportArticles(articles);
}
