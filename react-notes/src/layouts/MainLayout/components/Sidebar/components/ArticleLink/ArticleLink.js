import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';
import { IoIosCreate, IoMdTrash } from 'react-icons/io';

import { ArticlesContext } from '../../../../../../pages/article/context';

import styles from './ArticleLink.module.css';

export const ArticleLink = ({ articleData }) => {
    const navigate = useNavigate();
    const { fetchArticles, sendArticles } = useContext(ArticlesContext);
    const { articleId: currentArticleId } = useParams();
    const articleURL = `/article/${articleData.id}`;
    const isArticleOpened = articleData.id === currentArticleId;

    const onDelete = (e) => {
        const articles = fetchArticles();
        sendArticles(
            articles.filter((article) => article.id !== articleData.id),
        );

        if (isArticleOpened) navigate('/');
        e.defaultPrevented = true;
    };

    const onEdit = (e) => {
        navigate(`${articleURL}/edit`);
        e.defaultPrevented = true;
    };

    const linkOnClickHandle = (e) => {
        if (e.defaultPrevented) e.preventDefault();
    };

    return (
        <li
            className={classNames(styles.container, {
                [styles.selected]: isArticleOpened,
            })}
        >
            <Link to={articleURL} onClick={linkOnClickHandle}>
                <div>
                    <div
                        className={classNames(
                            articleData.title ? styles.title : styles.untitled,
                        )}
                    >
                        {articleData.title || 'Untitled'}
                    </div>

                    <div className={styles.lessonDate}>
                        {articleData.lessonDate || 'no date'}
                    </div>
                </div>
                <div className={styles.btnContainer}>
                    <button className={styles.button} onClick={onEdit}>
                        <IoIosCreate className={styles.editIco} />
                    </button>
                    <button className={styles.button} onClick={onDelete}>
                        <IoMdTrash className={styles.deleteIco} />
                    </button>
                </div>
            </Link>
        </li>
    );
};
