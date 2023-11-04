import { RouterProvider } from 'react-router-dom';

import './styles/style.css';
import { router } from './router';

const App = () => <RouterProvider router={router} />;

export default App;
