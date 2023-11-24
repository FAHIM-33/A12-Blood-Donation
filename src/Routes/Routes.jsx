import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Pages/Login&Register/Register";
import Login from "../Pages/Login&Register/Login";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <div>This is error page</div>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: 'register',
                element: <Register></Register>,
            },
            {
                path: 'login',
                element: <Login></Login>,
            },

        ]
    },
    // {
    //     path: '/admin'

    // }
])

