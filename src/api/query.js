import { useQuery } from 'react-query';
import { apiAxios } from './axios';


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


export { useLandingProducts  };



