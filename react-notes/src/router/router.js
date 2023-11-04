import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { MainLayout } from '../layouts';
import { ArticleCreatePage, ArticleView, ErrorPage, HomePage } from '../pages';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} errorElement={<ErrorPage />}>
            <Route path="/" element={<HomePage />} />
            <Route path="article">
                <Route path="create" element={<ArticleCreatePage />} />
                <Route path=":articleId" element={<ArticleView />} />
            </Route>
        </Route>,
    ),
);
