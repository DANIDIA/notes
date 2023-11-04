import { Link } from 'react-router-dom';

import styles from './Header.module.css';
import { useContext } from 'react';
import { ArticlesContext } from '../../../../pages/article/context';

export const Header = () => {
    const { sendArticles } = useContext(ArticlesContext);

    // Export articles from localstorage to json file
    const handleExport = () => {
        const articles = JSON.parse(localStorage.getItem('articles'));
        const json = JSON.stringify(articles);
        const element = document.createElement('a');
        element.setAttribute(
            'href',
            'data:text/plain;charset=utf-8,' + encodeURIComponent(json),
        );
        element.setAttribute('download', `articles-${Date.now()}.json`);
        element.style.display = 'none';
        element.click();
    };

    // Import articles from json file to localstorage
    const handleImport = () => {
        const input = document.createElement('input');
        input.setAttribute('type', 'file');
        input.click();
        input.addEventListener('change', (e) => {
            const file = e.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const text = e.target.result;
                const articles = JSON.parse(text);
                sendArticles(articles);
            };
            reader.readAsText(file);
        });
    };

    return (
        <header className={styles.header}>
            <Link to="/" className={styles.logo}>
                HOME
            </Link>

            <div className={styles.exportImportButtons}>
                <button className={styles.exportBtn} onClick={handleExport}>
                    <span className={styles.boldText}>Export</span>
                    &nbsp;articles
                </button>

                <div className={styles.verticalLine} />

                <button className={styles.inputLabel} onClick={handleImport}>
                    <span className={styles.boldText}>Import</span>
                    &nbsp;articles
                </button>
            </div>
        </header>
    );
};
