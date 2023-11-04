import { redirect } from 'react-router-dom';
import {
    createArticle,
    getArticlesInJSON,
    loadArticlesFromJSON,
} from '../../pages/article/ArticleViewPage/ArticleViewPage.helpers';

export const handleAction = {
    createEmptyArticle: async function () {
        const id = createArticle({ title: '', lessonDate: '', content: '' });
        return redirect(`/article/${id}/edit`);
    },
    import: async function ({ params, request }, data) {
        const json = data['fileText'];
        loadArticlesFromJSON(json);
    },
    export: async function () {
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
