import { createRoot } from "react-dom/client"
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Products from "./pages/Products";
import Product from "./pages/Product";

const root = document.getElementById("root")

const container = createRoot(root);

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

container.render(<RouterProvider router={router}/>)