import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../layouts/Layout";
import CategoriesPage from "../pages/CategoriesPage";
import ProductPage from "../pages/ProductPage";
import MyCartPage from "../pages/MyCartPage";
import CheckoutPage from "../pages/CheckoutPage";
import UserProfilePage from "../pages/UserProfilePage";
import MyOrdersPage from "../pages/MyOrdersPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import AboutPage from "../pages/AboutPage";
import NotFoundPage from "../pages/NotFoundPage";

import SignInPage from "../pages/SignInPage";
import SignUpPage from "../pages/SignUpPage";


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
                path: "/products",
                element: <CategoriesPage />,
            },
            {
                path: "/products/:id",
                element: <ProductPage />,
            },
            {
                path: "/my-cart",
                element: <MyCartPage />,
            },
            {
                path: "/checkout",
                element: <CheckoutPage />,
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
            {
                path: "/sign-in",
                element: <SignInPage />,
            },
            {
                path: "/sign-up",
                element: <SignUpPage />,
            },
            {
                path: "/*",
                element: <NotFoundPage />,
            },

        ]
    }

]);
