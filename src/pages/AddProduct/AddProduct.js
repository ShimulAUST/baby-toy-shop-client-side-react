
import { Button } from '@mui/material';
import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import './AddProduct.css';
const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('https://calm-reaches-59918.herokuapp.com/products', data)
            .then(res => {
                console.log(res);
                if (res.data.insertedId) {
                    alert("Added Successfully");
                    reset();
                }
            });
        console.log(data);
    }
    return (
        <div>
            <Navigation></Navigation>
            <div className="add-product">
                <h2>Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 30 })} placeholder="Name" className="form-control" />
                    <textarea {...register("description")} placeholder="Description" className="form-control" />
                    <input type="number" {...register("price")} placeholder="Price" className="form-control" />
                    <input {...register("img")} placeholder="image url" className="form-control" />
                    <Button type="submit" sx={{ width: '60%' }} variant="contained" color="success">Submit</Button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AddProduct;