import React from 'react';
import { InputBase, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate, useLocation } from 'react-router-dom';

export const SearchBox = () => {
    let location = useLocation().search;
    const navigate = useNavigate();

    return (
        <>
            <InputBase
                startAdornment={
                    <InputAdornment position="start">
                        <IconButton sx={{color:'TypeHighEmphasis.main'}} >
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Search for products or brands ..."
                inputProps={{ 'aria-label': 'enter text' }}
            />
        </>
    );
};