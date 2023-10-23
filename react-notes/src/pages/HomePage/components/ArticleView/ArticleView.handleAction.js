import { redirect } from 'react-router-dom';
import { deleteArticle } from '../../../../articles';

export const handleAction = {
    delete: function ({ params, request }) {
        const articleId = params.articleId;
        deleteArticle(articleId);

        return redirect('/');
    },
    goToEditForm: function ({ params, request }) {
        return redirect('./edit');
    },
};
