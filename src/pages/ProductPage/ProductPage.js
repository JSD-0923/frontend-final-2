import React from 'react'
import './ProductPage.css'
import ProductImageGallery from '../../components/ProductImageGallery/ProductImageGallery'
import {Grid} from "@mui/material";
import ProductPanel from "../../components/ProductPanel/ProductPanel";
import {Container} from "@mui/system";
import ProductTaps from "../../components/ProductTaps/ProductTaps";
const ProductPage = () => {

    const product = {
        title: 'Coach',
        highlight: 'Leather Coach Bag with adjustable starps.',
        image: '../ProductImageGallery/product-image.png',
        rating: 3.5,
        price: 40,
        discountRate: 0.4,
        quantity: 5,
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        images: [
            {
                original: require('../../assesst-anas/product-image.png'),
                thumbnail: require('../../assesst-anas/product-image.png'),
            },
            {
                original: require('../../assesst-anas/product-image.png'),
                thumbnail: require('../../assesst-anas/product-image.png'),
            },
            {
                original: require('../../assesst-anas/product-image.png'),
                thumbnail: require('../../assesst-anas/product-image.png'),
            },

        ],
        rating_and_reviews: [
            {
                creator: 'Øydis Hisein',
                created_at : '1/3/2020',
                review: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo',
                rating: 2,
                user_image: 'https://mui.com/static/images/avatar/1.jpg',
            },
            {
                creator: 'Mephisto Antonius',
                created_at : '22/4/2022',
                review: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem',
                rating: 3.5,
                user_image:''
            },
            {
                creator: 'Cleon Kennard',
                created_at : '4/7/2021',
                review: '',
                rating: 4.2,
                user_image:'https://mui.com/static/images/avatar/5.jpg'
            },
            {
                creator: '',
                created_at : '5/8/2022',
                review: 'Li Europan lingues es membres del sam familie. Lor separat',
                rating: 3.8,
                user_image:''
            },
        ]
    }
    return (
        <Container sx={{maxWidth: '1400px'}} >
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={6} xl={6}><ProductImageGallery productImages ={product.images}/></Grid>
                <Grid item xs={12} md={6} lg={6} xl={6}><ProductPanel product={product}/></Grid>
                <Grid item xs={12}> <ProductTaps description={product.description}  reviews={product.rating_and_reviews}/></Grid>
            </Grid>
        </Container>
    )
}

export default ProductPage
