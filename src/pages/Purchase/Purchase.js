import React, { useEffect, useState } from 'react';

import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import './Purchase.css';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const Purchase = () => {
    const { _id } = useParams();
    const [products, setProducts] = useState({});
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    useEffect(() => {
        const uri = `https://calm-reaches-59918.herokuapp.com/products/${_id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [_id]);
    const onSubmit = data => {
        axios.post('https://calm-reaches-59918.herokuapp.com/orders', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Ordered Successfully");
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <div>
            <Navigation></Navigation>
            <Grid container spacing={2} style={{ padding: '5%' }}>
                <Grid item xs={12} md={6}>
                    <Card >
                        <CardMedia
                            component="img"
                            image={products.img}
                            height='300 px'
                            alt="green iguana"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {products.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {products.description}
                            </Typography>
                            <Typography variant="h6" color="text.primary">
                                ৳ {products.price}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6}>
                    <div className="purchase-product">
                        <h2>Details</h2>
                        <form onSubmit={handleSubmit(onSubmit)}>

                            <input {...register("serviceId")} value={_id || ''} readOnly hidden />
                            <input {...register("name", { required: true, maxLength: 30 })} value={user.displayName || ''} />
                            <input {...register("email", { required: true, maxLength: 30 })} value={user.email || ''} />
                            <input {...register("status")} value="pending" readOnly />
                            <input {...register("phone", { required: true, maxLength: 30 })} placeholder="Enter your phone number" />
                            <textarea {...register("address")} placeholder="Enter your address" />
                            <input className="btn btn-success btn-block form-control" type="submit" />
                        </form>
                    </div>
                </Grid>
            </Grid>
            <Footer></Footer>

        </div>
    );
};

export default Purchase;