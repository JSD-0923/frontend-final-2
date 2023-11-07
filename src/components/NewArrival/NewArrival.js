import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Typography, Paper, Box, Grid, Container, IconButton } from '@mui/material'
import { Button } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';

const newArrivalProducts = [
  {
    productName: "Grande",
    productDescription: "Blossom Pouch",
    productPrice: "$39.49",
  },
  {

    productName: "Coach",
    productDescription: "Leather Coach Bag",
    productPrice: "$54.69",
  },
  {

    productName: "Remus",
    productDescription: "Brown Strap Bag",
    productPrice: "$57",
  },
  {

    productName: "Boujee",
    productDescription: "Black Bag",
    productPrice: "$56.49",
  },

]

const NewArrival = () => {

  return (
    <Container maxWidth='xl'>
      <Paper sx={{boxShadow:'none'}}>
        <Box

          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Typography variant='h3' component='div'

            sx={{
              fontSize: '30px',
              fontWeight: '400',
              pt: '40px',
              pb: '20px',
              color:'dark.main'
            }}>
            New Arrival
          </Typography>

          <Button color="secondary" endIcon={<ArrowForwardIosIcon />}
            sx={{
              mt: '40px',
              mb: '20px',
              color:'darkTeal.main'
            }}>View All</Button>

        </Box>
        <Grid container spacing={3}>
          {newArrivalProducts.map((product, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <ProductCard productDetaile={product} />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>


  )
}

export default NewArrival
