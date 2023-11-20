import React, { forwardRef } from 'react'
import {Card, CardMedia, Grid, Typography} from "@mui/material";
import {ReactComponent as ArrowIcon} from "../../../assets/icons/arrow.svg";
import {useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import {
    BottomCard,
    DefaultStyleBox,
    DefaultTypographyH2,
    LifeStyleBox,
    LIFESTYLETypographyH2,
    LIFESTYLETypographyP
} from "./styels";



const FilteredSection = () => {
    
    const navigate = useNavigate()

    const handleAccessoriesCardClick = () => {
        navigate("/products?categoryId=4");
    };

    const handleSkincareCardClick = () => {
        navigate("/products?categoryId=3");
    };
console.log('hihi')
  return (

      <Grid  container spacing={2} sx={{marginTop: '1rem'}}>
          <Typography
              component={'h2'}
              variant={'h2'}
              sx={{marginLeft: '1rem'}}
          >
              Makeup & Skincare
          </Typography>
          <Grid item xs={12}  sx={{marginBottom: 2}}>
              <Card onClick={handleAccessoriesCardClick } sx={{ position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center',  borderRadius: '8px', }}  >
                  <CardMedia 
                      component="img"
                      image={require('../../../assets/images/filtterdSecton-1st-image.jpg')}
                      sx={{ height: '100%', width: 'cover' }}
                  />
                      <LifeStyleBox >
                          <LIFESTYLETypographyH2 component={'h2'}>
                              LIFESTYLE
                          </LIFESTYLETypographyH2>
                          <LIFESTYLETypographyP component={'p'} >
                              Makeup Accessories from Top Brands
                          </LIFESTYLETypographyP>
                      </LifeStyleBox>
              </Card>
          </Grid>
          <Grid item xs={6}>
              <BottomCard onClick={handleSkincareCardClick }>
                  <CardMedia
                      sx={{ height: '100%', width: 'cover' }}
                      component="img"
                      image={require('../../../assets/images/Group 139.png')}
                  />
                  <DefaultStyleBox>
                      <DefaultTypographyH2 component={"h2"} sx={{color: '#A53F64'}} dir="rtl">
                          Skincare Essentials
                      </DefaultTypographyH2>
                      <DefaultTypographyH2 component={"h2"} sx={{color: '#A53F64'}} dir="rtl">
                          <ArrowIcon />
                      </DefaultTypographyH2>
                  </DefaultStyleBox>
              </BottomCard>
          </Grid>
          <Grid item xs={6}>
              <BottomCard onClick={handleSkincareCardClick }> 
                  <CardMedia
                      sx={{ height: '100%', width: 'cover' }}
                      component="img"
                      image={require('../../../assets/images/skincare 1.jpg')}
                  />
                  <DefaultStyleBox>
                      <DefaultTypographyH2 component={"h2"} sx={{color: 'primary.main'}} dir="rtl">
                          Facepacks & Peels
                      </DefaultTypographyH2>
                      <DefaultTypographyH2 component={"h2"} sx={{color: 'primary.main'}} dir="rtl">
                          <ArrowIcon />
                      </DefaultTypographyH2>
                  </DefaultStyleBox>
              </BottomCard>
          </Grid>

      </Grid>
  )
}

export default FilteredSection