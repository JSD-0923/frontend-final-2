import React, {useState} from 'react';
import {Accordion, AccordionDetails, AccordionSummary, RadioGroup, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Grid from "@mui/material/Grid";
import PaymentCard from "../PaymentCard/PaymentCrad";

const paymentsMethods = [
    {
        id:1,
        title: 'Amazon Pay',
        image: require('../../../assets/payMethods/amazon-pay.png')
    },
    {
        id:2,
        title: 'Apple Pay',
        image: require('../../../assets/payMethods/appel-pay.png')
    },
    {
        id:3,
        title: 'Credit/Debit Card',
        image: require('../../../assets/payMethods/credit-card.png')
    },
    {
        id:4,
        title: 'UPI',
        image: require('../../../assets/payMethods/upi-pay.png')
    }
]

const Payments = () => {
    const [selectedPayment, setSelectedPayment] = useState('1');

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <Accordion elevation={0}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{ borderBottom: '1px solid grey' }}
            >
                <Typography variant={'h3'} component={'h2'} color={'TypeLowEmphasis.main'}>Payments:</Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ margin: '1rem' }}>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    value={selectedPayment}
                    onChange={handlePaymentChange}
                >
                    <Grid container spacing={2}>
                        {paymentsMethods.map((payment) => (
                            <PaymentCard
                                key={payment.id}
                                paymentMethod={payment}
                                selectedValue={selectedPayment}
                                handleChange={handlePaymentChange}
                            />
                        ))}
                    </Grid>
                </RadioGroup>
            </AccordionDetails>
        </Accordion>
    );
};

export default Payments;
