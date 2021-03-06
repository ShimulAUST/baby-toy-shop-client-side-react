import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://calm-reaches-59918.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            });

        e.preventDefault();
    }
    return (
        <div>
            <Navigation></Navigation>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField id="email" sx={{ width: '50%' }} type="email" onBlur={handleOnBlur} label="Email" variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {
                success && <Alert severity="success">Make Admin Successfully!!</Alert>
            }
            <Footer></Footer>
        </div>
    );
};

export default MakeAdmin;