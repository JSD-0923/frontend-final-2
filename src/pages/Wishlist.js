
import React from 'react'
import ProductsList from '../components/ProductsList/ProductsList'
import { StyledTitle } from "../themes/StyledPageTitle";
import { Pagination, Box, Container, Button, CircularProgress} from '@mui/material'
import { useWishlist} from '../hooks/useAppAPIs';

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
      return <h1>{error}</h1>
   }
   return (

       <Container maxWidth='xl' >
          <StyledTitle variant="h2" component={'h1'} >
             My Wishlist
          </StyledTitle>
           {wishlistProducts && <ProductsList fill={true} products={wishlistProducts.wishlist}/>}
           {wishlistProducts.wishlist.length > 20 &&
               <Box sx={{ display: 'flex', justifyContent: 'center', my: 4, gap: '20px' }}>
                   <Box sx={{ height: '36px', bgcolor: 'grey.main', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }} px={2}>
                       <Pagination count={10} shape="rounded" color="primary" hidePrevButton hideNextButton
                       />
                   </Box>
                   <Button variant="contained" sx={{ color: 'TypeLowEmphasis.main', bgcolor: 'grey.main', height: '36px', width: '67px' }}>Next</Button>
               </Box>
           }

       </Container>
   )
}

export default Wishlist


