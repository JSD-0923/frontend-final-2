import React, {useEffect, useState} from 'react'
import ProductsList from '../components/ProductsList/ProductsList'
import imghero from '../assets/images/black-friday.png'
import { StyledTitle } from "../themes/StyledPageTitle";
import {Pagination, Box, Container, Button, CircularProgress, Breadcrumbs} from '@mui/material'
import { useLocation } from 'react-router-dom';
import { useProducts } from '../hooks/useAppAPIs';
import {getQueryValue} from "../utils/getQueryValue";
import Link from "@mui/material/Link";
import {ReactComponent as NavigateNextIcon} from "../assets/icons/next-icon.svg";

const CategoriesPage = () => {

    const [title, setTitle] = useState()
  const location = useLocation();
  const queryString = location.search;
    console.log(queryString)

const { error ,data: products, isLoading } = useProducts(queryString);

    useEffect(() => {
        setTitle(getQueryValue(queryString))
    },[])

  if(isLoading)
  {
      return (
          <div >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                  <CircularProgress />
              </Box>
          </div>
      )
  }
  if(error)
  {
    return <h1>{error}</h1>
  }
  return (

    <Container disableGutters maxWidth='xl' >
      <img alt={'pic'} src={imghero} width='100%' />
        <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb" sx={{display: 'flex', justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: '20px',marginBottom: '1rem', marginTop: '24px'}}>
            <Link href={'/'}  underline="none" variant="body1" >Home</Link>
            <Link variant={'body1'}  underline="none" color="TypeLowEmphasis.main">{title}</Link>
        </Breadcrumbs>
      <StyledTitle variant="h2" component={'h1'} >
          {title}
      </StyledTitle>
      <ProductsList products={products.products}/>
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
