import { useContext } from 'react';
import { HomePageContext } from '../HomePage.context';

export const ArticleView = () => {
    const { selectedArticle } = useContext(HomePageContext);

    // ToDo: implement removing of an article

    // ToDo: Far later: editing of an article

    return !!selectedArticle ? (
        <div>
            <h2>
                {selectedArticle.title}
                <br />
                <small>{selectedArticle.lessonDate}</small>
            </h2>
            <p>{selectedArticle.content}</p>
        </div>
    ) : null;
};
