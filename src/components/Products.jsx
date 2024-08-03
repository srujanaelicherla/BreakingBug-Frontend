import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProductCard from './ProductCard.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../redux/productActions';

const Products = () => {
    const dispatch = useDispatch();
    const { products, loading } = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return (
        <div>
            <Typography variant="h4" align="center" gutterBottom>
                Products
            </Typography>
            {loading ? (
                <Typography variant="h6" align="center">
                    Loading...
                </Typography>
            ) : (
                <Grid container spacing={3}>
                    {products.length === 0 ? (
                        <Typography variant="h6" align="center">
                            No products available
                        </Typography>
                    ) : (
                        products.map(product => (
                            <Grid item key={product.id} xs={12} sm={6} md={4}>
                                <ProductCard product={product} />
                            </Grid>
                        ))
                    )}
                </Grid>
            )}
        </div>
    );
};

export default Products;
