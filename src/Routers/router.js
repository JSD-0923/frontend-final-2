import {createBrowserRouter} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import CategorayPage from "../pages/CategoryPage/CategorayPage";
import Layout from "../Layouts/Layout";


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
                path: "/category",
                element: <CategorayPage />,
            },
            

        ]
    }

]);
