import React, { useState} from "react";
import Box from "@mui/material/Box";
import {Button, CircularProgress, Divider, Paper, Typography} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import {useCart, usePutOrder} from "../apis3/query3";
import PaymentsList from "../components/CheckoutPageComponents/Payments/PaymentsList";
import {useNavigate} from "react-router-dom";
import AddressesList from "../components/CheckoutPageComponents/AddressesList/AddressesList";



const CheckoutPage = () => {
    const [addressSelectedCard, setAddressSelectedCard] = useState(1);
    const [paymentSelectedCard, setPaymentSelectedCard] = useState(1);

    const {data:cartProducts, isLoading, isError, error} = useCart()

    const navigate = useNavigate();
    const handleSelectingAddressCard = (cardId) => {
        setAddressSelectedCard(cardId);
    };
    const handleSelectingPaymentCard = (cardId) => {
        setPaymentSelectedCard(cardId);
    };

    // const currentAddress = addresses.find((item) => item.id === addressSelectedCard);
    // const currentPaymentMethod = paymentsMethods.find((item) => item.id === paymentSelectedCard);

    const { placeOrder } = usePutOrder();
    const handelPlacingOrder = async () => {
        console.log('clicked')
        try {
            // Call the placeOrder function from the usePutOrder hook
            await placeOrder();

            // Additional logic after placing the order if needed
            console.log('Order placed successfully!');
        } catch (error) {
            console.error('Error placing order:', error);
            // Handle error if needed
        }
    };

    if (isLoading) {
        return (
            <div style={{  }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }

    if (isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                {error.response && error.response.data && (
                    <Typography sx={{color:'primary.main'}} variant={'h2'} component={'h2'}>{error.response.data.error}</Typography>
                )}
            </Box>
        )
    }

    if (!cartProducts) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                <Typography sx={{color:'primary.main'}} variant={'h2'} component={'h2'}>Your Cart is empty !!</Typography>
                <Typography sx={{color:'primary.main'}} variant={'h2'} component={'h2'}>Add some products to it :)</Typography>
            </Box>
        )
    }


    return (
        <>
            {
                cartProducts &&
                <div>
                    <StyledTitle variant="h2" component={'h1'} >
                        Checkout
                    </StyledTitle>

                    <Grid container spacing={{ sm: 1, md: 8, lg: 10, xl: 15 }}>
                        <Grid item xs={12} sm={6} md={8}>
                            <Paper elevation={0}>
                                <AddressesList
                                    onSelect={handleSelectingAddressCard}
                                    selectedCard={addressSelectedCard}
                                />
                                <PaymentsList

                                    selectedCard={paymentSelectedCard}
                                    onSelect={handleSelectingPaymentCard}
                                />
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                                    <Button sx={{ textDecoration: 'underline' }} onClick={()=> navigate('/my-cart')}>Back to Cart</Button>
                                    <Button variant="contained" color="primary" onClick={handelPlacingOrder}>
                                        Place Order
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
                                        cartProducts={cartProducts.cartItems}
                                        showTable={false}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <OrderCheckoutSummary
                                        headTitle={"Order Details"}
                                        cartProducts={cartProducts}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            }
        </>
    );
};

export default CheckoutPage;
