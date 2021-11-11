import { Card, CardContent, Rating, Typography } from '@mui/material';
import React from 'react';

const Review = ({ review }) => {
    const { name, comment, reviewNumber } = review;
    return (
        <Card sx={{ minWidth: 275, textAlign: 'center' }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {name}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {comment}
                </Typography>
                <Rating name="read-only" value={reviewNumber} readOnly />
            </CardContent>
        </Card>
    );
};

export default Review;