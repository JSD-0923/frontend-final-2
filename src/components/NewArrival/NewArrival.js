import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import {Typography, Paper, Box, Rating, useMediaQuery} from '@mui/material'
import { Button } from '@mui/material'
import Price from "../../utils/Price/Price";

const newArrivalProducts = [
  {
    image: require('../../assets/images/pink-bag.png'),
    productName: "Grande",
    productDescription: "Blossom Pouch",
    productPrice: 39.49,
    discountRate: 0,
    rating: 3,
    numberOfRatings: 30
  },
  {
    image: require('../../assets/images/pink-bag.png'),
    productName: "Coach",
    productDescription: "Leather Coach Bag",
    productPrice: 54.69,
    discountRate: .3
  },
  {
    image: require('../../assets/images/pink-bag.png'),
    productName: "Remus",
    productDescription: "Brown Strap Bag",
    productPrice: 57,
    rating: 4,
    numberOfRatings: 78,
    discountRate: .4
  },
  {
    image: require('../../assets/images/pink-bag.png'),
    productName: "Boujee",
    productDescription: "Black Bag",
    productPrice: 56.49,
    discountRate: 0
  },
  {
    image: require('../../assets/images/pink-bag.png'),
    productName: "Boujee",
    productDescription: "Black Bag",
    productPrice: 56.49,
    discountRate: .35
  },
  {
    image: require('../../assets/images/pink-bag.png'),
    productName: "Boujee",
    productDescription: "Black Bag",
    productPrice: 56.49,
    discountRate: 0
  },

]

const NewArrival = () => {

  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1024px)');

  return (
    <Box sx={{ marginBottom: '1rem', marginTop: '1rem'}}>
      <Paper
          elevation={0}

        >
        <Box sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography
              component={'h2'}
              variant={'h2'}
              sx={{marginLeft: '1rem'}}
          >
            New Arrivals
          </Typography>
          <Button style={{textTransform: 'none', alignSelf: 'flex-end'}}>View all ></Button>
        </Box>
        <Box sx={{display: 'flex', overflowX: 'scroll'  }}>
          {newArrivalProducts.map((product, index) => (
              <Box key={index} sx={{margin:'1rem'}}>
                <ProductCard
                    image={product.image}
                    item={product}
                    title={product.productName}
                    description={product.productDescription}
                    variant={{title: 'h5', body:'body2'}}
                    width={260}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', marginLeft:'1rem'  }}>
                  {
                      product.rating && !isSmallScreen && !isMediumScreen &&
                      <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
                  }
                  {
                      !isSmallScreen &&
                      <Typography sx={{color: 'primary.main', marginLeft:'1rem' }} variant={'h6'} component={'p'}>
                        {product.numberOfRatings  ? `${product.numberOfRatings} Ratting` : 'No rating yet'}
                      </Typography>
                  }
                </Box>
                <Box sx={{marginLeft: '1rem'}}>
                  <Price discountRate={product.discountRate} originalPrice={product.productPrice}  variant={{price: 'body1', Off: 'body1'}}  />
                </Box>

              </Box>

          ))}
        </Box>
      </Paper>
    </Box>
  )
}

export default NewArrival
