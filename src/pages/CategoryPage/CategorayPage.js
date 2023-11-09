import React from 'react'
import './CategoryPage.css'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import imghero from '../../assetsnoura/images/hero.png'
import { Typography,Stack, Pagination, Paper, Box, Grid, Container, IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
      <img src={imghero} width='100%' />

      <Box sx={{ display: 'flex', gap: '8px', mt: '30px', mb: '10px' }}>
        <Typography variant="p" component={'p'}
          sx={{
            color: 'primary.main',
            fontWeight: '500',
            fontSize: '16px'

          }}>
          Home
        </Typography>
        <ArrowForwardIosIcon sx={{ fontSize: '10px', color: 'TypeHighEmphasis.main', pt: '3px' }} />

        <Typography variant="p" component={'p'}
          sx={{
            color: 'TypeLowEmphasis.main',
            fontWeight: '500',
            fontSize: '16px'
          }}>
          Handbags
        </Typography>
      </Box>

      <StyledTitle variant="h1" component={'h1'} >
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
          sx={{
            '& .Mui-selected': {
              backgroundColor: 'primary.main',
              color: 'bright.main'
            },

          }}
        />
        </Stack>
      </Box>
    </Container>
  )
}

export default CategorayPage
