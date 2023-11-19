import React from 'react'
import ProductCard from '../../utils/ProductCard/ProductCard'
import { Typography, Paper, Box, Grid, Rating, useMediaQuery } from '@mui/material'
import Price from "../../utils/Price/Price";
const ProductsList = (props) => {

  const {products , onClick, fill} = props

  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
  return (
    <>
      {products &&
        <Paper sx={{ boxShadow: 'none' }}>
          <Grid container spacing={3}>
            {products.map((productItem, index) => (
              <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
                <ProductCard
                  image={productItem.image}
                  title={productItem.name}
                  description={productItem.highlight}
                  variant={{ title: 'body1', body: 'h6' }}
                  width={285}
                  onClick={onClick}
                  fill={fill}
                />
                {isSmallScreen ?
                  <Typography sx={{ color: 'primary.main', marginLeft: '1rem' }} variant={'h6'} component={'p'}>
                    {productItem.averageRating ? `Ratting: ${productItem.averageRating}` : 'No '}
                  </Typography>
                  :
                  <Box sx={{ display: 'flex', marginBottom: '5px', marginLeft: '10px' }}>

                    <Rating name="half-rating-read" value={productItem.averageRating} precision={0.5} readOnly />

                    <Typography sx={{ color: 'primary.main', marginLeft: '10px' }} variant={'h6'} component={'p'}>
                      {productItem.averageRating ? `${productItem.averageRating} Rattings` : 'No rating'}
                    </Typography>

                  </Box>
                }
                <Box sx={{ marginLeft: '1rem' }}>
                  <Price discountRate={productItem.discount} originalPrice={productItem.price} variant={{ price: 'body1', Off: 'h6' }} />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Paper>
      }
    </>

  )
}

export default ProductsList