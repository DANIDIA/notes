import { v1 } from 'uuid';
import { ARTICLES_LOCAL_STORAGE_KEY } from '../../../layouts';
import { sendArticles, fetchArticles } from '../helpers';

export function loadArticlesFromJSON(json) {
    localStorage.setItem(ARTICLES_LOCAL_STORAGE_KEY, json);
}

export function getArticlesInJSON() {
    return localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY);
}

export function createArticle({ title, lessonDate, content }) {
    const articles = fetchArticles();
    const id = v1(Date.now());
    articles.push({ title, lessonDate, content, id });
    sendArticles(articles);
    return id;
}

export function getArticles() {
    return fetchArticles();
}

export function getArticle(id) {
    return fetchArticles().find((article) => article.id === id);
}

export function updateArticle(id, { title, lessonDate, content }) {
    const articles = fetchArticles();
    const index = articles.findIndex((article) => article.id === id);
    articles[index] = { title, lessonDate, content, id };
    sendArticles(articles);
}
