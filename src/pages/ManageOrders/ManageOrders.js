
import { Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';

const ManageOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('https://calm-reaches-59918.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [orders, user]);
    let count = 1;
    const handleDelete = id => {
        if (id) {
            if (window.confirm("Are you sure to delete this order?")) {
                const url = `https://calm-reaches-59918.herokuapp.com/orders/${id}`;
                fetch(url, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount) {
                            alert("successfully Deleted");
                            const remaining = orders.filter(order => order._id !== id);
                            setOrders(remaining);
                        }

                    })
            }
        }
    };
    const handleUpdateOrders = id => {
        const url = `https://calm-reaches-59918.herokuapp.com/orders/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orders)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Updated Successfully');
                    const remaining = orders;
                    setOrders(remaining);
                }
                console.log(data);
            })
    };
    return (
        <div>
            <Navigation></Navigation>
            <Grid container spacing={2}>
                <Grid item xs={12} md={12}>
                    <TableContainer component={Paper} style={{ paddingTop: '5%', paddingBottom: '5%' }}>
                        <Typography variant="h4">My Orders</Typography>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Serial No</TableCell>
                                    <TableCell >Product Id</TableCell>
                                    <TableCell>Customer Name</TableCell>
                                    <TableCell>Customer Email</TableCell>
                                    <TableCell>Customer Phone</TableCell>
                                    <TableCell>Customer Address</TableCell>
                                    <TableCell>Status</TableCell>
                                    <TableCell>Action</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((row) => (
                                    <TableRow
                                        key={row._id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">
                                            {count++}
                                        </TableCell>
                                        <TableCell >{row.productId}</TableCell>
                                        <TableCell >{row.name}</TableCell>
                                        <TableCell >{row.email}</TableCell>
                                        <TableCell >{row.phone}</TableCell>
                                        <TableCell >{row.address}</TableCell>
                                        <TableCell >{row.status}</TableCell>
                                        <TableCell ><Button variant="contained" color="error" onClick={() => handleDelete(row._id)}>Delete</Button>
                                            <br /><Button style={{ marginTop: "1%" }} variant="contained" color="info" onClick={() => handleUpdateOrders(row._id)}>Update Status</Button>
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

export default ManageOrders;