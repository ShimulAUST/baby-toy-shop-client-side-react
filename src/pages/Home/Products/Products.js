import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-reaches-59918.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data.slice(0, 6)));
    }, [])
    return (
        <div>
            <Typography variant="h4" color="inherit">
                Hot Products
            </Typography>
            <Container>
                <Grid container spacing={2}>

                    {
                        products.map(product => <Grid item xs={12} md={4}><Product
                            key={product._id}
                            product={product}
                        ></Product> </Grid>)
                    }

                </Grid>
            </Container>
        </div>
    );
};

export default Products;