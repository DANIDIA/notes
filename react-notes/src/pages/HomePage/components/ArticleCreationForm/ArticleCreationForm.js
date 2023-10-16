import { useState } from 'react';

import './ArticleCreationForm.styles.css';
import { Form } from 'react-router-dom';
import { createArticle } from '../../../../articles';

export async function createFormAction({ request }) {
    const article = Object.fromEntries(await request.formData());
    createArticle(article);
    return article;
}

export const ArticleCreationForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [lessonDate, setLessonDate] = useState('');

    const handleAddArticleClick = (e) => {
        if (!title.trim() || !content.trim() || !lessonDate) e.preventDefault();
    };

    const handleClearSubmit = () => {
        setTitle('');
        setContent('');
        setLessonDate('');
    };

    return (
        <Form
            method="post"
            id="article-creation-form"
            className="article-creation-form"
            onSubmit={handleClearSubmit}
        >
            <div>
                <input
                    type="text"
                    placeholder="Article title"
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    type="date"
                    name="lessonDate"
                    onChange={(e) => setLessonDate(e.target.value)}
                    value={lessonDate}
                />
            </div>
            <textarea
                placeholder="Article content"
                value={content}
                name="content"
                onChange={(e) => setContent(e.target.value)}
            />
            <button onClick={handleAddArticleClick} type="submit">
                Add article
            </button>
        </Form>
    );
};

export default ArticleCreationForm;
