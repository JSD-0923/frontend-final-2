import {ButtonBase, LinearProgress} from "@mui/material";
import Box from "@mui/material/Box";
import * as React from "react";
import ProductCard from "../../../../utils/ProductCard/ProductCard";
import Price from "../../../../utils/Price/Price";
import {useProducts} from "../../../../hooks/useAppAPIs";
import Typography from "@mui/material/Typography";
import {useNavigate} from "react-router-dom";

const RelatedProducts = () => {

    const navigate = useNavigate();

    const {data: products , isLoading, isError} = useProducts('?random=true&limit=4')
    const handleClick = (id) => {
        navigate(`/products/${id}`, { state: { newId: id } })
    };

    if (isLoading) {
        return (
            <Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box>
        )
    }
    if (!products || isError || products.length ===0) {
        return (<Typography variant={'h3'} component={'h2'}> </Typography>)
    }
    return (
       <>
           {products &&
               <Box sx={{display: 'flex', gap: '15px', flexWrap: 'wrap'}}>
                   {products.products.map((product, index) => (
                       <ButtonBase key={index} onClick={() => handleClick(product.id)}>
                           <Box key={index} sx={{minWidth:'160px', display: 'flex', flexDirection: 'column', justifyContent: 'center'}} >
                               <Box sx={{display: 'flex', alignSelf: 'center'}}>
                                   <ProductCard
                                       image={product.image}
                                       item={product}
                                       title={product.name}
                                       variant={{title: 'h5', body:'body2'}}
                                       addToFavourite={false}
                                       width={280}
                                   />
                               </Box>
                               <Box sx={{display: 'flex', alignSelf: 'center', marginTop: '-1rem', marginLeft: '-3rem'}}>
                                   <Price discountRate={product.discount} originalPrice={product.price}  variant={{price: 'h5', Off: 'h5'}}  />
                               </Box>

                           </Box>
                       </ButtonBase>
                   ))}
               </Box>
           }
       </>
    )
}

export default RelatedProducts;