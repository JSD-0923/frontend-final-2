import {apiAxios} from "../Api2/axiosConfig";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getToken} from "../utils/getToken";
import {useNavigate} from "react-router-dom";


//fetch products
const fetchProducts = async (filter) => {

    return await apiAxios.get(`/products/filter${filter}
    `).then(res => res.data)
  }
export const useProducts = (filter) => {
    return useQuery({
        queryKey: ['products', 'list', filter],
        queryFn: () => fetchProducts(filter),
        staleTime: Infinity
    });
};


// fetch one product
export const useProduct = (id) => {
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
                const response = await apiAxios.post('/orders/add-to-cart', { productId, quantity });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        onSuccess: () => {

        },
    });
};



// Remove Product from Cart

export const useRemoveFromCart = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (productId) => {
            try {
                const response = await apiAxios.post('/orders/remove-from-cart', { productId });
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


// Add Product to Whishlist

export const useAddToWishlist = (productId) => {
    return useMutation({
        mutationFn: async () => {
            try {
                const response = await apiAxios.post('/wishlists', { productId });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
    });
};


// Fetch Reviews

export const useReviews = (id) => {
    return useQuery({
        queryKey: ['review', 'list', id],
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
            const response = await apiAxios.get('/orders/cart');
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
                const response = await apiAxios.get('/user-addresses');
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
            const response = await apiAxios.post('/user-addresses', { ...data });
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
    return useMutation({
        mutationFn: async () => {
            try {
                const response = await apiAxios.put('/orders/place-order');
                return response.data;
            } catch (error) {
                throw error;
            }
        },
    });
};



// Fetch user

const signIn = async (credentials) => {
    try {
        const response = await apiAxios.post('/users/login', credentials);
        return response.data;
    } catch (error) {
        throw new Error('Invalid credentials');
    }
};

export const useSignInUser = () => {
    return useMutation(signIn);
};

const signUp = async (userData) => {
    const defaultUserData = {
        ...userData,
        mobileNumber: "0000000000",
        birthDate: "2000-01-01"
    };
    try {
        const response = await apiAxios.post('/users/signup', defaultUserData);
        return response.data;
    } catch (error) {
        throw new Error(error);
    }
};

export const useSignUp = () => {
    return useMutation(signUp);
};

export const useUser = () => {
    const user_token = getToken();

    const getUserInfo = async () => {
        if (!user_token) {
            return null;
        }

        try {
            const response = await apiAxios.get('/users/me');
            return response.data;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                return null;
            }

            console.error('Error fetching user data:', error);
            throw error;
        }
    };

    const { data: userData, isLoading, isError, refetch: refetchUser } = useQuery(['user', 'me'], getUserInfo);

    return { userData, isLoading, isError, refetchUser };
};



// fetch wishlists products

export const useWishlist = () => {
    return useQuery({
        queryKey: ['wishlist', 'get'],
        queryFn: async () => {
            try {
                const response = await apiAxios.get('/wishlists');
                return response.data;
            } catch (error) {
                console.error(error);
                throw error;
            }
        },
        staleTime: Infinity
    });
};


// movie product to wishlist

export const useMoveToWishlist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (productId) => {
            try {
                const response = await apiAxios.post('/orders/move-to-wishlist', { productId });
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



// Logout
export const useLogout = () => {
    const navigate = useNavigate();
    return useMutation(
        async () => {
            try {
                const response = await apiAxios.post('/users/logout', null);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        {
            onSuccess: () => {
                navigate('/');
            },
        }
    );
};



// add user address to the order
export const useUpdateOrderInfo = () => {
    return useMutation({
        mutationFn: async ({ orderId, addressId }) => {
            console.log('orderId', orderId);
            console.log('addressId', addressId);
            try {
                const response = await apiAxios.put(`/orders/${orderId}/address`, { addressId });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
    });
};



// update order payment(complete order).
export const useUpdateOrderPayment = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ orderId, paymentMethod }) => {
            try {
                const response = await apiAxios.put(`/orders/${orderId}/payment`, { paymentMethod });
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['cart', 'get']);
            console.log('Order placed successfully');
        },
    });
};






