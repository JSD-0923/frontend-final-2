import {Box, Typography} from "@mui/material";
import {PriceBoxStyle} from "./style";

const Price = (props) => {
    const {originalPrice, discountRate, variant} = props

    return (
        <Box sx={PriceBoxStyle}>
            {discountRate === 0 &&
            <Typography
                variant={variant.price}
                component={'span'}
                sx={{
                    fontWeight: 700
                }}
            >${originalPrice}</Typography>
            }
            {discountRate > 0 &&

                <>
                    <Typography
                        variant={variant.price}

                        component={'span'}
                    >${originalPrice*discountRate}
                    </Typography>

                    <Typography
                        variant={variant.price}
                        sx={{
                            fontWeight: 600,
                            textDecoration: "line-through",
                            color: 'lightText.main',
                        }}
                        component={'span'}
                    >${originalPrice}
                    </Typography>

                    <Typography
                        variant={variant.Off}
                        sx={{color: 'red'}}
                        component={'span'}
                    >
                        {discountRate*100}%OFF
                    </Typography>
                </>
            }
        </Box>
    )
}

export default Price;