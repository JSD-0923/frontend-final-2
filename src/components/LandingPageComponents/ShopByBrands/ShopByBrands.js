import React from 'react';
import BrandItem from './BrandItem/BrandItem';
import {  Paper, Typography } from "@mui/material";
import { useLandingProducts } from '../../../api/query'
import { forwardRef } from 'react';

const ShopByBrands = () => {

    const { data: brands} = useLandingProducts('brands');
    return (
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', alignSelf: 'center', marginTop: '2rem'}}>
                <Typography
                    component={'h2'}
                    variant={'h2'}
                    sx={{marginLeft: '1rem', marginBottom: '20px'}}
                >
                    Shop by Brands
                </Typography>

            <Paper elevation={0} sx={{ marginTop: '1rem', display: 'flex',alignSelf: 'center', width: '100%', marginBottom: '3rem',  cursor: 'pointer'  }}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', width:'100%', gap: "40px",  }}>
                    {brands?.map(brand => {
                        return (
                            <BrandItem key={brand.id} brand={brand} />
                        );
                    })}
                </div>
            </Paper>
        </div>
    );
}

export default forwardRef(ShopByBrands);
