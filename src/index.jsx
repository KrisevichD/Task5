import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';

import router from '@/app/router/router';
import store from '@/app/store/store';
import '@/styles/main.css';

const root = document.getElementById('root');

const container = createRoot(root);

container.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>,
);
