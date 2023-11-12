import React from 'react'
import CategoryCards from '../components/CategoriesPageComponents/CategoryCards/CategoryCards'
import imghero from '../assets/images/black-friday.png'

import {  Stack, Pagination, Box, Container, Button } from '@mui/material'
import {StyledTitle} from "../themes/StyledPageTitle";




const CategoriesPage = () => {

  return (

    <Container maxWidth='xl' >
      <img alt={'pic'} src={imghero} width='100%' />



      <StyledTitle variant="h2" component={'h1'} >
        Handbags
      </StyledTitle>
      <CategoryCards />
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4 }}>
        <Stack direction="row" spacing={2}>
          <Box sx={{ height: '36px', bgcolor: 'grey.main', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }} px={2}>
            <Pagination count={10} shape="rounded" color="primary" hidePrevButton hideNextButton 
            />
          </Box>
          <Button variant="contained" sx={{ color: 'TypeLowEmphasis.main', bgcolor: 'grey.main', height: '36px', width: '67px' }}>Next</Button>
        </Stack>
      </Box>

    </Container>
  )
}

export default CategoriesPage
