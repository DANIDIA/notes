import {createContext, useState} from "react";

export const HomePageContext = createContext({
    articles: [],
    selectedArticle: null,
    setSelectedArticle: (newArticle) => {
    },
    setArticles: (newArticles) => {
    }
})

export const HomePageContextProvider = ({children}) => {
    const [articles, setArticles] = useState([])
    const [selectedArticle, setSelectedArticle] = useState(null);

    const handleArticlesChange = (newArticles) => {
        setArticles([...newArticles])
    }
    const handleSelectedArticleChange = (newArticle) => {
        setSelectedArticle(newArticle)
    }

    return (
        <HomePageContext.Provider value={{
            articles,
            selectedArticle,
            setArticles: handleArticlesChange,
            setSelectedArticle: handleSelectedArticleChange
        }}>
            {children}
        </HomePageContext.Provider>
    )
}