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
} from './pages/HomePage';
import ErrorPage from './ErrorPage';
import { articleLoader } from './pages/HomePage/components/ArticleView';
import { articlesListLoader } from './pages/HomePage/components/ArticlesList';

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
