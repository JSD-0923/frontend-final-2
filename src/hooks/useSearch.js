import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

// export const useSearch = (value) => {
//     // برجع السيرتش باراميتر الحالي وبخزنو باللوكيشن
//     let location = useLocation().search;
//     const navigate = useNavigate()
//     const handleProductsPage = () => {
        
//         console.log('hi')
//         const search = new URLSearchParams(location);
//         console.log(search)

//         let userSearchValue = value;
//         const searchResult = userSearchValue;
//         console.log(searchResult)
        
//     }
//     return { handleProductsPage }

// }
export const useSearch = (value) => {
    // برجع السيرتش باراميتر الحالي وبخزنو باللوكيشن
    let location = useLocation().search;
    const navigate = useNavigate()
    const handleProductsPage = () => {
        console.log('hi')
        const search = new URLSearchParams(location);
        console.log(search)
        let userSearchValue = value;
        const searchResult = userSearchValue;
        console.log(searchResult)
    }
    return { handleProductsPage }
}

// import { useLocation , useNavigate } from 'react-router-dom';

// export function useSearch(paramValue) {
//     let location = useLocation().search;
//     const navigate = useNavigate();
//     const handleProductsPage = () => {
//         const searchParams = new URLSearchParams(location);
//         let searchValue = paramValue;
//         console.log(searchValue)
//         // let categoryValue = searchParams.get('category') || '';
//         // let brandValue = searchParams.get('brand') || '';
//         // let arrivalValue = searchParams.get('newArrival') || false;
//         // let handpickedValue = searchParams.get('handpicked') || false;
//         const result = `${searchValue ? `search=${searchValue}` : 'no'}`;
//         console.log(result);
//         navigate(`/products/filter?${result}`);
//     }
//     return { handleProductsPage };
// }