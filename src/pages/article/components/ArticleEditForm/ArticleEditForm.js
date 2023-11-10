import { useEffect, useState } from 'react';

import { Button } from '../../../../components';

import styles from './ArticleEditForm.module.css';

export function ArticleEditForm({
    title: _title = '',
    content: _content = '',
    lessonDate: _lessonDate = '',
    onSave,
}) {
    const [title, setTitle] = useState(_title);
    const [content, setContent] = useState(_content);
    const [lessonDate, setLessonDate] = useState(_lessonDate);

    useEffect(() => {
        setTitle(_title);
        setContent(_content);
        setLessonDate(_lessonDate);
    }, [_title, _content, _lessonDate]);

    const handleSaveButtonClick = () => {
        onSave({ title, content, lessonDate });
    };

    return (
        <div className={styles.form}>
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
                style={{ marginLeft: 'auto' }}
                onClick={handleSaveButtonClick}
            >
                Save changes
            </Button>
        </div>
    );
}
