import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import product from "../../assets/images/pink-bag.png"


const ProductCard = (props) => {
  return (
    <Card sx={{ boxShadow: "none", width: '100%' }}>
      <CardMedia
        sx={{ height: 200 }}
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
              fontWeight: '500',
              color:'TypeHighEmphasis.main'
            }}>
            {props.productDetaile.productName}
          </Typography>

          <FavoriteBorderIcon sx={{color:'dark.main'}} />

        </Box>

        <Typography variant="body2" color="text.secondary"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            color:'TypeLowEmphasis.main'
          }}>
          {props.productDetaile.productDescription}

        </Typography>

        <Typography gutterBottom variant="none" component="div"
          sx={{
            fontSize: '16px',
            fontWeight: '500',
            mt: '5px',
            color: 'TypeHighEmphasis.main'
          }}>
          ${props.productDetaile.productPrice}

        </Typography>
      </CardContent>

    </Card>
  )
}

export default ProductCard
