import { lazy, Suspense } from 'react';
import { createBrowserRouter, Navigate } from 'react-router-dom';

import App from '@/App';
import Spinner from '@/components/ui/spinner/Spinner';

const Cart = lazy(() => import('@/pages/cart/Cart'));
const Catalog = lazy(() => import('@/pages/catalog/Catalog'));
const Product = lazy(() => import('@/pages/product/Product'));

const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/cart',
                element: (
                    <Suspense fallback={<Spinner />}>
                        <Cart />
                    </Suspense>
                ),
            },
            {
                path: '/catalog',
                element: (
                    <Suspense fallback={<Spinner />}>
                        <Catalog />
                    </Suspense>
                ),
            },
            {
                path: '/catalog/:id',
                element: (
                    <Suspense fallback={<Spinner />}>
                        <Product />
                    </Suspense>
                ),
            },
        ],
    },
    {
        path: '*',
        element: <Navigate to={'/catalog'} />,
    },
]);

export default router;
