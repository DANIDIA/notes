import { getArticles } from '../../articles';
import { handlerMatch } from '../../handlerMatch';
import { handleAction } from './MainLayout.handleAction';

export const mainLayoutLoader = async () => getArticles();

export const mainLayoutAction = async (args) =>
    handlerMatch(args, handleAction);
