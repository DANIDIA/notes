import { Link } from 'react-router-dom';
import classNames from 'classnames';

import styles from './ArticleLink.module.css';

export const ArticleLink = ({ articleData }) => (
    <li className={styles.container}>
        <Link to={`article/${articleData.id}`}>
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
        </Link>
    </li>
);
