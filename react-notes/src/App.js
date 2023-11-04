import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom';

import HomePage, {
    articleAction,
    ArticleEditForm,
    articleEditFormAction,
    articleEditFormLoader,
    articleLoader,
    ArticleView,
    mainLayoutAction,
    mainLayoutLoader,
} from './layouts/MainLayout';

import ErrorPage from './pages/ErrorPage';
import './reset.css';
import './style.css';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<HomePage />}
            errorElement={<ErrorPage />}
            loader={mainLayoutLoader}
            action={mainLayoutAction}
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
        </Route>,
    ),
);

const App = () => <RouterProvider router={router} />;

export default App;
