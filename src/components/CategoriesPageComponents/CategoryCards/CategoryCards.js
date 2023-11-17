import React from 'react'
import ProductCard from '../../../utils/ProductCard/ProductCard'
import {Typography, Paper, Box, Grid, Rating, useMediaQuery} from '@mui/material'
import Price from "../../../utils/Price/Price";
const CategoryCards = ({products}) => {

  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
console.log(products);
  return (
   <>
    {products &&
      <Paper sx={{ boxShadow: 'none' }}>
      <Grid container spacing={3}>
        {products?.products.map((productItem, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <ProductCard
                image={require('../../../assets/images/pink-bag1.png')}
                title={productItem.productName}
                description={productItem.productDescription}
                variant={{title: 'body1', body:'h6'}}
                width={285}
            />
            {isSmallScreen ?
                <Typography sx={{color: 'primary.main', marginLeft:'1rem' }} variant={'h6'} component={'p'}>
                  {productItem.numberOfRatings  ? `Ratting: ${productItem.rating}` : 'No rating'}
                </Typography>
                :
                <Box sx={{ display: 'flex', marginBottom: '5px', marginLeft:'10px'  }}>

                  <Rating name="half-rating-read" value={productItem.rating} precision={0.5} readOnly />

                  <Typography sx={{color: 'primary.main', marginLeft:'10px' }} variant={'h6'} component={'p'}>
                    {productItem.numberOfRatings  ? `${productItem.numberOfRatings} Rattings` : 'No rating'}
                  </Typography>

                </Box>
            }
            <Box sx={{marginLeft: '1rem'}}>
              <Price discountRate={.45} originalPrice={productItem.productPrice}  variant={{price: 'body1', Off: 'h6'}}  />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Paper>
    }
   </>

  )
}

export default CategoryCards
