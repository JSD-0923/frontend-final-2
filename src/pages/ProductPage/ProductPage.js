import React from 'react'
import './ProductPage.css'
import ProductImage from '../../components/ProductImage/ProductImage'
import ProductDescription from '../../components/ProductDescription/ProductDescription'
import ProductDetails from '../../components/ProductDetails/ProductDetails'
const ProductPage = () => {
    return (
        <div>
            <ProductImage />
            <ProductDescription />
            <ProductDetails />
        </div>
    )
}

export default ProductPage
