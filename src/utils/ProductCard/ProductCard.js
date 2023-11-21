import React, {useEffect, useState} from 'react'
import {Card, Box, Typography, CardMedia, CardContent, useMediaQuery, IconButton} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import {ReactComponent as FilledFavoriteIcon} from "../../assets/icons/Fill-favo-icon.svg";
import defaultImage from '../../assets/images/alt-image.png';
const ProductCard = (props) => {

    const { image, title, description, width, variant, addToFavourite=true, onClick, fill=false, imageSx} = props

    const [is1to1Ratio, setIs1to1Ratio] = useState(false);
    const [imageError, setImageError] = useState(false);

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
    const isMediumScreen = useMediaQuery('(min-width:600px) and (max-width:1024px)');
    let _width = width

    useEffect(() => {
        const img = new Image();
        img.src = image;

        img.onload = () => {
            const aspectRatio = img.width / img.height;
            setIs1to1Ratio(aspectRatio === 1);
        };

        img.onerror = () => {

            setImageError(true);
        };
    }, [image]);

    const renderImageSource = () => {
        if (image && !imageError) {
            return is1to1Ratio ? image : defaultImage;
        }
        return defaultImage;
    };
   if(!Array.isArray(_width)) {
        _width = width || 280
       if (isSmallScreen) {
           _width = width*0.45 || 135
       }
       if (isMediumScreen) {
           _width = width*0.75 || 210
       }
   }

    return (
    <Card sx={{ width: _width, boxShadow: "none", margin: 0 }}>
        {image &&
            <CardMedia
                component="img"
                sx={{objectFit:'cover', width: '100%',height:'auto', borderRadius: '8px', ...imageSx }}
                src={renderImageSource()}
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
            {addToFavourite &&
                <IconButton>
                    {fill ? <FilledFavoriteIcon onClick={onClick}/> : <FavoriteBorderIcon fontSize={'small'} onClick={onClick}/>}
                </IconButton>
            }

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