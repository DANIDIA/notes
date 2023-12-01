import { useContext } from 'react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';
import { ArticleLink } from './components';
import { ArticlesContext } from '../../../../pages/article/context';
import classNames from 'classnames';

export const Sidebar = (props) => {
    const { articles, articlesLoadingStatus } = useContext(ArticlesContext);
    const sidebarTitle = articlesLoadingStatus.isLoading
        ? 'loading articles...'
        : articlesLoadingStatus.isOk
          ? articles.length > 0
              ? 'Articles: '
              : 'No articles'
          : 'Error';

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
