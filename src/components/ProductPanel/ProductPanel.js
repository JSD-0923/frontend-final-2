import React, { useState} from 'react'
import {Box, Button, Divider, Paper, Rating, Typography, useMediaQuery} from "@mui/material";
import Price from "../../utils/Price/Price";
import QuantityCounter from "../../utils/QuantityCounter/QuantityCounter";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Container} from "@mui/system";
import {
    QuantityActionBoxStyle,
    QuantityActionButtonsStyle,
    QuantityContainerStyle,
    QuantityTypographyStyle,
    RatingBoxStyle
} from "./style";
import theme from "../../MUI Themse/customTheme";
import StarIcon from "@mui/icons-material/Star";

const ProductPanel = (props) => {

    const {product} = props
    const [quantity, setQuantity] = useState(0);

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <Paper elevation={0} sx={{ margin: '1rem', display: 'flex', flexDirection: 'column'}}>

            {/* Both products title and highlight will be replaced by ProductCard Component*/}
            <Typography sx={{margin: '1rem'}} component={'h1'} variant={'titleMedium'}>{product.title}</Typography>
            <Typography sx={{margin: '1rem'}} variant={'bodyRegular'}>{product.highlight}</Typography>


            <Rating sx={RatingBoxStyle} name="half-rating-read" defaultValue={2.5} precision={0.5} value={product.rating} readOnly emptyIcon={<StarIcon sx={{ color: 'lightText.main' }} fontSize="inherit" />}/>
            <Price discountRate={product.discountRate} originalPrice={product.price}  />

            <Divider sx={{marginTop: '1rem', marginBottom: '1rem'}}/>

            <Container sx={QuantityContainerStyle}>
                <Typography sx={QuantityTypographyStyle} component={'h2'}>Quantity:</Typography>
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
