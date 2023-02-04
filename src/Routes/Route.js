import { createBrowserRouter } from "react-router-dom";
import AddToCart from "../pages/AddToCart";
import Home from "../pages/Home";
import TopProducts from "../pages/TopProducts";
import Main from "../pages/Layout/Main";
import CreateUser from "../pages/CreateUser";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/create-user',
                element: <CreateUser />
            },
            {
                path: '/add-to-cart',
                element: <AddToCart />
            },

        ]
    }
])