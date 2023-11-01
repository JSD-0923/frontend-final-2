import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
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
        ]
    }

]);
