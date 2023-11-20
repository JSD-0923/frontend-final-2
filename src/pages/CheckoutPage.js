import React, { useState} from "react";
import Box from "@mui/material/Box";
import {Breadcrumbs, Button, CircularProgress, Divider, Typography, useMediaQuery} from "@mui/material";
import Grid from "@mui/material/Grid";
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import PaymentsList from "../components/CheckoutPageComponents/Payments/PaymentsList";
import {useNavigate} from "react-router-dom";
import AddressesList from "../components/CheckoutPageComponents/AddressesList/AddressesList";
import {useCart, usePutOrder} from "../hooks/useAppAPIs";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import AlertStack from "../utils/AlertStack/AlertStack";
import {Container} from "@mui/system";
import Link from "@mui/material/Link";
import {ReactComponent as NavigateNextIcon} from "../assets/icons/next-icon.svg";



const CheckoutPage = () => {
    const [addressSelectedCard, setAddressSelectedCard] = useState(1);
    const [paymentSelectedCard, setPaymentSelectedCard] = useState(1);
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('')

    const {data:cartProducts, isLoading, isError, error} = useCart()

    const navigate = useNavigate();
    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 425px)');

    const handleSelectingAddressCard = (cardId) => {
        setAddressSelectedCard(cardId);
    };
    const handleSelectingPaymentCard = (cardId) => {
        setPaymentSelectedCard(cardId);
    };

    // const currentAddress = addresses.find((item) => item.id === addressSelectedCard);
    // const currentPaymentMethod = paymentsMethods.find((item) => item.id === paymentSelectedCard);


    const PutOrderMutation = usePutOrder();
    const isPlacingOrderLoading = PutOrderMutation.isLoading
    const handlePlacingOrder = async () => {

        try {
            const response = await PutOrderMutation.mutateAsync()
            setMessage(response.message)
            setSuccessAlertVisible(true);
            setTimeout(() => {
                navigate('/');
            }, 10000);
        } catch (error) {
            setMessage(error.message)
            setErrorAlertVisible(true);
            console.error('Error placing order:', error);

        }
    };

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
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

    if (cartProducts.length === 0) {
        return (
            <>
                <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb" sx={{display: 'flex', justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: '20px',marginBottom: '1rem', marginTop: '24px'}}>
                    <Link href={'/'}  underline="none" variant="body1" >Home</Link>
                    <Link variant={'body1'}  underline="none" color="TypeLowEmphasis.main">My Cart</Link>
                </Breadcrumbs>
                <EmptyCart />
            </>
        )
    }

    return (
        <>
            {
                cartProducts &&
                <div style={{marginLeft: '1rem'}}>
                    <StyledTitle variant="h2" component={'h1'} >
                        Checkout
                    </StyledTitle>

                    <Grid container spacing={{ xs: 2, md: 8, lg: 10}}>
                        <Grid item xs={12} sm={6} md={8}>
                            <Container sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}} elevation={0}>
                               <Box sx={{width: isSmallScreen ?'295px' : '100%'}}>
                                   <AddressesList
                                       onSelect={handleSelectingAddressCard}
                                       selectedCard={addressSelectedCard}
                                   />
                                   <PaymentsList

                                       selectedCard={paymentSelectedCard}
                                       onSelect={handleSelectingPaymentCard}
                                   />
                               </Box>
                                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem' }}>
                                    <Button sx={{ textDecoration: 'underline' }} onClick={()=> navigate('/my-cart')}>Back to Cart</Button>
                                    <Button
                                        variant="contained" color="primary"
                                        startIcon={isPlacingOrderLoading ? <CircularProgress size={'20px'} sx={{color: 'white'}}/> :""}
                                        onClick={handlePlacingOrder}
                                    >
                                        Place Order
                                    </Button>
                                </Box>
                            </Container>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Grid container>
                                <Grid item xs={12}>
                                    <Box >
                                        <Typography variant={'h3'} component={'h2'} sx={{ marginBottom: '10px' }}>
                                            Order Summary
                                        </Typography>
                                        <Divider />
                                        <ProductCartList
                                            cartProducts={cartProducts.cartItems}
                                            showTable={false}
                                        />
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <OrderCheckoutSummary
                                        headTitle={"Order Details"}
                                        width={'260px'}
                                        cartProducts={cartProducts}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <AlertStack
                        warningVisible={warningAlertVisible}
                        successVisible={successAlertVisible}
                        errorVisible={errorAlertVisible}
                        onCloseAlert={handleCloseAlert}
                        message={message}
                    />
                </div>
            }
        </>
    );
};

export default CheckoutPage;
