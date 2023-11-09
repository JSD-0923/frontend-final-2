import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { useState, useEffect } from 'react'
// import prodct from '../product'
import { Typography, Paper, Box, Grid, Container, IconButton } from '@mui/material'
const CategoryCards = () => {
  // const [image,setImage] = useState(null);
  // const loadImage = async()=>{
  //   try{
  //    let categoryImage = await import (`../../assets/images/base.png`)
  //   }
  // }

  
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
    },{
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
    },{
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
    },{
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

    // <Container maxWidth='xl'>
    // hon
      <Paper sx={{boxShadow:'none'}}>
        
      <Grid container spacing={3}>
        {product.map((productItem, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ProductCard productDetails={productItem} />
          </Grid>
        ))}
      </Grid>
      </Paper>
    //  nehaiet hon
    // </Container>
  )
}

export default CategoryCards
