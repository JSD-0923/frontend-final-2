import React from 'react'
import {Card, Box, Rating, Typography, CardMedia, CardContent, useMediaQuery} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Price from "../../utils/Price/Price";
const ProductCard = (props) => {

    const { image, title, description, rating,numberOfRatings, price,discountRate, width} = props

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
    const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1024px)');

    let _width = width || 280
    if (isSmallScreen) {
        _width = width*0.5 || 135
    }
    if (isMediumScreen) {
        _width = width*0.75 || 210
    }

    return (
    <Card sx={{ width: _width, boxShadow: "none" }}>
        {image &&
            <CardMedia
                component="img"
                sx={{ height: 'auto', width: '100%', borderRadius: '8px' }}
                image={image}
            />
        }
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
            {
                title &&
                <Typography gutterBottom variant="h5" component="h2"
                            sx={{
                                fontSize: '16px',
                                fontWeight: '500'
                            }}>
                    {title}
                </Typography>
            }
          <FavoriteBorderIcon />
        </Box>
          {description &&
              <Typography noWrap variant="body2" color="text.secondary" component="h3"
                          sx={{
                              fontSize: '14px',
                              fontWeight: '400',
                              '@media (min-width: 320px) and (max-width: 600px)': {
                                  fontSize: '12px',
                              }

                          }}>
                  {description}
              </Typography>
          }
        <Box sx={{ display: 'flex', justifyContent: 'space-between'  }}>
            {
                rating && !isSmallScreen && !isMediumScreen &&
                    <Rating name="half-rating-read" value={rating} precision={0.5} readOnly />
            }
            {
                !isSmallScreen &&
                <Typography sx={{  fontWaigth: '500', fontSize: '14px', color: 'primary.main' }} component={'p'}>
                    {numberOfRatings  ? `${numberOfRatings} Ratting` : 'No rating yet'}
                </Typography>
            }
        </Box>
          {
              price &&
                  <Price discountRate={discountRate} originalPrice={price} variant={{price: 'body1', Off: 'body1'}}  />
          }
      </CardContent>
    </Card>
  )
}
export default ProductCard