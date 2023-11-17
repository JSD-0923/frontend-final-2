import React from 'react';
import { Stack, Alert } from '@mui/material';

const AlertStack = (props) => {
    const { successVisible, errorVisible, warningVisible, onCloseAlert, successMessage, errorMessage, warningMessage } = props;

    return (
        <Stack sx={{ position: 'absolute' }} spacing={2}>
            {successVisible && (
                <Alert
                    severity="success"
                    onClose={() => onCloseAlert('success')}
                    sx={{ backgroundColor: '#43a047', color: 'white' }}
                >
                    {successMessage}
                </Alert>
            )}
            {errorVisible && (
                <Alert
                    severity="error"
                    onClose={() => onCloseAlert('error')}
                >
                    {errorMessage}
                </Alert>
            )}
            {warningVisible && (
                <Alert
                    severity="warning"
                    onClose={() => onCloseAlert('warning')}
                >
                    {warningMessage}
                </Alert>
            )}
        </Stack>
    );
};

export default AlertStack;
