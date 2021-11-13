
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const ManageProducts = () => {
    const { user } = useAuth();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://calm-reaches-59918.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [products, user]);
    let count = 1;
    const handleDelete = id => {
        if (id) {
            if (window.confirm("Are you sure to delete this product?")) {
                const url = `https://calm-reaches-59918.herokuapp.com/products/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            alert("successfully Deleted");
                            const remaining = products.filter(product => product._id !== id);
                            setProducts(remaining);
                        }

                    })
            }
        }
    };
    return (
        <div>
            <Navigation></Navigation>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper} style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                        <Typography variant="h4">All Products</Typography>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Serial No</TableCell>
                                    <TableCell >Product Id</TableCell>
                                    <TableCell>Product Name</TableCell>
                                    <TableCell>Product Description</TableCell>
                                    <TableCell>Product Price</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {products.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {count++}
                                        </TableCell>
                                        <TableCell >{row._id}</TableCell>
                                        <TableCell >{row.name}</TableCell>
                                        <TableCell >{row.description}</TableCell>
                                        <TableCell >{row.price}</TableCell>
                                        <TableCell ><Button variant="contained" color="error" onClick={() => handleDelete(row._id)}>Delete</Button>
                                        </TableCell>

                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
            <Footer></Footer>

        </div>
    );
};

export default ManageProducts;