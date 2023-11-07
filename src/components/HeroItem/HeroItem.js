import React from 'react'
import { Paper, Button, Box, Typography } from '@mui/material'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { styled } from '@mui/system';
const HeroItem = ({ item }) => {

    const StyledTitle = styled(Typography)(({ theme }) => ({
        padding: '20px',
        fontWeight: 'bold',
        color: theme.palette.primary.main,

        [theme.breakpoints.down('md')]: {
            padding: '1px',
            fontSize: '23px',
        },
    }))

    const StyledSubtitle = styled(Typography)(({ theme }) => ({
        paddingBottom: '30px',
        paddingLeft: '20px',
        fontSize: '28px',
        color: theme.palette.primary.main,


        [theme.breakpoints.down('md')]: {
            fontSize: '20px',
            paddingBottom: '8px',
            paddingLeft: '1px',
        },
       
    }))
    return (
        <Box
            sx={{ position: 'relative', }}>
            <img src={item.image} alt={item.title} style={{ width: '100%' }} />

            <Paper
                sx={{
                    position: 'absolute',
                    top: '8%',
                    right: 0,
                    width: '55%',
                    height: '75%',
                    padding: '5px',
                    backgroundColor: 'rgba(222, 222, 222, 0.7)',
                }}>

                <StyledTitle variant={"h2"}>
                    {item.title}
                </StyledTitle>

                <StyledSubtitle variant={'h5'}>
                    {item.subtitle}
                </StyledSubtitle>

                <Box sx={{ display: { xs: 'none', md: 'flex' }, ml: '22px' }}>
                    <Button variant="contained">
                        <ArrowRightAltIcon />
                        see more
                    </Button>
                </Box>
            </Paper>
        </Box>

    )
}

export default HeroItem
