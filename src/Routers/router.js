import {createBrowserRouter} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../Layouts/Layout";
import UserProfile from "../pages/UserProfile";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/user-profile",
                element: <UserProfile />,
            },
        ]
    }

]);
