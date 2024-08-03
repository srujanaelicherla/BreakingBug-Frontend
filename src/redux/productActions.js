import { createAction } from '@reduxjs/toolkit';

// Define action types
export const getProducts = createAction('products/getProducts');

// Example of async action (using redux-thunk)
export const fetchProducts = () => async dispatch => {
    dispatch(getProducts());
    try {
        const response = await fetch('/api/products');
        const data = await response.json();
        dispatch({ type: 'products/getProductsSuccess', payload: data });
    } catch (error) {
        dispatch({ type: 'products/getProductsFailure', payload: error.message });
    }
};
