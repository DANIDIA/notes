import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { ArticlesContext } from '../context';
import styles from './ArticleViewPage.module.css';
import { LoadingIndicator } from '../../../components/LoadingIndicator';

export const ArticleViewPage = () => {
    const { articleId } = useParams();
    const { getArticle, articlesLoadingStatus } = useContext(ArticlesContext);
    const selectedArticle = getArticle(articleId);

    return articlesLoadingStatus.error ? (
        'ERROR'
    ) : articlesLoadingStatus.isLoading ? (
        <LoadingIndicator
            size={200}
            color="#21252b"
            className={styles.loadingIndicator}
        />
    ) : (
        <div>
            <h1 className={styles.title}>{selectedArticle.title}</h1>
            <small className={styles.lessonDate}>
                {selectedArticle.lessonDate}
            </small>
            <p>{selectedArticle.content}</p>
        </div>
    );
};
