
import './OrderCheckoutSummary.css'
import {Box, Divider, Paper, Typography} from "@mui/material";

const OrderCheckoutSummary = (props) => {

    const {cartProducts , headTitle} = props

    return (
        <Paper elevation={0} sx={{margin: '1rem', paddingY: '1rem'}}>
            <Typography variant={'h3'} component={'h2'} sx={{ marginBottom: '10px'}}>
                {headTitle}
            </Typography>
            <Divider />

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop:'12px', marginBottom:'12px'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Sub Total</Typography>
                    <Typography>${cartProducts.totalOrderPriceAfterDiscount.toFixed(2)}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Discount</Typography>
                    <Typography>-${(cartProducts.totalOrderPriceBeforeDiscount-cartProducts.totalOrderPriceAfterDiscount).toFixed(2)}</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Delivery Fee</Typography>
                    <Typography>$12</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{fontWeight: 600}} variant={'h4'} component={'h2'}>Grand Total</Typography>
                    <Typography>${(cartProducts.totalOrderPriceAfterDiscount+12).toFixed(2)}</Typography>
                </Box>
            </Box>

        </Paper>
    )
}

export default OrderCheckoutSummary;