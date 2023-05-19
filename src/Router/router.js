import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/Login/Login'
import DashBoard from '../Pages/DashBoard/DashBoard'
import HomePage from '../Pages/HomePage/HomePage'
import Register from '../Pages/Register/Register'
import Report from "../Pages/Report/Report";
import Loader from "../Loader"
import History from "../Pages/History/History";
import FeedBack from "../Pages/History/FeedBack/FeedBack";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Loader />,
        errorElement: <Loader />
    },
    {
        path: "/Web/",
        element: <HomePage />,
        errorElement: <Loader />
    },
    {
        path: "/Web/DashBoard",
        element: <DashBoard />
    },
    {
        path: "/Web/Login",
        element: <Login />
    },
    {
        path: "/Web/Register",
        element: <Register />
    },
    {
        path: '/Web/Report',
        element: <Report />
    },
    {
        path: '/Web/History',
        element: <History />,
        children: [
            {
                path: '/Web/History/:id',
                element: <FeedBack />
            }
        ]
    }
])