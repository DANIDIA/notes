import { useContext, useState } from 'react';

import { ARTICLES_LOCAL_STORAGE_KEY } from '../../HomePage.constants';
import { HomePageContext } from '../../HomePage.context';

import './ArticleCreationForm.styles.css';

export const ArticleCreationForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [lessonDate, setDate] = useState('');
    const { articles, setArticles } = useContext(HomePageContext);

    const handleAddArticleClick = () => {

        if (!title.trim() || !content.trim()) return;

        const _articles = [...articles];
        console.log(lessonDate);
        _articles.push({
            title,
            content,
            lessonDate,
            id: Date.now(),
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
            <div>
                <input
                    type="text"
                    placeholder="Article title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input type="date" onChange={(e) => setDate(e.target.value)} />
            </div>
            <textarea
                placeholder="Article content"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleAddArticleClick}>Add article</button>
        </div>
    );
};
