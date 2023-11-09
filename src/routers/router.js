import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage/LandingPage";
import Layout from "../layouts/Layout";
import CategorayPage from "../pages/CategoryPage/CategorayPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import MyCartPage from "../pages/MyCartPage/MyCartPage";
import CheckoutPagePayment from "../pages/CheckoutPagePayment/CheckoutPagePayment";
import CheckoutPageInformation from "../pages/CheckoutPageInformation/CheckoutPageInformation";
import UserProfilePage from "../pages/UserProfilePage/UserProfilePage";
import MyOrdersPage from "../pages/MyOrdersPage/MyOrdersPage";
import OrderDetailsPage from "../pages/OrderDetailsPage/OrderDetailsPage";
import AboutPage from "../pages/AboutPage/AboutPage";

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
                path: "/categories",
                element: <CategorayPage />,
            },
            {
                path: "/product",
                element: <ProductPage />,
            },
            {
                path: "/my-cart",
                element: <MyCartPage />,
            },
            {
                path: "/checkout-information",
                element: <CheckoutPageInformation />,
            },
            {
                path: "/checkout-payment",
                element: <CheckoutPagePayment />,
            },
            {
                path: "/user-profile",
                element: <UserProfilePage />,
            },
            {
                path: "/my-orders",
                element: <MyOrdersPage />,
            },
            {
                path: "/my-orders/:id",
                element: <OrderDetailsPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },

        ]
    }

]);
