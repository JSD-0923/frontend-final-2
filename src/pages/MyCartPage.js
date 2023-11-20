
import ProductCartList from "../components/MyCartPageComponents/ProductCartList/ProductCartList";
import OrderCheckoutSummary from "../components/MyCartPageComponents/OrderCheckoutSummary/OrderCheckoutSummary";
import {StyledTitle} from "../themes/StyledPageTitle";
import React from "react";
import {Box, Breadcrumbs, CircularProgress, Grid, Typography} from "@mui/material";
import {useCart} from "../hooks/useAppAPIs";
import EmptyCart from "../components/EmptyCart/EmptyCart";
import Link from "@mui/material/Link";
import {ReactComponent as NavigateNextIcon} from "../assets/icons/next-icon.svg";

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
           {cartProducts &&
               <div style={{ width: '90%'}} >
                   <StyledTitle variant="h2" component={'h1'} >
                       My Cart
                   </StyledTitle>
                   <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb" sx={{display: 'flex', justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: '20px',marginBottom: '1rem', marginTop: '24px'}}>
                       <Link href={'/'}  underline="none" variant="body1" >Home</Link>
                       <Link variant={'body1'}  underline="none" color="TypeLowEmphasis.main">My Cart</Link>
                   </Breadcrumbs>
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