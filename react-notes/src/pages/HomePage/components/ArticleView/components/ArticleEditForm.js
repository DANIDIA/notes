import { redirect, useLoaderData } from 'react-router-dom';
import { getArticle, updateArticle } from '../../../../../articles';
import { ArticleForm } from '../../../../../components/ArticleForm';

export function articleEditFormLoader({ params }) {
    return getArticle(params.articleId);
}

export async function articleEditFormAction({ params, request }) {
    const formData = await request.formData();
    const articleData = Object.fromEntries(formData);
    const id = params.articleId;

    updateArticle(id, articleData);
    return redirect(`/article/${id}`);
}

export function ArticleEditForm() {
    const article = useLoaderData();
    return <ArticleForm articleData={article} buttonText="Save changes" />;
}
