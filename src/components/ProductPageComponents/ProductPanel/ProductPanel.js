import React, { useState} from 'react'
import {Box, Button, Divider, Paper, Rating, Typography, useMediaQuery} from "@mui/material";
import Price from "../../../utils/Price/Price";
import QuantityCounter from "../../../utils/QuantityCounter/QuantityCounter";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Container} from "@mui/system";
import {
    QuantityActionBoxStyle,
    QuantityActionButtonsStyle,
    QuantityContainerStyle,
    RatingBoxStyle
} from "./style";
import theme from "../../../themes/customTheme";
import StarIcon from "@mui/icons-material/Star";
import ProductCard from "../../../utils/ProductCard/ProductCard";

const ProductPanel = (props) => {

    const {product} = props
    const [quantity, setQuantity] = useState(0);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Paper elevation={0} sx={{ margin: '1rem', display: 'flex', flexDirection: 'column'}}>

            <ProductCard
                title={product.title}
                description={product.highlight}
                variant={{title: 'h2', body:'h3'}}
                addToFavourite={false}
                width={500}
            />


            <Rating sx={RatingBoxStyle} name="half-rating-read" defaultValue={2.5} precision={0.5} value={product.rating} readOnly emptyIcon={<StarIcon sx={{ color: 'lightText.main' }} fontSize="inherit" />}/>
            <Box sx={{marginLeft: '1rem'}}>
                <Price variant={{price: 'h1', Off: 'h3'}} discountRate={product.discountRate} originalPrice={product.price}  />
            </Box>

            <Divider sx={{marginTop: '1rem', marginBottom: '1rem'}}/>

            <Container sx={QuantityContainerStyle}>
                <Typography variant={'h3'} component={'h2'}>Quantity:</Typography>
                <QuantityCounter
                    quantity={quantity}
                    setQuantity={setQuantity}
                    productQuantity={product.quantity}
                />
            </Container>
            <Box sx={QuantityActionBoxStyle}>
                <Button variant="contained" sx={QuantityActionButtonsStyle}>{isSmallScreen ? <ShoppingCartCheckoutIcon/>: 'Add to cart'}</Button>
                <Button variant="outlined" sx={QuantityActionButtonsStyle}>{isSmallScreen ? <FavoriteBorderIcon/>: '♡ Add to wishlist'}</Button>
            </Box>
        </Paper>
    )
}

export default ProductPanel
