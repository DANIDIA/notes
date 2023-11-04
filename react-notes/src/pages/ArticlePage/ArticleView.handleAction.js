import { redirect } from 'react-router-dom';
import { deleteArticle } from './articles';

export const handleAction = {
    delete: function ({ params }) {
        const articleId = params.articleId;
        deleteArticle(articleId);

        return redirect('/');
    },
    goToEditForm: function () {
        return redirect('./edit');
    },
};
