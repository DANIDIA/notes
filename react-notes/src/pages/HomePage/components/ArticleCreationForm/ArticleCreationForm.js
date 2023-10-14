import { useContext, useState } from 'react';

import { ARTICLES_LOCAL_STORAGE_KEY } from '../../HomePage.constants';
import { HomePageContext } from '../../HomePage.context';

import './ArticleCreationForm.styles.css';

export const ArticleCreationForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const { articles, setArticles } = useContext(HomePageContext);

    const handleAddArticleClick = () => {
        // ToDo: prevent adding article with empty title or content
        // ToDo: create a unique id for each new article

        const _articles = [...articles];

        _articles.push({
            title,
            content,
            creationDate: Date.now(),
        });

        localStorage.setItem(
            ARTICLES_LOCAL_STORAGE_KEY,
            JSON.stringify(_articles),
        );

        setArticles(_articles);
        setTitle('');
        setContent('');
    };

    return (
        <div className="article-creation-form">
            <input
                type="text"
                placeholder="Article title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                placeholder="Article content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleAddArticleClick}>Add article</button>
        </div>
    );
};
