import { Form, Link, redirect, useLoaderData } from 'react-router-dom';

import { deleteArticle, getArticle } from '../../../../articles';
import { Button } from '../../../../components/Button';

import styles from './ArticleView.module.css';

export function articleLoader({ params }) {
    const article = getArticle(params.articleId);
    return article;
}

export async function articleAction({ params, request }) {
    const formData = await request.formData();
    const intent = formData.get('intent');

    if (intent == 'delete') {
        deleteArticle(params.articleId);
        return redirect('/');
    } else if (intent == 'goToEditForm') {
        return redirect(`./edit`);
    }
}

export const ArticleView = () => {
    const selectedArticle = useLoaderData();

    return selectedArticle ? (
        <div>
            <div>
                <Form className={styles.articleForm} method="post">
                    <Button
                        name="intent"
                        value="delete"
                        className={styles.deleteButton}
                        type="submit"
                    >
                        Delete
                    </Button>
                    <Button name="intent" value="goToEditForm" type="submit">
                        Edit
                    </Button>
                </Form>
            </div>
            <h1 className={styles.title}>{selectedArticle.title}</h1>
            <small className={styles.lessonDate}>
                {selectedArticle.lessonDate}
            </small>

            <p className={styles.content}>{selectedArticle.content}</p>
        </div>
    ) : (
        <div>Not finded</div>
    );
};
