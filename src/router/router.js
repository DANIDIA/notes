import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { MainLayout } from '../layouts';
import {
    ArticleCreatePage,
    ArticleEditPage,
    ArticleViewPage,
    ErrorPage,
    HomePage,
} from '../pages';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
            <Route path="/" element={<HomePage />} />
            <Route path="article">
                <Route path="create" element={<ArticleCreatePage />} />
                <Route path=":articleId" element={<ArticleViewPage />} />
                <Route path=":articleId/edit" element={<ArticleEditPage />} />
            </Route>
        </Route>,
    ),
    {
        basename: process.env.NODE_ENV === 'development' ? '/' : '/notes',
    },
);
