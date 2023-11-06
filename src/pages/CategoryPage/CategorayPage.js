import React from 'react'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import PaginationButtons from '../../components/PaginationButtons/PaginationButtons'
import CategoryPath from '../../components/CategoryPath/CategoryPath'
import imghero from '../../assets/images/hero.png'
import { Typography, Paper, Box, Grid, Container, IconButton } from '@mui/material'


const CategorayPage = () => {
  return (
   
      <Container maxWidth='xl' >
      <img src={imghero} width='100%'/>
      <p>Bags</p>
      <CategoryCards />
      </Container>
      
  
  )
}

export default CategorayPage
