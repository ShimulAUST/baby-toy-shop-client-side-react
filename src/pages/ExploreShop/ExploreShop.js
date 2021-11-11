import { Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Product from '../Home/Product/Product';
import Navigation from '../Navigation/Navigation';

const ExploreShop = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://calm-reaches-59918.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div >
            <Navigation></Navigation>
            <Typography style={{ marginTop: '1%' }} variant="h4" color="inherit">
                All Products
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
            <Footer></Footer>
        </div>
    );
};

export default ExploreShop;