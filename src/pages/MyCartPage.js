
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import React from "react";
import {Grid} from "@mui/material";
const MyCartPage = () => {

    const cartProducts = [
        {
            title: 'Coach',
            highlight: 'Leather Coach Bag with adjustable starps.',
            image: require('../assets/images/Coach.png'),
            price: 40,
            qty : 4,
            discountRate: 0.4,
        },
        {
            title: 'Boujee',
            highlight: 'Black Bag',
            image: require('../assets/images/black-page.png'),
            price: 40,
            qty : 1,
            discountRate: 0.4,
        },
    ]

    return (
        <div>
            <StyledTitle variant="h2" component={'h1'} >
                My Cart
            </StyledTitle>
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <ProductCartList cartProducts={cartProducts}/>
                </Grid>
                <Grid item xs={12} md={4}>
                    <OrderCheckoutSummary
                        headTitle={"Order Summary"}
                        cartProducts={cartProducts}
                    />
                </Grid>
            </Grid>


        </div>
    )
}

export default MyCartPage