
import './OrderCheckoutSummary.css'
import {Box, Button, Divider, Paper, Typography} from "@mui/material";

const OrderCheckoutSummary = (props) => {

    const {showButtons=true, headTitle} = props

    // const subTotal = cartProducts.reduce((sum, product) => sum + product.price, 0);

    return (
        <Paper elevation={0} sx={{margin: '1rem', paddingY: '1rem'}}>
            <Typography variant={'h3'} component={'h2'} sx={{ marginBottom: '10px'}}>
                {headTitle}
            </Typography>
            <Divider />

            <Box sx={{display: 'flex', flexDirection: 'column', gap: '10px', marginTop:'12px', marginBottom:'12px'}}>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Sub Total</Typography>
                    <Typography>$119.69</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Discount</Typography>
                    <Typography>-$13.40</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{color: 'TypeLowEmphasis.main'}} variant={'h4'} component={'h2'}>Delivery Fee</Typography>
                    <Typography>$12</Typography>
                </Box>
                <Box sx={{display: 'flex', justifyContent: 'space-between'}}>
                    <Typography sx={{fontWeight: 600}} variant={'h4'} component={'h2'}>Grand Total</Typography>
                    <Typography>$106.29</Typography>
                </Box>
            </Box>

            {showButtons &&
                <Box sx={{display: 'flex', gap:'15px', width:'100%', justifyContent: 'center'}}>
                    <Button sx={{width: '50%', maxWidth: '180px'}} variant="contained"><Typography variant={'h4'}>Place Order</Typography></Button>
                    <Button sx={{width: '50%', maxWidth: '180px'}} variant="outlined"><Typography variant={'h4'}>Continue Shopping</Typography></Button>
                </Box>
            }

        </Paper>
    )
}

export default OrderCheckoutSummary;