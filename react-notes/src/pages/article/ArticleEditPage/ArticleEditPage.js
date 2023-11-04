import React, { useContext } from 'react';
import { ArticleEditForm } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticlesContext } from '../context';

export const ArticleEditPage = () => {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const { getArticle, sendArticles, fetchArticles } =
        useContext(ArticlesContext);
    const article = getArticle(articleId);

    const updateArticle = ({ title, lessonDate, content }) => {
        const articles = fetchArticles();
        const index = articles.findIndex((article) => article.id === articleId);
        articles[index] = { title, lessonDate, content, id: articleId };
        sendArticles(articles);
        navigate('/article/' + articleId);
    };

    return <ArticleEditForm {...article} onSave={updateArticle} />;
};

export default ArticleEditPage;
