import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import contact from '../../../images/contact.jpg';
const Contact = () => {
    const [contactData, setContactData] = useState({});

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newContactData = { ...contactData };
        newContactData[field] = value;
        setContactData(newContactData);
    }
    const handleLoginSubmit = e => {
        e.preventDefault();
    }
    return (
        <div style={{ marginTop: '2%' }}>
            <Container>
                <Typography variant="h4" color='inherit'>
                    Contact Us
                </Typography>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <img src={contact} style={{ width: "100%" }} alt="" />
                    </Grid>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                        <Typography variant="body1">
                            <form onSubmit={handleLoginSubmit}>
                                <TextField id="standard-basic"
                                    sx={{ width: "75%", m: 1 }}
                                    label="Your Name"
                                    type="text"
                                    name="name"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField id="standard-basic"
                                    label="Your Email"
                                    sx={{ width: "75%", m: 1 }}
                                    type="email"
                                    name="email"
                                    onBlur={handleOnBlur}
                                    variant="standard" />
                                <TextField
                                    sx={{ width: "75%", m: 1 }}
                                    placeholder="Your Message"
                                    multiline
                                    rows={2}
                                    rowsMax={4}
                                    type="text"
                                    onBlur={handleOnBlur}
                                />
                                <Button type="submit"
                                    variant="contained"
                                    sx={{ width: "75%", m: 1 }}
                                >Send Message</Button>
                            </form>

                        </Typography>
                    </Grid>

                </Grid>
            </Container>
        </div>
    );
};

export default Contact;