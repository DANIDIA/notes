import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
} from 'react-router-dom';
import { MainLayout, mainLayoutAction, mainLayoutLoader } from '../layouts';
import {
    articleAction,
    ArticleEditForm,
    articleEditFormAction,
    articleEditFormLoader,
    articleLoader,
    ArticleView,
    ErrorPage,
} from '../pages';

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route
            path="/"
            element={<MainLayout />}
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
