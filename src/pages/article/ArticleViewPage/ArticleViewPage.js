import { useParams } from 'react-router-dom';

import styles from './ArticleViewPage.module.css';
import { useContext } from 'react';
import { ArticlesContext } from '../context';

export const ArticleViewPage = () => {
    const { articleId } = useParams();
    const { getArticle, articlesLoadingStatus } = useContext(ArticlesContext);
    const selectedArticle = getArticle(articleId);

    return !articlesLoadingStatus.isLoading && !articlesLoadingStatus.error ? (
        <div>
            <div>
                <div className={styles.articleForm}></div>
            </div>

            <h1 className={styles.title}>{selectedArticle.title}</h1>
            <small className={styles.lessonDate}>
                {selectedArticle.lessonDate}
            </small>
            <p className={styles.content}>{selectedArticle.content}</p>
        </div>
    ) : articlesLoadingStatus.isOk === false ? (
        articlesLoadingStatus.error
    ) : (
        'content is loading...'
    );
};
