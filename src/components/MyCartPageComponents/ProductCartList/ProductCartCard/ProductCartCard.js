import Card from "@mui/material/Card";
import {Box, CardMedia, Typography, useMediaQuery} from "@mui/material";
import Price from "../../../../utils/Price/Price";
import React from "react";


const ProductCartCard = (props) => {

    const {product} = props

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');
    return (
        <Card elevation={0} sx={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
            <CardMedia
                component="img"
                sx={{ width: 120, height: 120, borderRadius: '8px' }}
                image={product.image}
                alt="product image"
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent:'space-around' }}>
                    <Typography component="h2" variant="body1">
                        {product.title}
                    </Typography>
                    <Typography noWrap sx={{color: 'TypeLowEmphasis.main'}} component="h2" variant="body1">
                        {product.highlight.split(' ').slice(0, 2).join(' ')}
                    </Typography>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} component="h2" variant="body1">
                        Qty- {product.qty}
                    </Typography>
                {isSmallScreen && <Price discountRate={product.discountRate} originalPrice={product.price}  variant={{price: 'h3', Off: 'h4'}}  />}
            </Box>

        </Card>
    )
}

export default ProductCartCard;