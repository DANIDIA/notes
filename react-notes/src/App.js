import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import HomePage, {
    ArticleCreationForm,
    createFormAction,
    articleAction,
    ArticleView,
    articleLoader,
    articlesListLoader,
} from './pages/HomePage';
import ErrorPage from './ErrorPage';
import './reset.css';
import './style.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element=<HomePage />
            errorElement=<ErrorPage />
            loader={articlesListLoader}
        >
            <Route
                path="/"
                element=<ArticleCreationForm />
                action={createFormAction}
            />
            <Route
                path="article/:articleId"
                element=<ArticleView />
                loader={articleLoader}
                action={articleAction}
            />
        </Route>,
    ),
);

const App = () => <RouterProvider router={router} />;

export default App;
