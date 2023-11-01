import {createBrowserRouter} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../Layouts/Layout";
import CheckoutPageInformation from "../pages/CheckoutPageInformation";


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
                path: "/checkout-page-information",
                element: <CheckoutPageInformation />,
            },
        ]
    }

]);
