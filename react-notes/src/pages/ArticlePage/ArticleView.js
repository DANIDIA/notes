import { Form, Outlet, useLoaderData, useOutlet } from 'react-router-dom';

import { getArticle } from '../../articles';
import { Button } from '../../components/Button';
import { handlerMatch } from '../../handlerMatch';

import { handleAction } from './ArticleView.handleAction';
import styles from './ArticleView.module.css';

export function articleLoader({ params }) {
    const article = getArticle(params.articleId);
    return article;
}

export async function articleAction(args) {
    return handlerMatch(args, handleAction);
}

export const ArticleView = () => {
    const selectedArticle = useLoaderData();
    const outlet = useOutlet();

    return outlet ? (
        <Outlet />
    ) : (
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
            <Outlet />
        </div>
    );
};
