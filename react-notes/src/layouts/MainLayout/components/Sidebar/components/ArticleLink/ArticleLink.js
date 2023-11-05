import { useContext } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import classNames from 'classnames';

import { ArticlesContext } from '../../../../../../pages/article/context';

import styles from './ArticleLink.module.css';

export const ArticleLink = ({ articleData }) => {
    const navigate = useNavigate();
    const { fetchArticles, sendArticles } = useContext(ArticlesContext);
    const { articleId: currentArticleId } = useParams();
    const articleURL = `/article/${articleData.id}`;

    const onDelete = () => {
        const articles = fetchArticles();
        sendArticles(
            articles.filter((article) => article.id !== articleData.id),
        );

        if (articleData.id === currentArticleId) navigate('/');
    };

    const onEdit = () => {
        navigate(`${articleURL}/edit`);
    };

    const linkOnClickHandle = (e) => {
        if (e.target.tagName === 'svg') e.preventDefault();
    };

    return (
        <li className={styles.container}>
            <Link onClick={linkOnClickHandle} to={articleURL}>
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
                        <svg
                            fill="#e2e3e7"
                            viewBox="0 0 200 200"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            stroke="#e2e3e7"
                            className={styles.editIco}
                        >
                            <g id="SVGRepo_iconCarrier">
                                <title />

                                <path d="M170,70.5a10,10,0,0,0-10,10V140a20.06,20.06,0,0,1-20,20H60a20.06,20.06,0,0,1-20-20V60A20.06,20.06,0,0,1,60,40h59.5a10,10,0,0,0,0-20H60A40.12,40.12,0,0,0,20,60v80a40.12,40.12,0,0,0,40,40h80a40.12,40.12,0,0,0,40-40V80.5A10,10,0,0,0,170,70.5Zm-77,39a9.67,9.67,0,0,0,14,0L164.5,52a9.9,9.9,0,0,0-14-14L93,95.5A9.67,9.67,0,0,0,93,109.5Z" />
                            </g>
                        </svg>
                    </button>
                    <button className={styles.button} onClick={onDelete}>
                        <svg
                            fill="#e2e3e7"
                            viewBox="0 0 200 200"
                            data-name="Layer 1"
                            xmlns="http://www.w3.org/2000/svg"
                            className={styles.bucketIco}
                        >
                            <g id="SVGRepo_iconCarrier">
                                <title />

                                <path d="M170,47.5H30a10,10,0,0,0,0,20h5.5l9,88a29.91,29.91,0,0,0,30,27h51c15.5,0,28-11.5,30-27l9-88H170a10,10,0,0,0,0-20Zm-34.5,106a10.23,10.23,0,0,1-10,9h-51a10.23,10.23,0,0,1-10-9l-9-86h89l-9,86Zm-50.5-6a10,10,0,0,0,10-10V90a10,10,0,0,0-20,0v47.5A10,10,0,0,0,85,147.5Zm30,0a10,10,0,0,0,10-10V90a10,10,0,0,0-20,0v47.5A10,10,0,0,0,115,147.5ZM85,37.5h27.5a10,10,0,0,0,0-20H85a10,10,0,0,0,0,20Z" />
                            </g>
                        </svg>
                    </button>
                </div>
            </Link>
        </li>
    );
};
