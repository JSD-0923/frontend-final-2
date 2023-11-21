import React, { useEffect, useState } from 'react';
import ProductsList from '../components/ProductsList/ProductsList';
import imghero from '../assets/images/black-friday.png';
import { StyledTitle } from "../themes/StyledPageTitle";

import { Pagination, Box, Container, Button, CircularProgress } from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useAppAPIs';
import { getQueryValue } from "../utils/getQueryValue";
import CustomBreadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import createPages from "../utils/createPages";
import Typography from "@mui/material/Typography";

const ProductsPage = () => {
    const [page, setPage] = React.useState(1);
    const [pageContent, setPageContent] = useState(null);
    const [pages, setPages] = useState(null);
    const [title, setTitle] = useState()

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

    useEffect(() => {
        setTitle(getQueryValue(queryString))
    }, [queryString])

    const links = [
        {
            name: 'Home',
            path: '/'
        }
    ]

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

    if (!products || !pages) {
        return null;
    }

    const handleChange = (event, value) => {
        setPage(value);
        setPageContent(pages[value - 1]);
    };

    const handleNext = () => {
        setPage(page + 1)
        setPageContent(pages[page])
    }

    return (
        <Container sx={{marginTop: '2rem', display: 'flex', flexDirection: 'column'}} maxWidth='1780px'>
            <img alt={'pic'} src={imghero} width='100%' />
            <CustomBreadcrumbs links={links} label={title} />
            {title && (
                <StyledTitle variant="h2" component={'h1'} >
                    {title}
                </StyledTitle>
            )}
            {products.products.length > 0 ? <ProductsList products={pageContent} /> : <Typography variant={'h3'} component={'h2'}>No Products Found :(</Typography>}
            <Box sx={{ display: 'flex', justifyContent: 'center', my: 4, gap: '20px' }}>
                <Box sx={{ height: '36px', bgcolor: 'grey.main', borderRadius: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }} px={2}>
                    <Pagination count={pages.length} page={page} onChange={handleChange} shape="rounded" color="primary" hidePrevButton hideNextButton />
                </Box>
                {pageContent.length ===20 &&<Button onClick={handleNext} variant="contained" sx={{ color: 'TypeLowEmphasis.main', bgcolor: 'grey.main', height: '36px', width: '67px' }}>Next</Button>
                }
            </Box>
        </Container>
    );
};
export default ProductsPage;
