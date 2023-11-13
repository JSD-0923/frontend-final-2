import React, { useState } from "react";
import AddresssList from "../components/CheckoutPageInformationComponents/AddressesList/AddresssList";
import Box from "@mui/material/Box";
import { Button, Divider, Paper, Typography } from "@mui/material";
import Payments from "../components/CheckoutPageInformationComponents/Payments/Payments";
import Grid from "@mui/material/Grid";
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";

const cartProducts = [
    {
        title: 'Coach',
        highlight: 'Leather Coach Bag with adjustable starps.',
        image: require('../assets/images/Coach.png'),
        price: 40,
        qty: 4,
        discountRate: 0.4,
    },
    {
        title: 'Boujee',
        highlight: 'Black Bag',
        image: require('../assets/images/black-page.png'),
        price: 40,
        qty: 1,
        discountRate: 0.4,
    },
];

const addresses = [
    {
        id: 1,
        firstName: 'anas',
        lastName: 'tomeh',
        mobileNumber: '00970569100100',
        email: 'test@test.com',
        location: 'test - test',
    },
    {
        id: 2,
        firstName: 'anas',
        lastName: 'tomeh',
        mobileNumber: '00970569100100',
        email: 'test@test.com',
        location: 'test2 - test2',
    },
    {
        id: 3,
        firstName: 'anas',
        lastName: 'tomeh',
        mobileNumber: '00970569100100',
        email: 'test@test.com',
        location: 'test3 - 3333333',
    },
];

const CheckoutPageInformation = () => {
    const [selectedCard, setSelectedCard] = useState(1);

    const handleCardClick = (cardId) => {
        console.log("Selected Card: ", cardId);
        setSelectedCard(cardId);
    };

    const currentAddress = addresses.find((item) => item.id === selectedCard);

    // Add your logic for the "Next" button action here

    return (
        <div>
            <StyledTitle variant="h2" component={'h1'} >
                Checkout
            </StyledTitle>

            <Grid container spacing={{ sm: 1, md: 8, lg: 10, xl: 15 }}>
                <Grid item xs={12} sm={6} md={8}>
                    <Paper elevation={0}>
                        <AddresssList
                            addresses={addresses}
                            onSelect={handleCardClick}
                            selectedCard={selectedCard}
                        />
                        <Payments />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                            <Button sx={{ textDecoration: 'underline' }}>Back to Cart</Button>
                            <Button variant="contained" color="primary">
                                Next
                            </Button>
                        </Box>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Typography variant={'h3'} component={'h2'} sx={{ marginBottom: '10px' }}>
                                Order Summary
                            </Typography>
                            <Divider />
                            <ProductCartList
                                cartProducts={cartProducts}
                                showTable={false}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <OrderCheckoutSummary
                                headTitle={"Order Details"}
                                cartProducts={cartProducts}
                                showButtons={false}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default CheckoutPageInformation;
