import React from 'react';
import BrandItem from '../BrandItem/BrandItem';
import {Button, Paper, useMediaQuery} from "@mui/material";
import { BrandMockData } from "./brandMockData";
import theme from "../../MUI Themse/customTheme";

const ShopByBrands = () => {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <div style={{display: 'flex' , flexDirection: 'column'}}>
            {isSmallScreen && <Button style={{textTransform: 'none', alignSelf: 'flex-end'}}>View all ></Button>}
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
