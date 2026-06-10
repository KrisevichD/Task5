import { lazy } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';

const Cart = lazy(() => import('@/pages/cart/Cart'));
const Catalog = lazy(() => import('@/pages/catalog/Catalog'));
const Product = lazy(() => import('@/pages/product/Product'));

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/cart',
                element: <Cart />,
            },
            {
                path: '/catalog',
                element: <Catalog />,
            },
            {
                path: '/catalog/:id',
                element: <Product />,
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={'/catalog'} />,
    },
]);

export default router;
