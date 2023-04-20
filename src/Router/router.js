import { createBrowserRouter } from "react-router-dom";
import Login from '../Pages/Login/Login'
import DashBoard from '../Pages/DashBoard/DashBoard'
import HomePage from '../Pages/HomePage/HomePage'
import Register from '../Pages/Register/Register'
import Report from "../Pages/Report/Report";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />
    },
    {
        path: "/DashBoard",
        element: <DashBoard />
    },
    {
        path: "/Login",
        element: <Login />
    },
    {
        path: "/Register",
        element: <Register />
    },
    {
        path: '/Report',
        element: <Report />
    }
])