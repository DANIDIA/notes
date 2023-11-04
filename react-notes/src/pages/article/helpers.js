import { ARTICLES_LOCAL_STORAGE_KEY } from '../../layouts';
import { loadArticlesFromJSON } from './ArticlePage/articles';

export const importArticles = () => {
    const localStorageObject = localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY);
    let articles = [];

    if (!!localStorageObject) {
        articles = Array.from(JSON.parse(localStorageObject));
    }

    return articles;
};

export const exportArticles = (articles) => {
    loadArticlesFromJSON(JSON.stringify(articles));
};
