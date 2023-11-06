import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';
import { ArticleLink } from './components';
import { ArticlesContext } from '../../../../pages/article/context';
import classNames from 'classnames';

export const Sidebar = (props) => {
    const { articles } = useContext(ArticlesContext);

    return (
        <div {...props} className={styles.navbar}>
            <Link to="article/create" className={styles.addBtn}>
                Add article
            </Link>

            <h3
                className={classNames(styles.title, {
                    [styles.noArticles]: !articles.length,
                })}
            >
                {articles.length ? 'Articles:' : 'No articles'}
            </h3>

            <ul>
                {articles.map((article) => (
                    <ArticleLink articleData={article} key={article.id} />
                ))}
            </ul>
        </div>
    );
};
