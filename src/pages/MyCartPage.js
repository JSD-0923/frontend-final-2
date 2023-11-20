
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import React from "react";
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import {useCart} from "../hooks/useAppAPIs";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const MyCartPage = () => {

    const {data:cartProducts, isLoading, isError, error} = useCart()

    const links = [
        {
            name: 'Home',
            path: `/`
        },
    ]

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
               <CustomBreadcrumbs links={links} label={'My Cart'}/>
               <EmptyCart />
           </>
        )
    }

    return (
       <>
           {cartProducts &&
               <div style={{ width: '90%'}} >
                   <StyledTitle sx={{ paddingX: '1rem'}} variant="h2" component={'h1'} >
                       My Cart
                   </StyledTitle>
                   <CustomBreadcrumbs links={links} label={'My Cart'}/>
                   <Grid container spacing={3} style={{ justifyContent: 'space-between' }}>
                       <Grid item xs={12} md={7} lg={6}>
                           <ProductCartList cartProducts={cartProducts.cartItems}/>
                       </Grid>
                       <Grid item xs={12} md={5} lg={5}>
                           <OrderCheckoutSummary
                               headTitle={"Order Summary"}
                               cartProducts={cartProducts}
                               showButtons={true}
                           />
                       </Grid>
                   </Grid>

               </div>
           }
       </>
    )
}

export default MyCartPage