import React from 'react'
import { Card, Box, Rating, Typography, CardMedia, CardContent } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import product from '../../assetsnoura/images/pink-bag.png'

const ProductCard = (props) => {
  return (
    <Card sx={{ width: '100%', boxShadow: "none" }}>
      <CardMedia
        sx={{ height: 280 }}
        image={product}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',

          }}>

          <Typography gutterBottom variant="h5" component="div"
            sx={{
              fontSize: '16px',
              fontWeight: '500'
            }}>
            {props.productDetails.productName}
          </Typography>
          <FavoriteBorderIcon />
        </Box>
        <Typography variant="body2" color="text.secondary"
          sx={{
            fontSize: '14px',
            fontWeight: '400'
          }}>

          {props.productDetails.productDescription}
        </Typography>
        <Box sx={{ display: 'flex' }}>
          <Typography gutterBottom variant="none" component="div"
            sx={{
              fontSize: '16px',
              fontWeight: '500',
              mt: '5px'
            }}>

            {props.newArrival ? null : <Rating name="half-rating-read" value={props.productDetails.rating} precision={0.5} readOnly />}
          </Typography>
          <Typography sx={{ paddingTop: '8px', paddingLeft: '10px', fontWaigth: '500', fontSize: '14px', color: 'primary.main' }} component={'p'}>43 Ratting</Typography>
        </Box>
        <Typography gutterBottom variant="none" component="div"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            mt: '5px'
          }}>

          {props.productDetails.productPrice}
        </Typography>

      </CardContent>

    </Card>
  )
}

export default ProductCard
