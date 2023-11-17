import {apiAxios} from "../Api2/axiosConfig";
import {useMutation, useQuery, useQueryClient} from "react-query";


let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUzLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImp0aSI6IjE5ODlmYTZhLTE0OGItNDJkOS04MzRkLTY4ZDY1ZjMzODk4NiIsImlhdCI6MTcwMDE2NDE4OCwiZXhwIjoxNzAwMzM2OTg4LCJpc3MiOiJiYWNrZW5kLWZpbmFsLTIifQ.77t5N80OEzGMDSGcFgBvshoYtIhU_1Oux4HW9IKSrY8"


// fetch one product
export const useProduct=(id)=>{
    return useQuery({
        queryKey:['product','get', id],
        queryFn:async()=> await apiAxios.get(`/products/${id}`).then(res=>res.data),
        staleTime: Infinity
    })
}

// Add Product to Cart

export const useAddToCart = (productId, quantity) => {

    return useMutation({
        mutationFn: async () => {
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
        },
        onSuccess: () => {
            console.log('added successfully');
        },
    });
};


// Remove Product from Cart

export const useRemoveFromCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (productId) => {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await apiAxios.post('/orders/remove-from-cart', { productId }, config);
                return response.data;
            } catch (error) {
                console.error('Error removing product from cart:', error);
                throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', 'get']);
        },
    });
};


// Fetch Reviews

export const useReviews = (id) => {
    return useQuery({
        queryKey: ['review', 'get', id],
        queryFn: async () => {
            try {
                const response = await apiAxios.get(`/reviews/${id}`);
                return response.data;
            } catch (error) {

                if (error.response && error.response.status === 404) {
                    return [];
                }

                throw error;
            }
        },

    });
};


// Fetch My Cart

export const useCart = () => {
    const fetchCart = async () => {
        try {
            const response = await apiAxios.get('/orders/cart', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 404) {
                return [];
            }
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ['cart', 'get'],
        queryFn: fetchCart,
        staleTime: Infinity
    });
};


// Fetch Address

export const useAddresses = () => {
    return useQuery({
        queryKey: ['addresses', 'get'],
        queryFn: async () => {
            try {
                const response = await apiAxios.get('/user-addresses', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });

                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        staleTime: Infinity
    });
};


// Add New Address
export const useAddAddress = () => {
    const queryClient = useQueryClient();

    return useMutation(async (data) => {
        try {
            console.log('Request Payload:', data);
            const response = await apiAxios.post(
                '/user-addresses',
                { ...data },
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
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries(['addresses', 'get']);
        },
        onError: (error) => {
            console.error('Error adding address:', error);
        },
    });
};


// Place Order

export const usePutOrder = () => {
    const queryClient = useQueryClient();

    const { mutateAsync, isLoading } = useMutation(
        () => apiAxios.put('/orders/place-order', null, {
            headers: {
                Authorization: `Bearer ${token}`,  // Make sure to define 'token' or pass it as an argument
            },
        }),
        {
            onSuccess: () => queryClient.invalidateQueries(['cart', 'get']),
        }
    );

    const placeOrder = async () => {
        try {
            return await mutateAsync();
        } catch (error) {
            console.error('Error placing order:', error);
            throw error;
        }
    };

    return { placeOrder, isLoading };
};




