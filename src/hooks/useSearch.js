import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const useSearch = (value) => {
    // برجع السيرتش باراميتر الحالي وبخزنو باللوكيشن
    const navigate = useNavigate()
    let queryString = useLocation().search;
    
    const handleProductsPage = () => {
        console.log('hi')
        console.log(queryString)
        if(queryString)
        {
            navigate(`products${queryString}&search=${value}`)
        }
        else{
            navigate(`products?search=${value}`)
        }
        
        console.log(value)

    }
    return { handleProductsPage }
}
