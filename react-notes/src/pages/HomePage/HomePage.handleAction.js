import { redirect } from 'react-router-dom';
import {
    createArticle,
    getArticlesInJSON,
    loadArticlesFromJSON,
} from '../../articles';

export const handleAction = {
    createEmptyArticle: async function ({ params, request }, data) {
        const id = createArticle({ title: '', lessonDate: '', content: '' });
        return redirect(`/article/${id}/edit`);
    },
    import: async function ({ params, request }, data) {
        const json = data['fileText'];
        loadArticlesFromJSON(json);
    },
    export: async function ({ params, request }, data) {
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
