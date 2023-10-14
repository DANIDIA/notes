import {createContext, useState} from "react";

export const HomePageContext = createContext({
    articles: [],
    setArticles: (v) => {
    }
})

export const HomePageContextProvider = ({children}) => {
    const [articles, setArticles] = useState([])

    const handleArticlesChange = (newArticles) => {
        setArticles([...newArticles])
    }

    return (
        <HomePageContext.Provider value={{articles, setArticles: handleArticlesChange}}>
            {children}
        </HomePageContext.Provider>
    )
}