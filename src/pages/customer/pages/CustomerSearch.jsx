import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/system';
import Products from '../../../components/Products';
import { useDispatch, useSelector } from 'react-redux';
import { getSearchedProducts } from '../../../redux/userHandle';

const CustomerSearch = ({ mode }) => {
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");
    const { filteredProducts } = useSelector(state => state.user);

    const handleSearch = (event) => {
        event.preventDefault(); // Prevent form submission from reloading the page
        dispatch(getSearchedProducts("searchProduct", searchTerm));
    };

    return (
        <div>
            {mode === "Mobile" ? (
                <>
                    <SearchContainer onSubmit={handleSearch}>
                        <TextField
                            label="Search for products, brands and more"
                            variant="outlined"
                            fullWidth
                            size="small"
                            InputProps={{
                                style: {
                                    borderRadius: 0,
                                },
                            }}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <SearchButton type="submit">Search</SearchButton>
                    </SearchContainer>
                    {searchTerm && <Products productData={filteredProducts} />}
                </>
            ) : (
                <>
                    {filteredProducts && <Products productData={filteredProducts} />}
                </>
            )}
        </div>
    );
};

const SearchContainer = styled('form')({
    display: 'flex',
    justifyContent: 'center',
    padding: '16px',
    alignItems: 'center',
});

const SearchButton = styled('button')({
    marginLeft: '8px',
    padding: '8px 16px',
    border: 'none',
    backgroundColor: '#3f51b5',
    color: '#fff',
    borderRadius: '4px',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#303f9f',
    },
});

export default CustomerSearch;
