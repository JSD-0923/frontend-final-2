import {styled, Typography} from "@mui/material";


export const HandPickedCardStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '10px',
    marginBottom: '1rem',
    // Mobile Small
    '@media (min-width: 320px)': {
        height: '120px'
    },
    '@media (min-width: 375px)': {
        height: '130px'
    },
    '@media (min-width: 425px)': {
        height: '150px'
    },
    '@media (min-width: 768px) and (max-width: 1000px)': {
        height: '150px'
    },
    '@media (min-width: 1001px) and (max-width: 1220px)': {
        height: '200px'
    },

    '@media (min-width: 1221px)': {
        width: '275px',
        height: '275px'
    },
}

export const HandPickedBox = {
    position: 'absolute',
    top: '85%',
    bottom: 0,
    marginLeft: '1rem',
    PaddingY: '1rem'
}

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