import React from "react";
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
import { useRemoveFromCart} from "../../../hooks/useAppAPIs";

const ProductCartList = (props) => {
    const { cartProducts, showTable=true } = props;

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');

    const RemoveFromCartMutation = useRemoveFromCart();

    const handelRemoveProduct = async (productId) => {
        try {
            const response = await RemoveFromCartMutation.mutateAsync(productId);
            // console.log(response)
            // setSuccessAlertVisible(true);
        } catch (error) {
            // setErrorAlertVisible(true);
        }
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
                                    <TableCell colSpan={4} align="right" sx={{ padding: 0 }}>
                                        <Button
                                            sx={{ color: 'error.main', borderBottom: '1px solid', paddingBottom: '2px', borderRadius: 0, right:'2rem', bottom: ['initial', 'initial', '4rem'], }}
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
        </Paper>
    );
};

export default ProductCartList;
