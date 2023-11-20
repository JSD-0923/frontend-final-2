
import React from 'react'
import ProductsList from '../components/ProductsList/ProductsList'
import { StyledTitle } from "../themes/StyledPageTitle";
import { Box, Container, CircularProgress} from '@mui/material'
import { useWishlist} from '../hooks/useAppAPIs';
import Typography from "@mui/material/Typography";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const Wishlist = () => {

   const {  data: wishlistProducts, isLoading ,error } = useWishlist();

    console.log(wishlistProducts)
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
      return <h1>test</h1>
   }
   return (

       <Container maxWidth='xl' >
          <StyledTitle variant="h2" component={'h1'} >
             My Wishlist
          </StyledTitle>

           <CustomBreadcrumbs links={[{name: 'Home', path: '/'}]} label={'My Wishlist'} />

           {wishlistProducts ? <ProductsList fill={true} products={wishlistProducts.wishlist}/> : <Typography variant={'h3'} component={'h3'}>Your Wishlist is Empty </Typography>}
       </Container>
   )
}

export default Wishlist


