import {Box, Card, styled, Typography} from "@mui/material";


export const HandPickedCard = styled(Card)(() => ({
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginBottom: '1rem',
    // Mobile Small
    '@media (min-width: 320px)': {
        height: '100px'
    },
    '@media (min-width: 375px)': {
        height: '120px'
    },
    '@media (min-width: 425px)': {
        height: '140px'
    },
    '@media (min-width: 768px)': {
        height: '140px'
    },

    '@media (min-width: 1024px)': {
        width: '230px',
        height: '230px'
    },

}));

export const HandPickedBox = styled(Box)(() => ({
    position: 'absolute',
    top: '85%',
    bottom: 0,
    marginLeft: '1rem',
    PaddingY: '1rem'
}));

export const HandPickedTypographyH2 = styled(Typography)(() => ({

    fontWeight: 600,
    
    '@media (min-width: 320px)': {
        fontSize: '13px',
    },

    '@media (min-width: 375px)': {
        fontSize: '15px',

    },
    '@media (min-width: 426px) and (max-width: 768px)': {
        fontSize: '16px',
    },
    '@media (min-width: 769px) and (max-width: 1025px)': {
        fontSize: '20px',
        width: '150px',
    },
    '@media (min-width: 1025px)': {
        fontSize: '22px',
    },

}));