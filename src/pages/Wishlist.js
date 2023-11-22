
import React from 'react'
import ProductsList from '../components/ProductsList/ProductsList'
import { StyledTitle } from "../themes/StyledPageTitle";
import { Box, Container, CircularProgress} from '@mui/material'
import { useWishlist} from '../hooks/useAppAPIs';
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import EmptyWishList from "../components/EmptyWishList/EmptyWishList";

const Wishlist = () => {

   const {  data: wishlistProducts, isLoading ,error } = useWishlist();

   if(isLoading)
   {
      return (
          <div >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                  <CircularProgress />
              </Box>
          </div>
      )
   }
   if(error)
   {
      return <h1>{error.message}</h1>
   }
   return (

       <Container maxWidth='xl' >
          <StyledTitle variant="h2" component={'h1'} >
             My Wishlist
          </StyledTitle>

           <CustomBreadcrumbs links={[{name: 'Home', path: '/'}]} label={'My Wishlist'} />

           {wishlistProducts ? <ProductsList fill={true} products={wishlistProducts.wishlist}/> : <EmptyWishList />}
       </Container>
   )
}

export default Wishlist


