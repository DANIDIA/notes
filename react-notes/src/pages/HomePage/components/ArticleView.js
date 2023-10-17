import { Form, redirect, useLoaderData } from 'react-router-dom';
import { deleteArticle, getArticle } from '../../../articles';

export function articleLoader({ params }) {
    const article = getArticle(params.articleId);
    return article;
}

export function articleAction({ params }) {
    deleteArticle(params.articleId);
    return redirect('/');
}

export const ArticleView = () => {
    const selectedArticle = useLoaderData();

    // ToDo: Far later: editing of an article

    return selectedArticle ? (
        <div>
            <div>
                <h2>{selectedArticle.title}</h2>
                <Form method="post">
                    <button type="submit">X</button>
                </Form>
            </div>

            <small>{selectedArticle.lessonDate}</small>

            <p>{selectedArticle.content}</p>
        </div>
    ) : (
        <div>Not finded</div>
    );
};
