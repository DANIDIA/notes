import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage';
import ErrorPage from './ErrorPage';
import { articleAction, ArticleView } from './pages/ArticleView';
import { articleLoader } from './pages/ArticleView';
import { createFormAction } from './pages/HomePage';
import { articlesListLoader } from './pages/ArticlesList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
        action: createFormAction,
        loader: articlesListLoader,
        children: [
            {
                path: 'article/:articleId',
                element: <ArticleView />,
                loader: articleLoader,
                action: articleAction,
            },
        ],
    },
]);

const App = () => <RouterProvider router={router} />;

export default App;
