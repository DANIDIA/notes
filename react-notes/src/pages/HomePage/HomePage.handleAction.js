import {
    createArticle,
    getArticlesInJSON,
    loadArticlesFromJSON,
} from '../../articles';

export const handleAction = {
    create: async function (params, formData) {
        const article = Object.fromEntries(formData);
        article.intent = undefined;
        createArticle(article);
    },
    import: async function (params, formData) {
        const json = formData.get('fileText');
        loadArticlesFromJSON(json);
    },
    export: async function (params, formData) {
        const element = document.createElement('a');
        element.setAttribute(
            'href',
            'data:text/json;charset=utf-8,' + getArticlesInJSON(),
        );
        element.setAttribute('download', `articles-export-${Date.now()}.json`);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    },
};
