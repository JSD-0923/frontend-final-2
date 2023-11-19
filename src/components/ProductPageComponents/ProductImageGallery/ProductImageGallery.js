import React from 'react'
import ImageGallery from "react-image-gallery";

const ProductImageGallery = () => {

   const images = [
        {
            original: ('https://media.wired.com/photos/6495f3af2cc57777ec67f0ed/1:1/w_1800,h_1800,c_limit/bellroy-tokyo-work-bag-source-bellroy-Gear.jpg'),
            thumbnail: 'https://media.wired.com/photos/6495f3af2cc57777ec67f0ed/1:1/w_1800,h_1800,c_limit/bellroy-tokyo-work-bag-source-bellroy-Gear.jpg',

        },
        {
            original: require('../../../assets/images/product-image.png'),
            thumbnail: require('../../../assets/images/product-image.png'),
        },
        {
            original: require('../../../assets/images/product-image.png'),
            thumbnail: require('../../../assets/images/product-image.png'),
        },

    ]
    return (
        <div style={{display: 'flex', justifyContent:'center'}}>
            <ImageGallery items={images} />
        </div>
    );
}

export default ProductImageGallery
