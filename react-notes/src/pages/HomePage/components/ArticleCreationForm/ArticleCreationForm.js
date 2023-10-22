import { useState } from 'react';
import { Form } from 'react-router-dom';

import { Button } from '../../../../components/Button';

import './ArticleCreationForm.styles.css';

export const ArticleCreationForm = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [lessonDate, setLessonDate] = useState('');

    const handleClearSubmit = (e) => {
        if (!title.trim() || !content.trim() || !lessonDate) e.preventDefault();

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
            <div className="title-date-container">
                <input
                    className="title-input"
                    type="text"
                    placeholder="Title..."
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className="date-input"
                    type="date"
                    name="lessonDate"
                    onChange={(e) => setLessonDate(e.target.value)}
                    value={lessonDate}
                />
            </div>

            <textarea
                placeholder="Write something..."
                value={content}
                name="content"
                onChange={(e) => setContent(e.target.value)}
                className="content-input"
            />

            <Button
                name="intent"
                value="create"
                style={{ marginLeft: 'auto' }}
                type="submit"
            >
                Add article
            </Button>
        </Form>
    );
};

export default ArticleCreationForm;
