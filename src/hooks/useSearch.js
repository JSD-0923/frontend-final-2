import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

export const useSearch = (value) => {
    const navigate = useNavigate()
    let queryString = useLocation().search;

    const handleProductsPage = () => {

        if (queryString) {
            navigate(`products${queryString}&search=${value}`)
        }
        else {
            navigate(`products?search=${value}`)
        }

    }
    return { handleProductsPage }
}
