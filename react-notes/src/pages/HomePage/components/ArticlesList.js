import { HomePageContext } from "../HomePage.context";

export const ArticlesList = () => {
    const { articles } = useContext(HomePageContext);

    const handleArticleTitleClick = (creationDate) => {
        setSelectedArticle(articles.find((article) => article.creationDate === creationDate));
    };

    return (
        <div>
            <h3>Articles list</h3>
            <ul>
                {articles.map((article, key) => (
                    <li key={key} onClick={() => handleArticleTitleClick(article.creationDate)}>
                        <b>{article.title}</b>
                    </li>
                ))}
            </ul>
        </div>
    );
};
