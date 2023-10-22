import { Form, redirect, useLoaderData } from 'react-router-dom';

import { deleteArticle, getArticle } from '../../../../articles';
import { Button } from '../../../../components/Button';

import styles from './ArticleView.module.css';

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
                <Form className={styles.articleForm} method="post">
                    <Button className={styles.deleteButton} type="submit">
                        Delete
                    </Button>
                    <Button type="submit">Edit</Button>
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
