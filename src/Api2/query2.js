import {useMutation, useQuery} from 'react-query';
import {apiAxios} from "./axsios2";
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

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUyLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsImVtYWlsIjoiemFpbi5uYXRvdXJAaG90bWFpbC5jb20iLCJqdGkiOiJlYjBiYmYwMy03NzQ1LTRkNGUtYmFlNC1mMzgxNTM4NzI0NTkiLCJpYXQiOjE2OTk4NzI4MzIsImV4cCI6MTY5OTk1OTIzMiwiaXNzIjoiYmFja2VuZC1maW5hbC0yIn0.eYeJX73Fk5cNbuPM3lYEK4CtM-GGaakbuCRrdy-SQwA"
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


