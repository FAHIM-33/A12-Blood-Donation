import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import MainLayout from "../Layouts/MainLayout";
import Register from "../Pages/Login&Register/Register";
import Login from "../Pages/Login&Register/Login";
import DashboardLayout from "../Layouts/DashboardLayout";
import DashHome from "../Pages/Dashboard/DashHome/DashHome";
import AllUsers from "../Pages/Dashboard/All-Users/AllUsers";
import CreateRequest from "../Pages/Dashboard/CreateDonatReq/CreateRequest";
import MyDonReq from "../Pages/Dashboard/MyDonReq/MyDonReq";


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

        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/register',
        element: <Register></Register>,
    },
    {
        path: '/dashboard',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: 'home',
                element: <DashHome></DashHome>
            },
            {
                path: 'all-users',
                element: <AllUsers></AllUsers>
            },
            {
                path: 'create-donation-request',
                element: <CreateRequest></CreateRequest>
            },
            {
                path: 'my-donation-request',
                element: <MyDonReq></MyDonReq>
            },
        ]

    }
])

