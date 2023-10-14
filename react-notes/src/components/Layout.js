import {useEffect, useState} from "react";

const ARTICLES_LOCAL_STORAGE_KEY = 'articles'

export const Layout = () => {
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [articles, setArticles] = useState([])

    const [selectedArticle, setSelectedArticle] = useState(null)

    useEffect(() => {
        const _articles = JSON.parse(localStorage.getItem(ARTICLES_LOCAL_STORAGE_KEY))
        if (_articles) {
            setArticles([..._articles])
        }
    }, []);


    const handleAddArticleClick = () => {
        // ToDo: prevent adding article with empty title or content
        const _articles = [...articles];

        _articles.push({
            title,
            content,
            creationDate: Date.now()
        })

        localStorage.setItem(ARTICLES_LOCAL_STORAGE_KEY, JSON.stringify(_articles))

        setArticles(_articles)
        setTitle('')
        setContent('')
    }

    const handleArticleTitleClick = (creationDate) => {
        setSelectedArticle(articles.find(article => article.creationDate === creationDate))
    }

    const handleExportButtonClick = () => {
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(articles)));
        element.setAttribute('download', `articles-export-${Date.now()}.json`);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    const handleImportButtonClick = () => {
        var element = document.createElement('input');
        element.setAttribute('type', 'file')
        element.addEventListener('change', async (e) => {
            const file = e.target.files.item(0)
            const text = await file.text();

            localStorage.setItem(ARTICLES_LOCAL_STORAGE_KEY, text)
            setArticles(JSON.parse(text))
            document.body.removeChild(element);
        })

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();
    }

    return (
        <div>
            <div style={{display: 'flex', flexDirection: 'column', maxWidth: 500}}>
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
            <div>
                <button onClick={handleExportButtonClick}>Export articles</button>
                <button onClick={handleImportButtonClick}>Import articles</button>
            </div>
            <div>
                <h3>Articles list</h3>
                <ul>
                    {articles.map((article, key) => (
                        <li key={key} onClick={() => handleArticleTitleClick(article.creationDate)}>
                            <b>
                                {article.title}
                            </b>
                        </li>
                    ))}
                </ul>
            </div>
            {!!selectedArticle && (
                <div>
                    <h2>{selectedArticle.title}<br/><small>{new Date(selectedArticle.creationDate).toString()}</small>
                    </h2>
                    <p>{selectedArticle.content}</p>
                </div>
            )}
        </div>
    )
}

export const LayoutOptions = {}

export default Layout