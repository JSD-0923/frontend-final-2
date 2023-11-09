import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useState, useEffect } from 'react'
import { Typography, Paper, Box, Grid, Container, IconButton } from '@mui/material'
const CategoryCards = () => {
  const product = [
    {
      productName: "Grande",
      productDescription: "Blossom Pouch",
      productPrice: "$39.49",
    },
    {
      productName: "Coach",
      productDescription: "Leather Coach Bag",
      productPrice: "$54.69",
    },
    {
      productName: "Remus",
      productDescription: "Brown Strap Bag",
      productPrice: "$57",
    },
    {
      productName: "Boujee",
      productDescription: "Black Bag",
      productPrice: "$56.49",
    },


    {
      productName: "Grande",
      productDescription: "Blossom Pouch",
      productPrice: "$39.49",
    },
    {
      productName: "Coach",
      productDescription: "Leather Coach Bag",
      productPrice: "$54.69",
    },
    {
      productName: "Remus",
      productDescription: "Brown Strap Bag",
      productPrice: "$57",
    },
    {
      productName: "Boujee",
      productDescription: "Black Bag",
      productPrice: "$56.49",
    }, {
      productName: "Grande",
      productDescription: "Blossom Pouch",
      productPrice: "$39.49",
    },
    {
      productName: "Coach",
      productDescription: "Leather Coach Bag",
      productPrice: "$54.69",
    },
    {
      productName: "Remus",
      productDescription: "Brown Strap Bag",
      productPrice: "$57",
    },
    {
      productName: "Boujee",
      productDescription: "Black Bag",
      productPrice: "$56.49",
    }, {
      productName: "Grande",
      productDescription: "Blossom Pouch",
      productPrice: "$39.49",
    },
    {
      productName: "Coach",
      productDescription: "Leather Coach Bag",
      productPrice: "$54.69",
    },
    {
      productName: "Remus",
      productDescription: "Brown Strap Bag",
      productPrice: "$57",
      rating: 4,

    },
    {
      productName: "Boujee",
      productDescription: "Black Bag",
      productPrice: "$56.49",
      rating: 4,
    }, {
      productName: "Grande",
      productDescription: "Blossom Pouch",
      productPrice: "$39.49",
      rating: 4,
    },
    {
      productName: "Coach",
      productDescription: "Leather Coach Bag",
      productPrice: "$54.69",
      rating: 4,

    },
    {
      productName: "Remus",
      productDescription: "Brown Strap Bag",
      productPrice: "$57",
      rating: 4,
    },

    {
      productName: "Boujee",
      productDescription: "Black Bag",
      productPrice: "$56.49",
      rating: 3,
    },

  ]

  return (

    <Paper sx={{ boxShadow: 'none' }}>
      <Grid container spacing={3}>
        {product.map((productItem, index) => (
          <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
            <ProductCard
              title={productItem.productName}
              description={productItem.productDescription}
              image={require(`../../assets/images/pink-bag.png`)}
              rating={productItem.rating}
              width={285}
            />
          </Grid>
        ))}
      </Grid>
    </Paper>

  )
}

export default CategoryCards
