import React from 'react'
import CategoryCards from '../components/CategoriesPageComponents/CategoryCards/CategoryCards'
import imghero from '../assets/images/black-friday.png'
import {Stack, Pagination, Box, Container } from '@mui/material'
import {StyledTitle} from "../themes/StyledPageTitle";



const CategoriesPage = () => {

  return (

    <Container maxWidth='xl' >
      <img alt={'pic'} src={imghero} width='100%' />


      <StyledTitle variant="h2" component={'h1'} >
        Handbags
      </StyledTitle>
      <CategoryCards />

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"

      >
        <Stack spacing={2}>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          defaultPage={1}
          space='0'
          sx={{marginTop: '1rem',
            '& .Mui-selected': {
              backgroundColor: 'primary.main',
              color: 'bright.main',
            },

          }}
        />
        </Stack>
      </Box>
    </Container>
  )
}

export default CategoriesPage
