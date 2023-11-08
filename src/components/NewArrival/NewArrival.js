import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Typography, Paper, Box, Grid, Container, IconButton } from '@mui/material'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const newArrivalProducts = [
  {
    image: '../../assets/images/pink-bag.png',
    productName: "Grande",
    productDescription: "Blossom Pouch",
    productPrice: 39.49,
  },
  {
    image: '../../assets/images/pink-bag.png',
    productName: "Coach",
    productDescription: "Leather Coach Bag",
    productPrice: 54.69,
  },
  {
    image: '../../assets/images/pink-bag.png',
    productName: "Remus",
    productDescription: "Brown Strap Bag",
    productPrice: 57,
  },
  {
    image: '../../assets/images/pink-bag.png',
    productName: "Boujee",
    productDescription: "Black Bag",
    productPrice: 56.49,
  },

]
const NewArrivalHeaderStyled = {
  fontSize: '30px',
  fontWeight: '400',
  pt: '30px',
  pb: '10px',
  color: 'dark.main',

  '@media (min-width: 320px) and (max-width: 425px)': {
    fontSize: '25px',
    paddingTop: '-5px',
    paddingButtom: '0px',

  },
}
const NewArrival = () => {

  return (
    <Container maxWidth='xl'>
      <Paper
        sx={{
          boxShadow: 'none'
        }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography variant='h3' component='div'
            sx={NewArrivalHeaderStyled}>
            New Arrival
          </Typography>

          <Button color="secondary" endIcon={<ArrowForwardIosIcon />}
            sx={{
              mt: '40px',
              mb: '20px',
              color: 'darkTeal.main'
            }}>View All</Button>
        </Box>
        <Grid container spacing={3}>
          {newArrivalProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard productDetails={product} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  )
}

export default NewArrival
