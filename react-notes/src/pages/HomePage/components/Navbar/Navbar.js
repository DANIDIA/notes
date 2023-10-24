import { Form, Link, useLoaderData } from 'react-router-dom';

import styles from './Navbar.module.css';
import { ArticleLink } from './components';

export const Navbar = (props) => {
    const articles = useLoaderData();
    articles.sort((a, b) => new Date(a.lessonDate) - new Date(b.lessonDate));

    return (
        <div {...props} className={styles.navbar}>
            <Form method="post">
                <button
                    type="submit"
                    name="intent"
                    value="createEmptyArticle"
                    className={styles.addBtn}
                >
                    Add article
                </button>
            </Form>
            <h3 className={styles.title}>Articles: </h3>

            <ul>
                {articles.map((article) => (
                    <ArticleLink articleData={article} key={article.id} />
                ))}
            </ul>
        </div>
    );
};
