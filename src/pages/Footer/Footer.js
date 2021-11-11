import { AppBar, Container, Divider, Grid, Toolbar, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import logo from '../../images/logo.png';
const Footer = () => {
    return (
        <AppBar className="footerAppBar" position="static" color="primary" >
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                        <Typography variant="body1" color="inherit">
                            <img src={logo} alt="" /> <br />
                            Baby Toys World <br />
                            Dhaka,Bangladesh
                        </Typography>

                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="inherit">
                            Useful Links
                        </Typography>
                        <Link to='#'>Home</Link> <br />
                        <Link to='#'>Contact Us</Link><br />
                        <Link to='#'>About Us</Link><br />
                        <Link to='#'>Find Us</Link>
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6" color="inherit">
                            Login Links
                        </Typography>
                        <Link to='#'>Login</Link><br />
                        <Link to='#'>Register</Link><br />
                        <Link to='#'>Follow Us</Link><br />
                        <Link to='#'>Subscribe Us</Link>
                    </Grid>
                </Grid>
                <Divider></Divider>
                <Typography className="bottomFooter" variant="body1" style={{ textAlign: 'center' }} color="inherit">
                    © 2021 Shimul Paul
                </Typography>

            </Container>
        </AppBar>
    );
};

export default Footer;