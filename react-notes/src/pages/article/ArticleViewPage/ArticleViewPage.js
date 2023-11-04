import { useNavigate, useParams } from 'react-router-dom';

import { Button } from '../../../components';
import styles from './ArticleViewPage.module.css';
import { sendArticles, fetchArticles, getArticle } from '../helpers';

export const ArticleViewPage = () => {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const selectedArticle = getArticle(articleId);

    const onDelete = () => {
        const articles = fetchArticles();
        sendArticles(articles.filter((article) => article.id !== articleId));

        navigate('/');
    };

    const onEdit = () => {
        navigate(`/article/${articleId}/edit`);
    };

    return (
        <div>
            <div>
                <div className={styles.articleForm}>
                    <Button onClick={onEdit} className={styles.firstButton}>
                        Edit
                    </Button>

                    <Button onClick={onDelete}>Delete</Button>
                </div>
            </div>

            <h1 className={styles.title}>{selectedArticle.title}</h1>

            <small className={styles.lessonDate}>
                {selectedArticle.lessonDate}
            </small>

            <p className={styles.content}>{selectedArticle.content}</p>
        </div>
    );
};
