import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import Footer from '../../Footer/Footer';
import Navigation from '../../Navigation/Navigation';
import review from '../../../images/review.jpg';
import useAuth from '../../../hooks/useAuth';
const AddReviews = () => {
    const { user } = useAuth();
    const initialInfo = { name: user.displayName, email: user.email, comment: '', reviewNumber: 0 }
    const [reviewData, setReviewData] = useState(initialInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...reviewData };
        newLoginData[field] = value;
        setReviewData(newLoginData);
    }

    const handleLoginSubmit = e => {
        console.log(reviewData);
        //send to the server
        fetch('https://calm-reaches-59918.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Review Given Successfully');
                    setReviewData(initialInfo);
                }
            })
        e.preventDefault();
    }
    return (
        <div >
            <Navigation></Navigation>
            <Container style={{ marginTop: '5%', marginBottom: '5%' }}>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={6}>
                        <img src={review} style={{ width: "100%" }} alt="" />
                    </Grid>
                    <Grid sx={{ mt: 8 }} item xs={12} md={6}>
                        <Typography variant="h5">
                            Add Review
                        </Typography>
                        <form onSubmit={handleLoginSubmit}>
                            <TextField id="standard-basic"
                                sx={{ width: "75%", m: 1 }}
                                value={user.displayName}
                                type="text"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField id="standard-basic"
                                sx={{ width: "75%", m: 1 }}
                                value={user.email}
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField id="standard-basic"
                                sx={{ width: "75%", m: 1 }}
                                label="Add Comment"
                                type="text"
                                name="comment"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField id="standard-basic"
                                label="Rating"
                                sx={{ width: "75%", m: 1 }}
                                type="number"
                                InputProps={{
                                    inputProps: {
                                        max: 5, min: 0
                                    }
                                }}
                                name="reviewNumber"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <Button type="submit"
                                variant="contained"
                                sx={{ width: "75%", m: 1 }}
                            >Register</Button>

                        </form>


                    </Grid>

                </Grid>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default AddReviews;