import {apiAxios} from "../Api2/axiosConfig";
import {useMutation, useQuery, useQueryClient} from "react-query";
import {getToken} from "../utils/getToken";
import {useNavigate} from "react-router-dom";


const token = getToken();

//fetch products
const fetchProducts = async (filter) => {

    return await apiAxios.get(`/products/filter${filter}
    `).then(res => res.data)
  }
  export const useProducts = (filter) => {
    return useQuery({
      queryKey: ['products', 'list',filter],
      queryFn:  () =>  fetchProducts(filter),
      staleTime: Infinity
    })
  }


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
// const token = getToken()
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

// Add Product to Whishlist

export const useAddToWishlist = (productId) => {

    return useMutation({
        mutationFn: async () => {
            try {
                const response = await apiAxios.post(
                    '/wishlists',
                    { productId },
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

    return useMutation({
        mutationFn: async () => {
            try {
                const response = await apiAxios.put('/orders/place-order', null, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
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
            return null; // No need to fetch user data if there's no token
        }

        const headers = {
            Authorization: `Bearer ${user_token}`,
        };

        try {
            const response = await apiAxios.get('/users/me', { headers });
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
                const response = await apiAxios.get('/wishlists', {
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
}

// movie product to wishlist

export const useMoveToWishlist = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async (productId) => {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await apiAxios.post('/orders/move-to-wishlist', { productId }, config);
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
    const navigate= useNavigate()
    return useMutation(

        async () => {
            const token = getToken();

            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            try {
                const response = await apiAxios.post('/users/logout', null, config);
                return response.data;
            } catch (error) {
                throw error;
            }
        },
        {
            onSuccess: () => {
             navigate('/')
            },
        }
    );
};


