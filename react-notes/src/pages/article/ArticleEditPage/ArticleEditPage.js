import React from 'react';
import { ArticleEditForm } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { getArticle } from '../ArticleViewPage/ArticleViewPage.helpers';
import { fetchArticles, sendArticles } from '../helpers';

export const ArticleEditPage = () => {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const article = getArticle(articleId);

    const updateArticle = ({ title, lessonDate, content }) => {
        const articles = fetchArticles();
        const index = articles.findIndex((article) => article.id === articleId);
        articles[index] = { title, lessonDate, content, articleId };
        sendArticles(articles);
        navigate('/article/' + articleId);
    };

    return <ArticleEditForm {...article} onSave={updateArticle} />;
};

export default ArticleEditPage;
