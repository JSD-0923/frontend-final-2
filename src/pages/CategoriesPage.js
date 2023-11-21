import React, { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList/ProductsList';
import imghero from '../assets/images/black-friday.png';
import { StyledTitle } from "../themes/StyledPageTitle";
import { Pagination, Box, Container, Button, CircularProgress } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useAppAPIs';
import createPages from "../utils/createPages";
const CategoriesPage = () => {
  const [page, setPage] = React.useState(1);
  const [pageContent, setPageContent] = useState(null);
  const [pages, setPages] = useState(null);
  const location = useLocation();
  const queryString = location.search;

  const { error, data: products, isLoading } = useProducts(queryString);
  useEffect(() => {
    if (products && !isLoading) {
      const calculatedPages = createPages(products.products, 20);
      setPages(calculatedPages);
      setPageContent(calculatedPages[0]);
    }
  }, [products, isLoading]);
  if (isLoading) {
    return (
      <div>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
          <CircularProgress />
        </Box>
      </div>
    );
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  if (!products || !pageContent || !pages) {
    return null;
  }
  const handleChange = (event, value) => {
    setPage(value);
    setPageContent(pages[value - 1]);
  };

  const handleNext=()=>{
    setPage(page+1)
    setPageContent(pages[page])
  }
  return (
    <Container maxWidth='xl'>
      <img alt={'pic'} src={imghero} width='100%' />
      <StyledTitle variant="h2" component={'h1'}>
        Handbags
      </StyledTitle>
      <ProductsList products={pageContent} />
      <Box sx={{ display: 'flex', justifyContent: 'center', my: 4, gap: '20px' }}>
        <Box sx={{ height: '36px', bgcolor: 'grey.main', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }} px={2}>
          <Pagination count={pages.length} page={page} onChange={handleChange} shape="rounded" color="primary" hidePrevButton hideNextButton />
        </Box>
        <Button onClick={handleNext} variant="contained" sx={{ color: 'TypeLowEmphasis.main', bgcolor: 'grey.main', height: '36px', width: '67px' }}>Next</Button>
      </Box>
    </Container>
  );
};
export default CategoriesPage;