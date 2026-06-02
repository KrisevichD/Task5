import App from "@/components/App";
import { createBrowserRouter } from "react-router-dom";
import Login from "@/pages/Login";
import Products from "@/pages/Products";
import Product from "@/pages/Product";

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/products/:id',
                element: <Product />
            },
        ]
    },
    {
        path: '*',
        element: <App />
    }
])

export default router;