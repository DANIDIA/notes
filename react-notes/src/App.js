import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';

import HomePage, {
    articleAction,
    ArticleEditForm,
    articleEditFormAction,
    articleEditFormLoader,
    articleLoader,
    ArticleView,
    homePageAction,
    homePageLoader
} from './pages/HomePage';

import ErrorPage from './ErrorPage';
import './reset.css';
import './style.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<HomePage />}
            errorElement={<ErrorPage />}
            loader={homePageLoader}
            action={homePageAction}
        >
            <Route
                path="article/:articleId"
                element={<ArticleView />}
                loader={articleLoader}
                action={articleAction}
            >
                <Route
                    path="/article/:articleId/edit"
                    element={<ArticleEditForm />}
                    loader={articleEditFormLoader}
                    action={articleEditFormAction}
                />
            </Route>
        </Route>
    )
);

const App = () => <RouterProvider router={router} />;

export default App;
