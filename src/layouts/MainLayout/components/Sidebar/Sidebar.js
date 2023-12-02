import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';
import { ArticleLink } from './components';
import { ArticlesContext } from '../../../../pages/article/context';
import classNames from 'classnames';

export const Sidebar = (props) => {
    const { articles, articlesLoadingPromise } = useContext(ArticlesContext);
    const [sidebarTitle, setSidebarTitle] = useState('Articles loading...');

    useEffect(() => {
        if (!articlesLoadingPromise) return;

        articlesLoadingPromise
            .then(() => {
                articles.length > 0
                    ? setSidebarTitle('Articles: ')
                    : setSidebarTitle('No articles');
            })
            .catch((reason) => {
                setSidebarTitle('Error');
                alert(reason);
            });
    }, [articlesLoadingPromise, articles]);

    return (
        <div {...props} className={styles.sidebar}>
            <Link to="article/create" className={styles.addBtn}>
                Add article
            </Link>

            <h3
                className={classNames(styles.title, {
                    [styles.noArticles]: articles.length === 0,
                })}
            >
                {sidebarTitle}
            </h3>

            <ul>
                {articles.map((article) => (
                    <ArticleLink articleData={article} key={article.id} />
                ))}
            </ul>
        </div>
    );
};
