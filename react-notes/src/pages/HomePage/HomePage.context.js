import { createContext, useState } from 'react';

export const HomePageContext = createContext({
    articles: [],
    selectedArticle: null,
    setSelectedArticle: (newArticle) => {},
    setArticles: (newArticles) => {},
});

export const HomePageContextProvider = ({ children }) => {
    const [articles, setArticles] = useState([]);
    const [selectedArticle, setSelectedArticle] = useState(null);

    return (
        <HomePageContext.Provider
            value={{
                articles,
                selectedArticle,
                setArticles,
                setSelectedArticle,
            }}
        >
            {children}
        </HomePageContext.Provider>
    );
};
