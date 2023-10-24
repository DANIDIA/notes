import { Link } from 'react-router-dom';

import styles from './ArticleLink.module.css';

export function ArticleLink({ articleData }) {
    const titleSytle = articleData.title ? styles.title : styles.untitled;

    return (
        <li className={styles.container}>
            <Link to={`article/${articleData.id}`}>
                <div className={titleSytle}>
                    {articleData.title || 'Untitled'}
                </div>
                <div className={styles.lessonDate}>
                    {articleData.lessonDate || 'no date'}
                </div>
            </Link>
        </li>
    );
}
