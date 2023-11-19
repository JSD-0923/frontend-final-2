import { useQuery } from 'react-query';
import { apiAxios } from './axios';
import React from 'react'

/**
 * 
 * list products
 */
const fetchLandingProducts = async (filter) => {
  return await apiAxios.get(`/${filter}`)
}
const useLandingProducts = (filter) => {
  return useQuery({
    queryKey: ['landingProducts', 'list',filter],
    queryFn:  () =>  fetchLandingProducts(filter).then(res => res.data),
    staleTime: Infinity
  })
}


const fetchProducts= async (filter) => {
  console.log(filter);
  return await apiAxios.get(`/products/filter${filter}
  `).then(res => res.data)
}
const useProducts = (filter) => {
  return useQuery({
    queryKey: ['products', 'list',filter],
    queryFn:  () =>  fetchProducts(filter),
    staleTime: Infinity
  })
}



// useProducts

export { useProducts , useLandingProducts  };



