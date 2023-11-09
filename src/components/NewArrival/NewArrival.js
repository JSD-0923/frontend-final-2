import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Typography, Paper, Box } from '@mui/material'
import { Button } from '@mui/material'

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
                    rating={product.rating}
                    price={product.productPrice}
                    discountRate={product.discountRate}
                    numberOfRatings={product.numberOfRatings}
                    width={260}
                />
              </Box>
          ))}
        </Box>
      </Paper>
    </Box>
  )
}

export default NewArrival
