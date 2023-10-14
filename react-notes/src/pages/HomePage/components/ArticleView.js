import {useContext} from "react";
import {HomePageContext} from "../HomePage.context";

export const ArticleView = () => {
    const {selectedArticle} = useContext(HomePageContext)
    
    return !!selectedArticle ? (
        <div>
            <h2>
                {selectedArticle.title}
                <br/>
                <small>{new Date(selectedArticle.creationDate).toString()}</small>
            </h2>
            <p>{selectedArticle.content}</p>
        </div>
    ) : null
}