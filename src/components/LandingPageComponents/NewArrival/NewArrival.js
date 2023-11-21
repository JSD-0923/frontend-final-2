import React from 'react'
import ProductCard from '../../../utils/ProductCard/ProductCard'
import {Typography, Box, Rating, useMediaQuery} from '@mui/material'
import { Button } from '@mui/material'
import Price from "../../../utils/Price/Price";
import { useProducts } from '../../../hooks/useAppAPIs';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LoadingProgress from "../../Loading/LoadingProgress";

const NewArrival = () => {
  const navigate = useNavigate();
  const { data: NewArrival, isLoading } = useProducts('?limit=4&createdWithin=2023-11-13&offset=160');

  const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
  const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1024px)');

  if (isLoading) {
      return (
          <LoadingProgress />
      )
  }
  return (

    <Box sx={{ marginLeft: '20px',marginRight: '1rem', display: 'flex', flexDirection: 'column', alignSelf: 'center' }}>
        <Box sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px'}}>
            <Typography sx={{color: 'dark.main'}} variant="h2" component={'h3'} >
                New Arrivals
            </Typography>
          <Button style={{ textTransform: 'none', alignSelf: 'flex-end', fontSize: '16px' }} onClick={() => navigate(`/products?createdWithin=2023-11-13`)} endIcon={<ArrowForwardIosIcon/>}>View all </Button>
        </Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignSelf: 'center', marginTop: '1rem' }}>
          {NewArrival?.products.map((product, index) => (
            <Box onClick={() => navigate(`/products/${product.id}`)} key={index} sx={{ margin: '1rem',cursor: 'pointer' }} >
              <ProductCard
                image={product.image}
                item={product}
                title={product.name}
                description={product.highlight}
                variant={{ title: 'h5', body: 'body2' }}
                width={[ '110px','150px','200px', '275px'] }
                imageSx={{ height: [ '110px','150px','200px', '275px'] }}
              />
              <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px', marginLeft: '1rem' }}>
                {
                  product.rating && !isSmallScreen && !isMediumScreen &&
                  <Rating name="half-rating-read" value={product.rating} precision={0.5} readOnly />
                }
                <Box sx={{marginTop: '-1rem'}}>
                    <Price originalPrice={product.price} discountRate={0}  variant={{ price: 'body1', Off: 'body1' }} />
                </Box>
              </Box>

            </Box>

          ))}
        </Box>
     </Box>
  )
}

export default NewArrival
