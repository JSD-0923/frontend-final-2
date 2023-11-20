import React, { useState } from 'react'
import CategoryCards from '../components/CategoriesPageComponents/CategoryCards/CategoryCards'
import imghero from '../assets/images/black-friday.png'
import { StyledTitle } from "../themes/StyledPageTitle";
import { Typography, Pagination, Box, Container, Button } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useAppAPIs';
 import {  useNavigate } from 'react-router-dom';

const CategoriesPage = () => {
  const location = useLocation();
  const queryString = location.search;
  console.log(queryString)
const { error ,data: products, isLoading, isError } = useProducts(queryString);
  if(isLoading)
  {
    return <h1>isLoading</h1>
  }
  if(error)
  {
    return <h1>{error}</h1>
  }
  return (

    <Container maxWidth='xl' >
      <img alt={'pic'} src={imghero} width='100%' />

      <StyledTitle variant="h2" component={'h1'} >
        Handbags
      </StyledTitle>
      <CategoryCards products={products}/>
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4, gap: '20px' }}>
        <Box sx={{ height: '36px', bgcolor: 'grey.main', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }} px={2}>
          <Pagination count={10} shape="rounded" color="primary" hidePrevButton hideNextButton
          />
        </Box>
        <Button variant="contained" sx={{ color: 'TypeLowEmphasis.main', bgcolor: 'grey.main', height: '36px', width: '67px' }}>Next</Button>
      </Box>

    </Container>
  )
}

export default CategoriesPage
