import React from 'react'
import ProductImageGallery from '../components/ProductPageComponents/ProductImageGallery/ProductImageGallery'
import {Box, Grid, Paper, Typography} from "@mui/material";
import ProductPanel from "../components/ProductPageComponents/ProductPanel/ProductPanel";
import ProductTaps from "../components/ProductPageComponents/ProductTaps/ProductTaps";
import {useProduct} from "../hooks/useAppAPIs";
import {useParams} from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

const ProductPage = () => {


    const { id } = useParams();

    const {data: product, isLoading, isError, error} = useProduct(id)

    if (isLoading) {
        return (
            <div style={{  }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                    <CircularProgress />
                </Box>
            </div>
        )
    }

    if (isError) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                {error.response && error.response.data && (
                    <Typography sx={{color:'primary.main'}} variant={'h2'} component={'h2'}>{error.response.data.error}</Typography>
                )}
            </Box>
        )
    }

    const links = [
        {
            name: 'Home',
            path: `/`
        },
        {
            name: product.category.name,
            path: `/products?categoryId=${product.category.id}`
        },
    ]
    return (
        <>
            <CustomBreadcrumbs links={links} label={product.name}/>
            {product &&
                <>
                    <Paper elevation={0} sx={{marginTop: '1rem'}} >
                        <Grid container spacing={5}>
                            <Grid item xs={12} md={6} lg={6}><ProductImageGallery productImage ={product.image}/></Grid>
                            <Grid item xs={12} md={6} lg={6}><ProductPanel product={product}/></Grid>
                            <Grid item xs={12}> <ProductTaps description={product.description}  reviews={product.reviewCount}/></Grid>
                        </Grid>
                    </Paper>
                </>
            }
        </>
    )
}

export default ProductPage
