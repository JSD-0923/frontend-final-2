import {Box, Typography} from "@mui/material";
import {PriceBoxStyle} from "./style";

const Price = (props) => {
    const {originalPrice, discountRate, variant} = props

    const _originalPrice = Math.round(originalPrice*100)/100
    const _discountRate = discountRate/100;
    const discountedPrice = Math.round(_originalPrice*_discountRate*100)/100
    return (
        <Box sx={PriceBoxStyle}>
            {discountRate === 0 &&
            <Typography
                variant={variant.price}
                component={'span'}
                sx={{
                    fontWeight: 700
                }}
            >${_originalPrice}</Typography>
            }
            {discountRate > 0 &&

                <>
                    <Typography
                        variant={variant.price}

                        component={'span'}
                    >${discountedPrice}
                    </Typography>

                    <Typography
                        variant={variant.price}
                        sx={{
                            fontWeight: 600,
                            textDecoration: "line-through",
                            color: 'lightText.main',
                        }}
                        component={'span'}
                    >${_originalPrice}
                    </Typography>

                    <Typography
                        variant={variant.Off}
                        sx={{color: 'red'}}
                        component={'span'}
                    >
                        {discountRate}%OFF
                    </Typography>
                </>
            }
        </Box>
    )
}

export default Price;