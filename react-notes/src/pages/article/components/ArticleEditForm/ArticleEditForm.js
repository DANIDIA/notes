import { Form, redirect } from 'react-router-dom';
import { useState } from 'react';

import { getArticle, updateArticle } from '../../ArticlePage/articles';
import { Button } from '../../../../components';

import styles from './ArticleEditForm.module.css';

export function articleEditFormLoader({ params }) {
    return getArticle(params.articleId);
}

export async function articleEditFormAction({ params, request }) {
    const formData = await request.formData();
    const articleData = Object.fromEntries(formData);
    const id = params.articleId;

    updateArticle(id, articleData);
    return redirect(`/article/${id}`);
}

export function ArticleEditForm({
    title: _title = '',
    content: _content = '',
    lessonDate: _lessonDate = '',
}) {
    const [title, setTitle] = useState(_title);
    const [content, setContent] = useState(_content);
    const [lessonDate, setLessonDate] = useState(_lessonDate);

    return (
        <Form method="post" id="article-creation-form" className={styles.form}>
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
                value="edit"
                style={{ marginLeft: 'auto' }}
                type="submit"
            >
                Save changes
            </Button>
        </Form>
    );
}