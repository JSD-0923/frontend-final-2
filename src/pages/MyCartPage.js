
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import React from "react";
import {Box, Button, CircularProgress, Grid, Typography} from "@mui/material";
import {useCart} from "../apis3/query3";
import {useNavigate} from "react-router-dom";
const MyCartPage = () => {

    const {data:cartProducts, isLoading, isError, error} = useCart()

    const navigate = useNavigate();

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

    console.log('cart page rendered')

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
                           <Box sx={{display: 'flex', gap:'15px', width:'100%', justifyContent: 'center'}}>
                               <Button sx={{width: '50%', maxWidth: '180px'}} variant="contained"><Typography variant={'h4'} onClick={()=>{navigate('/checkout')}}>Next</Typography></Button>
                               <Button sx={{width: '50%', maxWidth: '180px'}} variant="outlined"><Typography variant={'h4'}>Continue Shopping</Typography></Button>
                           </Box>
                       </Grid>
                   </Grid>


               </div>
           }
       </>
    )
}

export default MyCartPage