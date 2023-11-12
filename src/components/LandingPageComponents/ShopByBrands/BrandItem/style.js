import {Card, styled} from "@mui/material";


export const BrandCard = styled(Card)(({ theme }) => ({
    backgroundColor: theme.palette.accent.main,
    borderRadius: '16px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '1rem',
    boxShadow: 'none',
    // Mobile Small
    '@media (min-width: 320px)': {
        width: '90px',
        height: '90px',
    },
    '@media (min-width: 375px)': {
        width: '100px',
        height: '100px',
    },

    // Tablet Small
    '@media (min-width: 425px)': {
        width: '120px',
        height: '120px',
    },

    '@media (min-width: 768px)': {
        width: '110px',
        height: '110px',
    },
    '@media (min-width: 1024px)': {
        width: '120px',
        height: '120px',
    },
    '@media (min-width: 1440px)': {
        width: '168px',
        height: '168px',
    },


}));