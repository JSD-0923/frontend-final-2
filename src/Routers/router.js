import {createBrowserRouter} from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../Layouts/Layout";
import CheckoutPagePayment from "../pages/CheckoutPagePayment";


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
                path: "/checkout-page-payment",
                element: <CheckoutPagePayment />,
            },
        ]
    }

]);
