import Toolbar from "@mui/material/Toolbar";
import {Box, Grid, List, ListItemButton, ListItemText, Typography, useMediaQuery} from "@mui/material";
import * as React from "react";

import {ReactComponent as FacebookIcon} from '../../assets/icons/fbLogo.svg'
import {ReactComponent as InstagramIcon} from '../../assets/icons/insta-logo.svg'
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter-logo.svg'
import {ReactComponent as YoutubeIcon} from '../../assets/icons/youtube-logo.svg'
import {ReactComponent as LocationIcon} from '../../assets/icons/location.svg'
import theme from "../../MUI Themse/customTheme";


const FooterContainer = () => {

    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const alignItemsValue = isSmallScreen ?'flex-start': 'flex-end'

    const ShopByCategoryListItems = [
        {
            text: 'Skincare',
            path: '/'
        },
        {
            text: 'Personal Care',
            path: '/'
        },
        {
            text: 'Handbags',
            path: '/'
        },
        {
            text: 'Apparels',
            path: '/'
        },
        {
            text: 'Watches',
            path: '/'
        },
        {
            text: 'Eye Wear',
            path: '/'
        },
        {
            text: 'Jewellery',
            path: '/'
        },
    ]
    const ShopByProductsItems = [
        {
            text: 'Featured',
            path: '/'
        },
        {
            text: 'Trendy',
            path: '/'
        },
        {
            text: 'Brands',
            path: '/'
        }
    ];

    const FooterToolbarStyle = {
        '@media (min-width: 320px) and (max-width: 599px)': {
            marginTop: '1rem',
            marginBottom: '1rem',
        },
        '@media (min-width: 600px)': {
            margin: '2rem'
        },
    }
    return (
        <Toolbar sx={FooterToolbarStyle}>
            <Grid container>
                <Grid item xs={12} md={5}>
                    <Box  sx={{width: '100%', display: 'flex', gap:'1rem'}}>
                        <Box  >
                            <Typography sx={{ color: 'primary.contrastText'}} variant={'body1'} component={'h2'}>Shop by Category</Typography>
                            <List >
                                {ShopByCategoryListItems.map((category) => (
                                    <ListItemButton
                                        key={category.text}
                                        href={category.path}
                                        sx={{  margin: 0, padding: 0, marginTop: '8px' }}
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{color:"lightText.main", fontWeight: 500}}
                                                    variant={'body1'}
                                                    component={'h2'}
                                                >
                                                    {category.text}
                                                </Typography>} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Box>
                        <Box  >
                            <Typography sx={{ color: 'primary.contrastText'}}
                                        variant={'body1'}
                                        component={'h2'}
                            >
                                Shop by Category
                            </Typography>
                            <List >
                                {ShopByProductsItems.map((product) => (
                                    <ListItemButton
                                        key={product.text}
                                        href={product.path}
                                        sx={{  margin: 0, padding: 0, marginTop: '8px' }}
                                    >
                                        <ListItemText
                                            primary={
                                                <Typography
                                                    sx={{color:"lightText.main", fontWeight: 500}}
                                                    variant={'body1'}
                                                    component={'h2'}
                                                >
                                                    {product.text}
                                                </Typography>} />
                                    </ListItemButton>
                                ))}
                            </List>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: alignItemsValue }}  >

                        <Box display="flex"  marginTop={2} marginX={-1}>

                            <Box mx={1}>
                                <FacebookIcon />
                            </Box>
                            <Box mx={1}>
                                <InstagramIcon/>
                            </Box>
                            <Box mx={1}>
                                <TwitterIcon/>
                            </Box>
                            <Box mx={1}>
                                <YoutubeIcon/>
                            </Box>
                        </Box>

                        <Box display="flex" alignItems="center" marginTop={3}>
                            <LocationIcon/>  <Typography variant={'h4'} component={'h2'} color={'primary.contrastText'}>United States</Typography>
                        </Box>

                        <Typography variant={'h4'} component={'span'} color={'lightText.main'} marginTop={2}>
                            © 2021 | Cora Leviene All Rights Reserved
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Toolbar>
    )
}

export default FooterContainer;