import {useMutation, useQuery, useQueryClient} from 'react-query';
import {apiAxios} from "./axsios3";

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUzLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImp0aSI6IjhhOTBjMDFmLWE4ZGQtNGY3YS05NWIzLTRlNTI3ZjIwOGE2NSIsImlhdCI6MTcwMDA1ODYwNiwiZXhwIjoxNzAwMjMxNDA2LCJpc3MiOiJiYWNrZW5kLWZpbmFsLTIifQ.exNlz0rBEDZk8Uu0w0S3GAKFgoA8RfH0iwqklMpvCcU"

// let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjUzLCJuYW1lIjoidW5kZWZpbmVkIHVuZGVmaW5lZCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImp0aSI6IjhhOTBjMDFmLWE4ZGQtNGY3YS05NWIzLTRlNTI3ZjIwOGE2NSIsImlhdCI6MTcwMDA1ODYwNiwiZXhwIjoxNzAwMjMxNDA2LCJpc3MiOiJiYWNrZW5kLWZpbmFsLTIifQ.exNlz0rBEDZk8Uu0w0S3GAKFgoA8RfH0iwqklMpvCcU"

//fetch Product
const fetchProduct = async(id)=>{
    return await apiAxios.get(`/products/${id}`)
}
export const useProduct=(id)=>{
    return useQuery({
        queryKey:['product','get', id],
        queryFn:async()=>await fetchProduct(id).then(res=>res.data),
        staleTime: Infinity
    })
}


//fetch Reviews
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

// fetch Cart
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


// Add Product to cart
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


//remove product from cart:

const removeFromCart = async (productId) => {
    try {
        const response = await apiAxios.post('/orders/remove-from-cart', { productId }, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};

export const useRemoveFromCart = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation((productId) => removeFromCart(productId), {
        onSuccess: () => {
            // Invalidate and refetch the 'cart' query after removing a product from the cart
            queryClient.invalidateQueries(['cart', 'get']);
        },
    });

    const removeProductFromCart = async (productId) => {
        try {
            return await mutation.mutateAsync(productId);
        } catch (error) {
            console.error('Error removing product from cart:', error);
            throw error;
        }
    };

    return { removeProductFromCart, isLoading: mutation.isLoading };
};


//fetch user addresses

const fetchAddresses = async () => {
    try {
        const response = await apiAxios.get('/user-addresses', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(error)
    }
}

export const useAddresses = () => {
    return useQuery({
        queryKey: ['addresses', 'get'],
        queryFn: async () => {
            try {

                return await fetchAddresses();
            } catch (error) {
                throw error;
            }
        },
        staleTime: Infinity
    });
};


// Add new address

const addAddress = async (data) => {
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
};

export const useAddAddress = (data) => {
    const queryClient = useQueryClient();

    return useMutation(() => addAddress(data), {
        onSuccess: () => {

            queryClient.invalidateQueries(['addresses', 'get']);
        },
        onError: (error) => {
            console.error('Error adding address:', error);

        },
    });
};


// Update order status

const putOrder = async () => {
    try {
        const response = await apiAxios.put('/orders/place-order', null, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
};


export const usePutOrder = () => {
    const queryClient = useQueryClient();

    const mutation = useMutation(() => putOrder(), {
        onSuccess: () => {
            // Invalidate and refetch the 'cart' query after placing an order
            queryClient.invalidateQueries(['cart', 'get']);
        },
    });

    const placeOrder = async () => {
        try {
            return await mutation.mutateAsync();
        } catch (error) {
            console.error('Error placing order:', error);
            throw error;
        }
    };

    return { placeOrder, isLoading: mutation.isLoading };
};