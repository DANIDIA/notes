import React, { useContext } from 'react';
import { ArticleEditForm } from '../components';
import { useNavigate, useParams } from 'react-router-dom';
import { ArticlesContext } from '../context';

export const ArticleEditPage = () => {
    const { articleId } = useParams();
    const navigate = useNavigate();
    const { getArticle, sendUpdatedArticle } = useContext(ArticlesContext);
    const article = getArticle(articleId);

    const updateArticle = ({ title, lessonDate, content }) => {
        sendUpdatedArticle(articleId, {
            title,
            lessonDate,
            content,
        })
            .then(() => navigate('/article/' + articleId))
            .catch((reason) => alert(reason));
    };

    return <ArticleEditForm {...article} onSave={updateArticle} />;
};

export default ArticleEditPage;
