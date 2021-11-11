import { Container, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Review from "../Review/Review";

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://calm-reaches-59918.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <div style={{ marginTop: '5%' }}>
            <Typography variant="h4" color="inherit">
                Customers Review
            </Typography>
            <Container>
                <Grid container spacing={2}>

                    {
                        reviews.map(review => <Grid item xs={12} md={4}><Review
                            key={review._id}
                            review={review}
                        ></Review> </Grid>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Reviews;