import { RouterProvider } from 'react-router-dom';

import './styles/style.css';
import { router } from './router';
import { ArticlesContextProvider } from './pages/article/context';

const App = () => (
    <ArticlesContextProvider>
        <RouterProvider router={router} />
    </ArticlesContextProvider>
);

export default App;
