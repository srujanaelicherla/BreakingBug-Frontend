import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const ProductCard = ({ product }) => {
    return (
        <Card>
            <CardMedia
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
            />
            <CardContent>
                <Typography variant="h6" component="div">
                    {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    ${product.price}
                </Typography>
                <Button size="small" variant="contained">Add to Cart</Button>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
