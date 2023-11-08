import {Box,  styled, Typography} from "@mui/material";
import {discountTypographyStyle, PriceBoxStyle} from "./style";

 const PriceTypography = styled(Typography)(() => ({
    // Mobile Small
    '@media (min-width: 320px)': {
       fontSize: '22px',
        marginLeft: '10px'
    },
    '@media (min-width: 768px)': {
        fontSize: '30px',
        marginLeft: '14px'
    },
    '@media (min-width: 1024px)': {
        fontSize: '40px'
    },
    '@media (min-width: 1440px)': {
        fontSize: '52px'
    },


}));
const Price = (props) => {
    const {originalPrice, discountRate} = props

    return (
        <Box sx={PriceBoxStyle}>
            {discountRate === 0 &&
            <PriceTypography
                sx={{
                    fontWeight: 700
                }}
            >${originalPrice}</PriceTypography>
            }
            {discountRate > 0 &&

                <>
                    <PriceTypography
                        sx={{
                            fontWeight: 700
                        }}
                        component={'span'}
                    >${originalPrice*discountRate}</PriceTypography>
                    <PriceTypography
                        sx={{
                            fontWeight: 600,
                            textDecoration: "line-through",
                            color: 'lightText.main'
                        }}
                        component={'span'}
                    >${originalPrice}</PriceTypography>
                    <Typography
                        sx={discountTypographyStyle}
                        component={'span'}
                    >{discountRate*100}%OFF</Typography>
                </>
            }
        </Box>
    )
}

export default Price;