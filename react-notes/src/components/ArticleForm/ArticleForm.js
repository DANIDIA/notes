import { useState } from 'react';
import { Form } from 'react-router-dom';

import { Button } from '../Button';

import styles from './ArticleForm.module.css';

export const ArticleForm = ({ articleData, intentType, buttonText }) => {
    articleData = articleData || { title: '', lessonDate: '', content: '' };

    const [title, setTitle] = useState(articleData.title);
    const [content, setContent] = useState(articleData.content);
    const [lessonDate, setLessonDate] = useState(articleData.lessonDate);

    const handleClearSubmit = (e) => {
        if (!title.trim() || !content.trim() || !lessonDate) e.preventDefault();

        setTitle(articleData.title);
        setContent(articleData.content);
        setLessonDate(articleData.lessonDate);
    };

    return (
        <Form
            method="post"
            id="article-creation-form"
            className={styles.form}
            onSubmit={handleClearSubmit}
        >
            <div className={styles.titleDateContainer}>
                <input
                    className={styles.title}
                    type="text"
                    placeholder="Title..."
                    value={title}
                    name="title"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <input
                    className={styles.lessonDate}
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
                className={styles.content}
            />

            <Button
                name="intent"
                value={intentType}
                style={{ marginLeft: 'auto' }}
                type="submit"
            >
                {buttonText}
            </Button>
        </Form>
    );
};
