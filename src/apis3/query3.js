import {useMutation, useQuery} from 'react-query';
import {apiAxios} from "./axsios3";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUxLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsImVtYWlsIjoiemFpbi5uYXRvdXJAaG90bWFpbC5jb20iLCJqdGkiOiIwZmU4NTEwMC1mNDY5LTQ5NGQtYjUwOS1lMmMxYjljMGY0YjIiLCJpYXQiOjE2OTk5MTg3NTEsImV4cCI6MTcwMDAwNTE1MSwiaXNzIjoiYmFja2VuZC1maW5hbC0yIn0.xmuyE4A6TWJBehZJjB2iaL3gphZ_d-Wxr-2YeI-rfXU"

const fetchProduct = async(id)=>{
    return await apiAxios.get(`/products/${id}`)
}
const useProduct=(id)=>{
    return useQuery({
        queryKey:['product','get', id],
        queryFn:async()=>await fetchProduct(id).then(res=>res.data),
        staleTime: Infinity
    })
}
export {useProduct};

const fetchReviews = async(id)=>{
    return await apiAxios.get(`/reviews/${id}`)
}

export const useReviews=(id)=>{
    return useQuery({
        queryKey:['review','get', id],
        queryFn:async()=>await fetchReviews(id).then(res=>res.data),
        staleTime: Infinity
    })
}
const fetchCart = async () => {
    try {
        const response = await apiAxios.get('/orders/cart', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const useCart = () => {
    return useQuery({
        queryKey: ['cart', 'get'],
        queryFn: async () => {
            try {

                return await fetchCart();
            } catch (error) {
                throw error;
            }
        },
        staleTime: Infinity
    });
};


const addProductToCart = async (productId, quantity) => {
    try {
        const response = await apiAxios.post(
            '/orders/add-to-cart',
            { productId, quantity },
            {
                headers: {
                    Authorization: `Bearer ${token}`
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const useAddToCart = (productId, quantity) => {
    return useMutation(() => addProductToCart(productId, quantity), {
        onSuccess: () => {
            console.log('added successfully')
        },
    });
};