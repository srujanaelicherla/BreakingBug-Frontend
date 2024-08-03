import { InputBase, Box, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getSearchedProducts } from '../../../redux/userHandle';

const Search = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearch = () => {
        if (searchTerm.trim()) {
            dispatch(getSearchedProducts("searchProduct", searchTerm));
            navigate("/ProductSearch");
        }
    };

    return (
        <SearchContainer>
            <InputSearchBase
                placeholder="Search for products, brands and more"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        handleSearch();
                    }
                }}
            />
            <SearchIconWrapper onClick={handleSearch}>
                <SearchIcon sx={{ color: "#4d1c9c" }} />
            </SearchIconWrapper>
        </SearchContainer>
    );
};

const SearchContainer = styled(Box)`
    border-radius: 2px;
    margin-left: 10px;
    width: 38%;
    background-color: #fff;
    display: flex;
    align-items: center;
`;

const SearchIconWrapper = styled(Box)`
    margin-left: auto;
    padding: 5px;
    display: flex;
    cursor: pointer;
`;

const InputSearchBase = styled(InputBase)`
    font-size: unset;
    width: 100%;
    padding-left: 20px;
`;

export default Search;
