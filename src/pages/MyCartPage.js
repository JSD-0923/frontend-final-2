
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import React from "react";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import {useCart} from "../apis3/query3";
const MyCartPage = () => {

    const {data:cartProducts, isLoading, isError, error} = useCart()

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

    if (cartProducts.cartItems.length === 0) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                    <Typography sx={{color:'primary.main'}} variant={'h2'} component={'h2'}>Your Cart is empty !!</Typography>
                    <Typography sx={{color:'primary.main'}} variant={'h2'} component={'h2'}>Add some products to it :)</Typography>
            </Box>
        )
    }

    return (
       <>
           {cartProducts &&
               <div>
                   <StyledTitle variant="h2" component={'h1'} >
                       My Cart
                   </StyledTitle>
                   <Grid container spacing={3}>
                       <Grid item xs={12} md={8}>
                           <ProductCartList cartProducts={cartProducts.cartItems}/>
                       </Grid>
                       <Grid item xs={12} md={4}>
                           <OrderCheckoutSummary
                               headTitle={"Order Summary"}
                               cartProducts={cartProducts}
                           />
                       </Grid>
                   </Grid>


               </div>
           }
       </>
    )
}

export default MyCartPage