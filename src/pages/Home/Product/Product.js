import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import './Product.css';
const Product = ({ product }) => {
    const { _id, name, price, description, img } = product;
    return (
        <div style={{ marginTop: '5%' }} className="product-card">

            <Card >
                <CardMedia
                    component="img"
                    image={img}
                    height='300 px'
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {description}
                    </Typography>
                    <Typography variant="h6" color="text.primary">
                        ৳ {price}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/buyNow/${_id}`}>
                        <Button variant="contained">Buy Now</Button>
                    </Link>

                </CardActions>
            </Card>

        </div>
    );
};

export default Product;