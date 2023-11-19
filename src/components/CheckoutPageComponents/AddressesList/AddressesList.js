import React, { useState} from 'react';
import Grid from "@mui/material/Grid";
import UserAddress from "../UserAddress/UserAddress";
import {Accordion, AccordionDetails, AccordionSummary, Button, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AddAddress from "../AddAddress/AddAddress";
import {useAddAddress, useAddresses} from "../../../hooks/useAppAPIs";


const AddressesList = (props) => {

    const { onSelect, selectedCard} = props

    const [show, setShow] = useState(false)

    const {data:addresses} = useAddresses()

    const addToAddressMutation = useAddAddress();
    const handleSubmit = async (addressFormData) => {
        try {
            console.log('_data', addressFormData);
            await addToAddressMutation.mutateAsync(addressFormData);
            setShow(false);
        } catch (error) {

            console.error('Validation Error:', error.response.data);
        }
    };



    return (

    <Accordion elevation={0}  >
        <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{borderBottom: '1px solid grey'}}
        >
            <Typography variant={'h3'} component={'h2'} color={'TypeLowEmphasis.main'}>Addresses list:</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{margin: '1rem'}}>
            {!addresses && <Typography>No addresses yet, please add one at least!</Typography>}
            <Grid container spacing={2}>
                {addresses?.addresses.map((address) => (
                    <UserAddress
                        key={address.id}
                        address={address}
                        onSelect={onSelect}
                        isSelected={address.id === selectedCard}
                    />
                ))}
            </Grid>
            <Button sx={{marginTop: '1rem'}} variant="contained" startIcon={<AddCircleIcon />} onClick={()=> setShow(!show)}>Add New Address</Button>
            {show &&
                <AddAddress onSubmit={handleSubmit}/>
            }

        </AccordionDetails>
    </Accordion>

    );
};

export default AddressesList;
