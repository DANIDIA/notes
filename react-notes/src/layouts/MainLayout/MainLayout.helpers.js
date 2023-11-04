import { getArticles } from '../../pages/article/ArticleViewPage/ArticleViewPage.helpers';
import { handlerMatch } from '../../router/handlerMatch';
import { handleAction } from './MainLayout.handleAction';

export const mainLayoutLoader = async () => getArticles();

export const mainLayoutAction = async (args) =>
    handlerMatch(args, handleAction);
