import React from 'react'
import './CategoryPage.css'
import CategoryCards from '../../components/CategoryCards/CategoryCards'
import imghero from '../../assetsnoura/images/hero.png'
import { Typography, Paper, Box, Grid, Container, IconButton } from '@mui/material'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { styled } from '@mui/system';
import usePagination from '@mui/material/usePagination';

const List = styled('ul')({
  listStyle: 'none',
  padding: '5px',
  margin: '5px',
  display: 'flex',
});

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
  const { items } = usePagination({
    count: 10,
  });
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
      <nav>
        <List >
          {items.map(({ page, type, selected, ...item }, index) => {
            let children = null;

            if (type === 'start-ellipsis' || type === 'end-ellipsis') {
              children = '…';
            } else if (type === 'page') {
              children = (
                <button
                  type="button"
                  style={{
                    fontWeight: selected ? 'bold' : undefined,
                  }}
                  {...item}
                >
                  {page}
                </button>
              );
            } else {
              children = (
                <button type="button" {...item}>
                  {type}
                </button>
              );
            }

            return <li key={index}>{children}</li>;
          })}
        </List>
      </nav>
    </Container>
  )
}

export default CategorayPage
