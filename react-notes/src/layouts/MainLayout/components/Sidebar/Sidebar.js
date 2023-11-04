import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import styles from './Sidebar.module.css';
import { ArticleLink } from './components';
import { importArticles } from '../../../../pages/article/helpers';

export const Sidebar = (props) => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let _articles = importArticles();

        setArticles([
            ..._articles.sort(
                (a, b) => new Date(a.lessonDate) - new Date(b.lessonDate),
            ),
        ]);
    }, []);

    return (
        <div {...props} className={styles.navbar}>
            <Link to="article/create" className={styles.addBtn}>
                Add article
            </Link>

            <h3 className={styles.title}>Articles: </h3>

            <ul>
                {articles.map((article) => (
                    <ArticleLink articleData={article} key={article.id} />
                ))}
            </ul>
        </div>
    );
};
