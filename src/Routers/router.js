import {createBrowserRouter} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../Layouts/Layout";
import MyOrdersPage from "../pages/MyOrdersPage";


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
                path: "/user-profile/my-orders",
                element: <MyOrdersPage />,
            },
        ]
    }

]);
