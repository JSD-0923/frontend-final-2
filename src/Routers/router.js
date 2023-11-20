import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Layout from "../Layouts/Layout";
import ProductsPage from "../pages/ProductsPage";
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
import AuthRoute from "../components/AuthRoute/AuthRoute";
import {AuthRouteLoader, SignInLoader} from "../utils/loaders";
import Wishlist from "../pages/Wishlist";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                element: <AuthRoute />,
                loader: AuthRouteLoader,
                children: [
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
                        path: "/my-wishlist",
                        element: <Wishlist />,
                    },
                ]
            },
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/products",
                element: <ProductsPage />,
            },
            {
                path: "/products/:id",
                element: <ProductPage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/sign-in",
                loader: SignInLoader,
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
