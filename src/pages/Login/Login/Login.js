import { Alert, Button, CircularProgress, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import loginimg from '../../../images/login.jpg';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const signInWithGoogleHandler = () => {
        signInWithGoogle(location, history);
    }
    return (
        <div>
            <Navigation></Navigation>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <img src={loginimg} style={{ width: "100%" }} alt="" />
                    </Grid>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                        <Typography variant="body1">
                            Login
                            <form onSubmit={handleLoginSubmit}>
                                <TextField id="standard-basic"
                                    sx={{ width: "75%", m: 1 }}
                                    label="Your Email"
                                    type="email"
                                    name="email"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <TextField id="standard-basic"
                                    label="Your Password"
                                    sx={{ width: "75%", m: 1 }}
                                    type="password"
                                    name="password"
                                    onChange={handleOnChange}
                                    variant="standard" />
                                <Button type="submit"
                                    variant="contained"
                                    sx={{ width: "75%", m: 1 }}
                                >Login</Button>
                                <NavLink to="/register"
                                    style={{ textDecoration: "none" }}
                                > <Button type="submit"
                                    variant="text"
                                    sx={{ width: "75%", m: 1 }}
                                >New User? Please Register</Button></NavLink>

                            </form>
                            {
                                isLoading && <CircularProgress />
                            }
                            {
                                user?.email && <Alert severity="success">Login Successfully!!</Alert>
                            }
                            {
                                authError && <Alert severity="error">{authError}</Alert>
                            }
                            <p>--------------------------------------</p>
                            <Button variant="contained" onClick={signInWithGoogleHandler}
                                sx={{ width: "75%", m: 1 }}>Sign In Using Google</Button>
                        </Typography>
                    </Grid>

                </Grid>
            </Container >
            <Footer></Footer>
        </div>
    );
};

export default Login;