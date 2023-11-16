import {ButtonBase} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import ProductCard from "../../../../utils/ProductCard/ProductCard";
import Price from "../../../../utils/Price/Price";

const RelatedProducts = () => {

    const products = [
        {
            id: 1,
            image: require('../../../../assets/images/black-page.png'),
            title: 'product1',
            rating: 3.5,
            price: 300,
            discount: 2
        },
        {
            id: 2,
            image: require('../../../../assets/images/pink-bag.png'),
            title: 'product2',
            rating: 4.3,
            price: 120,
            discount: 0
        },
        {
            id: 3,
            image: require('../../../../assets/images/Coach.png'),
            title: 'product2',
            rating: 2.8,
            price: 520,
            discount: 5
        },
        {
            id: 3,
            image: require('../../../../assets/images/Coach.png'),
            title: 'product2',
            rating: 2.8,
            price: 520,
            discount: 5
        },       {
            id: 3,
            image: require('../../../../assets/images/Coach.png'),
            title: 'product2',
            rating: 2.8,
            price: 520,
            discount: 5
        },
        {
            id: 3,
            image: require('../../../../assets/images/Coach.png'),
            title: 'product2',
            rating: 2.8,
            price: 520,
            discount: 5
        },
    ]

    const handleClick = (id) => {
        console.log(`Box with id ${id} clicked!`);
    };
    return (
        <Box sx={{display: 'flex', justifyContent:'space-around', overflowX: 'scroll'}}>
            {products.map((product, index) => (
                <ButtonBase key={index} onClick={() => handleClick(product.id)}>
                <Box key={index} sx={{minWidth:'160px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                   <Box sx={{display: 'flex', alignSelf: 'center'}}>
                       <ProductCard
                           image={product.image}
                           item={product}
                           title={product.title}
                           description={product.productDescription}
                           variant={{title: 'h5', body:'body2'}}
                           addToFavourite={false}
                           width={150}
                       />
                   </Box>
                    <Box sx={{display: 'flex', alignSelf: 'center'}}>
                        <Price discountRate={product.discount} originalPrice={product.price}  variant={{price: 'body1', Off: 'body1'}}  />
                    </Box>

                </Box>
                </ButtonBase>
            ))}
        </Box>
    )
}

export default RelatedProducts;