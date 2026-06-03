import { createRoot } from "react-dom/client"
import { Provider } from "react-redux";
import store from "@/app/store/store";
import router from "@/app/router/router";
import { RouterProvider } from "react-router-dom";
import "@/styles/main.css"

const root = document.getElementById("root")

const container = createRoot(root);

container.render(
    <Provider store={store}>
        <RouterProvider router={router} />
    </Provider>
)