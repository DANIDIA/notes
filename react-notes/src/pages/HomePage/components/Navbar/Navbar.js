import { Link, useLoaderData } from 'react-router-dom';
import './Navbar.styles.css';

export const Navbar = () => {
    const articles = useLoaderData();

    return (
        <div className="navbar">
            <div className="content">
                <h3 className="title">Articles: </h3>
                <ul>
                    {articles.map((article) => (
                        <li className="link" key={article.id}>
                            <Link to={`article/${article.id}`}>
                                <div className="link-title">
                                    {article.title}
                                </div>
                                <div className="link-addition">
                                    <div className="link-lesson-date">
                                        {article.lessonDate}
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
