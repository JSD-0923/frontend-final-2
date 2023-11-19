import React from 'react'
import ProductCard from '../../../utils/ProductCard/ProductCard'
import { Typography, Paper, Box, Rating, useMediaQuery, Grid, Container } from '@mui/material'
import { Button } from '@mui/material'
import Price from "../../../utils/Price/Price";
import { useProducts } from '../../../hooks/useAppAPIs';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const NewArrival = () => {
  const navigate = useNavigate();
  const { data: NewArrival } = useProducts('?createdWithin=2023-11-13');

  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1024px)');
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

          <Button color="secondary" endIcon={<ArrowForwardIosIcon />} onClick={() => navigate(`/products?createdWithin=2023-11-13`)}
            sx={{
              mt: '40px',
              mb: '20px',
              color: 'darkTeal.main'
            }}>View All</Button>
        </Box>
        <Grid container spacing={3}>
          {NewArrival?.products.slice(0, 4).map((product, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
              <ProductCard
                image={product.image}
                item={product}
                title={product.name}
                description={product.highlight}
                variant={{ title: 'h5', body: 'body2' }}
                width={260}
              />
              <Box sx={{ marginLeft: '1rem' }}>
                <Price variant={{ price: 'body1', Off: 'body1' }} />${product.price}
              </Box>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
    // // <Box sx={{ marginBottom: '1rem', marginTop: '1rem' }}>
    //   <Paper
    //     elevation={0}

    //   >
    //     <Box sx={{
    //       display: 'flex',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //     }}>
    //       <Typography
    //         component={'h2'}
    //         variant={'h2'}
    //         sx={{ marginLeft: '1rem' }}
    //       >
    //         New Arrivals
    //       </Typography>
    //       <Button style={{ textTransform: 'none', alignSelf: 'flex-end' }} onClick={() => navigate(`/products?createdWithin=2023-11-13`)}>View all </Button>
    //     </Box>
    //     <Box sx={{ display: 'flex' }}>
    //       {NewArrival?.products.slice(0, 4).map((product, index) => (
    //         <Box key={index} sx={{ margin: '1rem' }}>
    //           <ProductCard
    //             image={product.image}
    //             item={product}
    //             title={product.name}
    //             description={product.highlight}
    //             variant={{ title: 'h5', body: 'body2' }}
    //             width={260}
    //           />
    //           <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', marginLeft: '1rem' }}>
    //             {
    //               product.rating && !isSmallScreen && !isMediumScreen &&
    //               <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
    //             }
    //           </Box>
    //           <Box sx={{ marginLeft: '1rem' }}>
    //             <Price  variant={{ price: 'body1', Off: 'body1' }} />${product.price}
    //           </Box>

    //         </Box>

    //       ))}
    //     </Box>
    //   </Paper>
    // // </Box>
  )
}

export default NewArrival
