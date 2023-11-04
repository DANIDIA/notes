import React from 'react';
import { ArticleEditForm } from '../components';
import { v1 } from 'uuid';
import { exportArticles, importArticles } from '../helpers';

export const ArticleCreatePage = () => {
    const createArticle = ({ title, lessonDate, content }) => {
        const articles = importArticles();
        const id = v1(Date.now());
        articles.push({ title, lessonDate, content, id });
        exportArticles(articles);
        return id;
    };

    return <ArticleEditForm onSave={createArticle} />;
};

export default ArticleCreatePage;
