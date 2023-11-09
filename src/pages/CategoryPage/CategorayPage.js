import React from 'react'
import './CategoryPage.css'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import imghero from '../../assets/images/black-friday.png'
import { Typography,Stack, Pagination, Box, Container } from '@mui/material'
import { styled } from '@mui/system';

const StyledTitle = styled(Typography)(({ theme }) => ({
  fontSize: '34px',
  color: theme.palette.primary.main,
  marginBottom: '30px',

  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
    marginBottom: '10px',
  },
}));

const CategorayPage = () => {

  return (

    <Container maxWidth='xl' >
      <img alt={'pic'} src={imghero} width='100%' />


      <StyledTitle variant="body1" component={'h1'} >
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

export default CategorayPage
