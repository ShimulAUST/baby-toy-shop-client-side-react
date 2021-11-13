import { Typography } from '@mui/material';
import React from 'react';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Payment = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Typography variant="h5" style={{ marginTop: '2%', marginBottom: '2%' }}>
                Payment Method Coming Soon.
            </Typography>
            <Footer></Footer>
        </div>
    );
};

export default Payment;