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

const ProductCartList = (props) => {
    const { cartProducts } = props;

    const isSmallScreen = useMediaQuery('(min-width:320px) and (max-width: 599px)');

    return (
        <Paper elevation={0}>
            <Table aria-label="cart items list">
                {!isSmallScreen &&
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
                        <React.Fragment key={product.title}>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row" sx={{ padding: 0 }}>
                                    <ProductCartCard
                                        product={product}
                                    />

                                </TableCell>

                                {!isSmallScreen &&
                                <>
                                    <TableCell align="center" sx={{ margin: 0, verticalAlign: 'top' }}>
                                        ${product.discountRate > 0 ? product.price * product.discountRate : product.price}
                                    </TableCell>
                                    <TableCell align="center" sx={{margin: 0, verticalAlign: 'top' }}>
                                        {product.qty}
                                    </TableCell>
                                    <TableCell align="center" sx={{ margin: 0, verticalAlign: 'top' }}>
                                        ${product.discountRate > 0 ? product.price * product.discountRate * product.qty : product.price * product.qty}
                                    </TableCell>

                                </>
                                }

                            </TableRow>

                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell colSpan={4} align="right" sx={{ padding: 0 }}>
                                    <Button
                                        sx={{ color: 'error.main', borderBottom: '1px solid', paddingBottom: '2px', borderRadius: 0, right:'2rem', bottom: ['initial', 'initial', '4rem'], }}
                                    onClick={()=> console.log(product.title)}
                                    >
                                        Remove
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </React.Fragment>
                    ))}
                </TableBody>
            </Table>
        </Paper>
    );
};

export default ProductCartList;
