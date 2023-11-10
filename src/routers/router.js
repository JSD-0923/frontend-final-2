import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import Layout from "../layouts/Layout";
import CategoriesPage from "../pages/CategoriesPage";
import ProductPage from "../pages/ProductPage";
import MyCartPage from "../pages/MyCartPage";
import CheckoutPagePayment from "../pages/CheckoutPagePayment";
import CheckoutPageInformation from "../pages/CheckoutPageInformation";
import UserProfilePage from "../pages/UserProfilePage";
import MyOrdersPage from "../pages/MyOrdersPage";
import OrderDetailsPage from "../pages/OrderDetailsPage";
import AboutPage from "../pages/AboutPage";
import SignInPage from "../pages/SignIn";

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
                element: <CategoriesPage />,
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
            {
                path: "/sign-in",
                element: <SignInPage />,
            },


        ]
    }

]);
