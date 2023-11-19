import React, {useState} from "react";
import {
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow, useMediaQuery,
} from "@mui/material";
import ProductCartCard from "./ProductCartCard/ProductCartCard";
import {useMoveToWishlist, useRemoveFromCart} from "../../../hooks/useAppAPIs";
import AlertStack from "../../../utils/AlertStack/AlertStack";
import CircularProgress from "@mui/material/CircularProgress";

const ProductCartList = (props) => {
    const { cartProducts, showTable=true } = props;

    const [successAlertVisible, setSuccessAlertVisible] = useState(false);
    const [errorAlertVisible, setErrorAlertVisible] = useState(false);
    const [warningAlertVisible, setWarningAlertVisible] = useState(false);
    const [message, setMessage] = useState('')
    const [loadingRemoveButtonId, setLoadingRemoveButtonId] = useState(null);
    const [loadingWishlistButtonId, setLoadingWishlistButtonId] = useState(null);

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');

    const RemoveFromCartMutation = useRemoveFromCart();
    const MoveProductToWishlist = useMoveToWishlist();
    const handelRemoveProduct = async (productId) => {
        try {
            setLoadingRemoveButtonId(productId);
            const response = await RemoveFromCartMutation.mutateAsync(productId);

            setMessage(response.message);
            setSuccessAlertVisible(true);

        } catch (error) {
            setMessage(error.message);
            setErrorAlertVisible(true);
        } finally {
            setLoadingRemoveButtonId(null);
        }
    };
    const handelMoveProductToWishlist = async (productId) => {
        try {
            setLoadingWishlistButtonId(productId);
            const response = await MoveProductToWishlist.mutateAsync(productId);

            setMessage(response.message);
            setSuccessAlertVisible(true);

        } catch (error) {
            setMessage(error.response.data.error);
            setErrorAlertVisible(true);
        } finally {
            setLoadingWishlistButtonId(null);
        }
    };

    const handleCloseAlert = () => {
        setSuccessAlertVisible(false);
        setErrorAlertVisible(false);
        setWarningAlertVisible(false);
    };

    return (
        <Paper elevation={0}>

            <Table aria-label="cart items list">
                {!isSmallScreen && showTable &&
                    <TableHead sx={{ borderBottom: '1px solid #0000001F' }}>
                        <TableRow sx={{ color: 'red' }}>
                            <TableCell>Product Name</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Qty</TableCell>
                            <TableCell align="right">Subtotal</TableCell>
                        </TableRow>
                    </TableHead>
                }

                <TableBody>
                    {cartProducts.map((product) => (
                        <React.Fragment key={product.id}>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" sx={{ padding: 0 }}>
                                    <ProductCartCard
                                        product={product}
                                    />

                                </TableCell>

                                {!isSmallScreen && showTable &&
                                <>
                                    <TableCell align="center" sx={{ margin: 0, verticalAlign: 'top' }}>
                                        ${product.discountedPrice > 0 ? product.discountedPrice.toFixed(2) : product.price.toFixed(2)}
                                    </TableCell>
                                    <TableCell align="center" sx={{margin: 0, verticalAlign: 'top' }}>
                                        {product.quantity}
                                    </TableCell>
                                    <TableCell align="center" sx={{ margin: 0, verticalAlign: 'top' }}>
                                        ${product.totalPrice.toFixed(2)}
                                    </TableCell>

                                </>
                                }

                            </TableRow>

                            {showTable &&
                                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                    <TableCell colSpan={4} align="right" sx={{ padding: 0, gap: '1rem' }}>
                                        <Button
                                            sx={{
                                                color: 'primary.main',
                                                borderBottom: '1px solid',
                                                paddingBottom: '2px',
                                                borderRadius: 0,
                                                marginRight: '1rem',
                                                right: '2rem',
                                                bottom: ['initial', 'initial', '4rem'],
                                            }}
                                            startIcon={
                                                loadingWishlistButtonId === product.id ? (
                                                    <CircularProgress size={'20px'} sx={{ color: 'primary.main' }} />
                                                ) : (
                                                    ''
                                                )
                                            }
                                            onClick={() => handelMoveProductToWishlist(product.id)}
                                        >
                                            Move to Wishlist
                                        </Button>
                                        <Button
                                            sx={{
                                                color: 'error.main',
                                                borderBottom: '1px solid',
                                                paddingBottom: '2px',
                                                borderRadius: 0,
                                                right: '2rem',
                                                bottom: ['initial', 'initial', '4rem'],
                                            }}
                                            startIcon={
                                                loadingRemoveButtonId === product.id ? (
                                                    <CircularProgress size={'20px'} sx={{ color: 'error.main' }} />
                                                ) : (
                                                    ''
                                                )
                                            }
                                            onClick={() => handelRemoveProduct(product.id)}
                                        >
                                            Remove
                                        </Button>
                                    </TableCell>

                                </TableRow>
                            }
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
            <AlertStack
                warningVisible={warningAlertVisible}
                successVisible={successAlertVisible}
                errorVisible={errorAlertVisible}
                onCloseAlert={handleCloseAlert}
                message={message}
            />
        </Paper>
    );
};

export default ProductCartList;
