import React from 'react';
import BrandItem from '../BrandItem/BrandItem';
import {Box, Button, Paper, Typography, useMediaQuery} from "@mui/material";
import { BrandMockData } from "./brandMockData";
import theme from "../../MUI Themse/customTheme";

const ShopByBrands = () => {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div style={{display: 'flex' , flexDirection: 'column'}}>
            <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}>
                <Typography
                    component={'h2'}
                    variant={'h2'}
                    sx={{marginLeft: '1rem'}}
                >
                    Shop by Brands
                </Typography>
                {isSmallScreen && <Button style={{textTransform: 'none', alignSelf: 'flex-end'}}>View all ></Button>}
            </Box>

            <Paper elevation={0}>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {BrandMockData.map(brand => {
                        return (
                            <BrandItem key={brand.id} brand={brand} />
                        );
                    })}
                </div>
            </Paper>
        </div>
    );
}

export default ShopByBrands;
