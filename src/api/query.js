import { useQuery } from 'react-query';
import { apiAxios } from './axios';
import React from 'react'

/**
 * 
 * list brands
 */
const fetchBrands = async () => {
  return await apiAxios.get(`/brands`)
}
const useBrands = () => {
  return useQuery({
    queryKey: ['brands', 'list'],
    queryFn: async () => await fetchBrands().then(res => res.data),
    staleTime: Infinity
  })
}

/**
 * 
 * list HandBicked
 */
const fetchHandBicked = async () => {
  return await apiAxios.get(`/categories`)
}
const useHandBicked = () => {
  return useQuery({
    queryKey: ['HandBicked', 'list'],
    queryFn: async () => await fetchHandBicked().then(res => res.data),
    staleTime: Infinity
  })
}

export { useHandBicked, useBrands };



