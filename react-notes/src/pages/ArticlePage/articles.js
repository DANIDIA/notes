import { v1 } from 'uuid';
import { ARTICLES_LOCAL_STORAGE_KEY } from '../../layouts';

function importArticles() {
    const localStorageObject = localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY);
    let articles = [];

    if (!!localStorageObject) {
        articles = Array.from(JSON.parse(localStorageObject));
    }

    return articles;
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

export function createArticle({ title, lessonDate, content }) {
    const articles = importArticles();
    const id = v1(Date.now());
    articles.push({ title, lessonDate, content, id });
    exportArticles(articles);
    return id;
}

export function getArticles() {
    return importArticles();
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
    articles[index] = { title, lessonDate, content, id };
    exportArticles(articles);
}
