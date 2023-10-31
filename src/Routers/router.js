import {createBrowserRouter} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../Layouts/Layout";
import MyCartPage from "../pages/MyCartPage";


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
                path: "/my-cart",
                element: <MyCartPage />,
            },
        ]
    }

]);
