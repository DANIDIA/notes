import { useNavigate, useParams } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import { ArticlesContext } from '../context';
import styles from './ArticleViewPage.module.css';

export const ArticleViewPage = () => {
    const { articleId } = useParams();
    const { getArticle, articlesLoadingPromise } = useContext(ArticlesContext);
    const selectedArticle = getArticle(articleId);
    const navigate = useNavigate();
    const [content, setContent] = useState('content is loading...');

    useEffect(() => {
        if (!articlesLoadingPromise) return;

        articlesLoadingPromise
            .then((_articles) => {
                if (!selectedArticle) return;

                setContent(
                    <div>
                        <div>
                            <div className={styles.articleForm}></div>
                        </div>

                        <h1 className={styles.title}>
                            {selectedArticle.title}
                        </h1>
                        <small className={styles.lessonDate}>
                            {selectedArticle.lessonDate}
                        </small>
                        <p className={styles.content}>
                            {selectedArticle.content}
                        </p>
                    </div>,
                );
            })
            .catch((reason) => {
                setContent('Something is wrong...');
                alert(reason);
                navigate('/');
            });
    }, [articlesLoadingPromise, selectedArticle]);

    return content;
};
