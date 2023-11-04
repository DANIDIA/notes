import React, { useContext } from 'react';
import { ArticleEditForm } from '../components';
import { v1 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import { ArticlesContext } from '../context';

export const ArticleCreatePage = () => {
    const navigate = useNavigate();
    const { sendArticles, fetchArticles } = useContext(ArticlesContext);

    const createArticle = ({ title, lessonDate, content }) => {
        const articles = fetchArticles();
        const id = v1(Date.now());

        articles.push({ title, lessonDate, content, id });
        sendArticles(articles);

        navigate('/article/' + id);
    };

    return <ArticleEditForm onSave={createArticle} />;
};

export default ArticleCreatePage;
