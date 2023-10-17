import { Link, useLoaderData } from 'react-router-dom';
import { getArticles } from '../../../articles';

export async function articlesListLoader() {
    return getArticles();
}

export const ArticlesList = () => {
    const articles = useLoaderData();

    return (
        <div>
            <h3>Articles list</h3>
            <ul>
                {articles.map((article) => (
                    <li key={article.id}>
                        <b>
                            <Link to={`article/${article.id}`}>
                                {article.title}
                            </Link>
                        </b>
                    </li>
                ))}
            </ul>
        </div>
    );
};
