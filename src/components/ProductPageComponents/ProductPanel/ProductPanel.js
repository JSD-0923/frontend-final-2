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
import {useAddToCart} from "../../../Api2/query2";
import AlertStack from "../../../utils/AlertStack/AlertStack";
import {defaultUser} from "../../../custumHooks/useAuth";

const ProductPanel = (props) => {

    const {product} = props
    const [quantity, setQuantity] = useState(1);
    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);

    const user = defaultUser;

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const addToCartMutation = useAddToCart(product.id, 2);

    const handleAddToCart = async () => {
        if (!user) {
            setWarningAlertVisible(true);
            return;
        }

        try {
            await addToCartMutation.mutateAsync();
            setSuccessAlertVisible(true);
        } catch (error) {
            setErrorAlertVisible(true);
        }
    };

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };


    return (
        <Paper elevation={0} sx={{ margin: '1rem', display: 'flex', flexDirection: 'column'}}>

            <ProductCard
                title={product.name}
                description={product.highlight}
                variant={{title: 'h2', body:'h3'}}
                addToFavourite={false}
                width={500}
            />


            <div style={{ display: 'flex', alignItems: 'center' }}>
                <Rating
                    sx={RatingBoxStyle}
                    name="half-rating-read"
                    defaultValue={2.5}
                    precision={0.5}
                    value={product.rating}
                    readOnly
                    emptyIcon={<StarIcon sx={{ color: 'lightText.main' }} fontSize="inherit" />}
                />

                <Typography
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        color: 'primary.main',
                        marginLeft: '10px',
                    }}
                    variant={'h6'}
                    component={'span'}
                >
                    {product.reviewCount ? `${product.reviewCount} Ratings` : 'No rating'}
                </Typography>
            </div>

            <Box sx={{marginLeft: '1rem'}}>
                <Price variant={{price: 'h1', Off: 'h3'}} discountRate={product.discount} originalPrice={product.price}  />
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
                <Button variant="contained"
                        sx={QuantityActionButtonsStyle}
                        startIcon={<ShoppingCartCheckoutIcon/>}
                        onClick={handleAddToCart}
                >{isSmallScreen ? '': 'Add to cart'}</Button>
                <Button variant="outlined" sx={QuantityActionButtonsStyle} startIcon={<FavoriteBorderIcon/>}>{isSmallScreen ? '': 'Add to wishlist'}</Button>
            </Box>
            <AlertStack
                warningVisible={warningAlertVisible}
                successVisible={successAlertVisible}
                errorVisible={errorAlertVisible}
                onCloseAlert={handleCloseAlert}
                successMessage="Product added to cart successfully!"
                errorMessage="Failed to add product to cart. Please try again."
                warningMessage="Please log in to add the product to your cart."
            />
        </Paper>
    )
}

export default ProductPanel
