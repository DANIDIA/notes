import { ARTICLES_LOCAL_STORAGE_KEY } from '../HomePage.constants';
import { useContext } from 'react';
import { HomePageContext } from '../HomePage.context';

export const ArticlesActionButtons = () => {
    const { articles, setArticles } = useContext(HomePageContext);

    const handleExportButtonClick = () => {
        var element = document.createElement('a');
        element.setAttribute(
            'href',
            'data:text/json;charset=utf-8,' +
                encodeURIComponent(JSON.stringify(articles)),
        );
        element.setAttribute('download', `articles-export-${Date.now()}.json`);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };

    const handleImportButtonClick = () => {
        var element = document.createElement('input');
        element.setAttribute('type', 'file');
        element.addEventListener('change', async (e) => {
            const file = e.target.files.item(0);
            const text = await file.text();

            localStorage.setItem(ARTICLES_LOCAL_STORAGE_KEY, text);
            setArticles(JSON.parse(text));
            document.body.removeChild(element);
        });

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
    };

    return (
        <div>
            <button onClick={handleExportButtonClick}>Export articles</button>
            <button onClick={handleImportButtonClick}>Import articles</button>
        </div>
    );
};
