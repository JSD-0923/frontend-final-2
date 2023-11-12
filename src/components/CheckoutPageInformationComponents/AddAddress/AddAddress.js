import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

const AddressForm = (props) => {

    const {onSubmit} = props

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobileNumber: '',
        address: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {

        e.preventDefault();
        onSubmit()
        console.log('Form Data:', formData);
    };

    return (
        <Container maxWidth="sm">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    mt: 1,
                }}
            >
                <form onSubmit={handleSubmit}>
                    <TextField
                        label="First Name"
                        variant="outlined"
                        margin="normal"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Last Name"
                        variant="outlined"
                        margin="normal"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Email"
                        variant="outlined"
                        margin="normal"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Mobile Number"
                        variant="outlined"
                        margin="normal"
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <TextField
                        label="Address"
                        variant="outlined"
                        margin="normal"
                        multiline
                        rows={4}
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required
                        fullWidth
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        sx={{ mt: 2 }}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
    );
};

export default AddressForm;
