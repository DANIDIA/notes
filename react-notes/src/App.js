import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage, {
    ArticleCreationForm,
    createFormAction,
    articleAction,
    ArticleView,
} from './pages/HomePage';
import ErrorPage from './ErrorPage';
import { articleLoader } from './pages/HomePage/components/ArticleView';
import { articlesListLoader } from './pages/HomePage/components/ArticlesList';

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: articlesListLoader,
        children: [
            {
                path: '/',
                element: <ArticleCreationForm />,
                action: createFormAction,
            },
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
