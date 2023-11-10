import React from 'react'
import {Card, Box, Typography, CardMedia, CardContent, useMediaQuery} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
const ProductCard = (props) => {

    const { image, title, description, width, variant, addToFavourite=true} = props

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
                <Typography gutterBottom variant={variant.title} component="h2">
                    {title}
                </Typography>
            }
            {addToFavourite && <FavoriteBorderIcon fontSize={'small'} />}

        </Box>
          {description &&
              <Typography noWrap variant={variant.body} color="text.secondary" component="h3">
                  {description}
              </Typography>
          }

      </CardContent>
    </Card>
  )
}
export default ProductCard