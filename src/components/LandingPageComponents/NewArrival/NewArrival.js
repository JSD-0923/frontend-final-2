import React from 'react'
import ProductCard from '../../../utils/ProductCard/ProductCard'
import { Typography, Paper, Box, Rating, useMediaQuery } from '@mui/material'
import { Button } from '@mui/material'
import Price from "../../../utils/Price/Price";
import { useProducts } from '../../../hooks/useAppAPIs';
import { useNavigate } from 'react-router-dom';


const NewArrival = () => {
  const navigate = useNavigate();
  const { data: NewArrival, isLoading, isError } = useProducts('?createdWithin=2023-11-13');
  console.log(NewArrival)
  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1024px)');

  return (
    <Box sx={{ marginBottom: '1rem', marginTop: '1rem' }}>
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
            sx={{ marginLeft: '1rem' }}
          >
            New Arrivals
          </Typography>
          <Button style={{ textTransform: 'none', alignSelf: 'flex-end' }} onClick={() => navigate(`/products?createdWithin=2023-11-13`)}>View all </Button>
        </Box>
        <Box sx={{ display: 'flex', overflowX: 'scroll' }}>
          {NewArrival?.products.map((product, index) => (
            <Box key={index} sx={{ margin: '1rem' }}>
              <ProductCard
                image={product.image}
                item={product}
                title={product.name}
                description={product.highlight}
                variant={{ title: 'h5', body: 'body2' }}
                width={260}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', marginLeft: '1rem' }}>
                {
                  product.rating && !isSmallScreen && !isMediumScreen &&
                  <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
                }
                {/* {
                  !isSmallScreen &&
                  <Typography sx={{ color: 'primary.main', marginLeft: '1rem' }} variant={'h6'} component={'p'}>
                    {product.numberOfRatings ? `${product.numberOfRatings} Ratting` : 'No rating yet'}
                  </Typography>
                } */}
              </Box>
              <Box sx={{ marginLeft: '1rem' }}>
                <Price  variant={{ price: 'body1', Off: 'body1' }} />${product.price}
              </Box>

            </Box>

          ))}
        </Box>
      </Paper>
    </Box>
  )
}

export default NewArrival
