import { createBrowserRouter } from "react-router-dom";
import Main from "../pages/Layout/Main";
import CreateUser from "../pages/CreateUser";
import Users from "../pages/AllUsers";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Users/>
            },
            {
                path: '/users',
                element: <Users/>
            },
            {
                path: '/create-user',
                element: <CreateUser />
            },

        ]
    }
])