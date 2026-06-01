import { createRoot } from "react-dom/client"
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Suspense } from "react";
import { LazyAbout } from "./components/About.lazy";
import { LazyShop } from "./components/Shop.lazy";

import LoaderSvg from '@/assets/loader.svg'

const root = document.getElementById("root")

const container = createRoot(root);

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/about',
                element: <Suspense fallback={'loading'}><LazyAbout/></Suspense> ,
            },
            {
                path: '/shop',
                element: <Suspense fallback={'loading'}><LazyShop/></Suspense>,
            }
        ]
    }
])

container.render(<RouterProvider router={router}/>)