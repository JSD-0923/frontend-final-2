import React from 'react';
import ProductCard from '../../utils/ProductCard/ProductCard';
import { Typography, Paper, Box, Grid, Rating, useMediaQuery } from '@mui/material';
import Price from '../../utils/Price/Price';
import { useNavigate } from 'react-router-dom';

const ProductsList = (props) => {
  const { products, onClick, fill } = props;
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');

  return (
      <>
        {products && (
            <Paper
                sx={{
                  width: '100%',
                  boxShadow: 'none',
                  cursor: 'pointer',
                  alignSelf: 'center',
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 'auto',
                }}
            >
              <Grid container spacing={3} alignItems={isSmallScreen ? 'center' : 'flex-start'} justifyContent="flex-start">
                {products.map((productItem, index) => (
                    <Grid item xs={6} sm={6} md={4} lg={3} key={index} onClick={() => navigate(`/products/${productItem.id}`)}>
                      <ProductCard
                          image={productItem.image}
                          title={productItem.name}
                          description={productItem.highlight}
                          variant={{ title: 'body1', body: 'h6' }}
                          width={330}
                          onClick={onClick}
                          fill={fill}
                      />
                      {isSmallScreen ? (
                          <Typography sx={{ color: 'primary.main', marginLeft: '1rem' }} variant={'h6'} component={'p'}>
                            {productItem.averageRating ? `Rating: ${Math.round(Math.random() * 299) + 1}` : 'No Ratings'}
                          </Typography>
                      ) : (
                          <Box sx={{ display: 'flex', marginBottom: '5px', marginLeft: '10px' }}>
                            <Rating name="half-rating-read" value={productItem.averageRating} precision={0.5} readOnly />
                            <Typography sx={{ color: 'primary.main', marginLeft: '10px' }} variant={'h6'} component={'p'}>
                              {productItem.averageRating ? `${Math.round(Math.random() * 299) + 1} Ratings` : 'No rating'}
                            </Typography>
                          </Box>
                      )}
                      <Box sx={{ marginLeft: '1rem' }}>
                        <Price discountRate={productItem.discount} originalPrice={productItem.price} variant={{ price: 'body1', Off: 'h6' }} />
                      </Box>
                    </Grid>
                ))}
              </Grid>
            </Paper>
        )}
      </>
  );
};

export default ProductsList;
