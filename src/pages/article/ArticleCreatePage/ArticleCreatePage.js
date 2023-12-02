import React, { useContext } from 'react';
import { ArticleEditForm } from '../components';
import { useNavigate } from 'react-router-dom';
import { ArticlesContext } from '../context';

export const ArticleCreatePage = () => {
    const navigate = useNavigate();
    const { sendArticle } = useContext(ArticlesContext);

    const createArticle = ({ title, lessonDate, content }) => {
        sendArticle({ title, lessonDate, content })
            .then((id) => navigate('/article/' + id))
            .catch((reason) => {
                alert(reason);
                navigate('/');
            });
    };

    return <ArticleEditForm onSave={createArticle} />;
};

export default ArticleCreatePage;
