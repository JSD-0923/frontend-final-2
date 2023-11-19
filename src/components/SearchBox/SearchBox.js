import React from 'react';
import { InputBase, IconButton, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {useSearch} from '../../hooks/useSearch'
// import CategoriesPage from '../../pages/CategoriesPage'
import { useEffect } from 'react';
export const SearchBox = ({userInput,userInputChange}) => {
    const { handleProductsPage } = useSearch(userInput);
    const handleKey=(event)=>{
       
        if(event.key === 'Enter')
        {
            handleProductsPage();
        }
    }
    

    return (
        <>
            <InputBase
                value={userInput}
                onChange={userInputChange}
                onKeyPress={handleKey}
                
                startAdornment={
                    <InputAdornment
                        position="start"
                    >
                        <IconButton sx={{color:'TypeHighEmphasis.main'}}  onClick={() => handleProductsPage()}>
                            <SearchIcon />
                        </IconButton>
                    </InputAdornment>
                }
                placeholder="Search for products or brands ..."
                inputProps={{ 'aria-label': 'enter text' }}
                sx={{width: '100%'}}
            />
        </>
    );
};