import React from 'react'
import ImageGallery from "react-image-gallery";

const ProductImageGallery = (props) => {

    const {productImages} = props
    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <ImageGallery items={productImages} />
        </div>
    );
}

export default ProductImageGallery
