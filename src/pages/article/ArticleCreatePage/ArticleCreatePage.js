import React, { useContext } from 'react';
import { ArticleEditForm } from '../components';
import { useNavigate } from 'react-router-dom';
import { ArticlesContext } from '../context';

export const ArticleCreatePage = () => {
    const navigate = useNavigate();
    const { sendArticle } = useContext(ArticlesContext);

    const createArticle = async ({ title, lessonDate, content }) => {
        const id = await sendArticle({ title, lessonDate, content });

        navigate('/article/' + id);
    };

    return <ArticleEditForm onSave={createArticle} />;
};

export default ArticleCreatePage;
