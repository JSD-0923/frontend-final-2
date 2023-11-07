import React from 'react'
import Carousel from 'react-material-ui-carousel'
import FeatureCard from '../FeatureCard/FeatureCard'
import HeroItem from '../HeroItem/HeroItem'
import {heroItems } from '../data'
import { Container } from '@mui/material'


const HeroSection = () => {
    const settings = {
        
        indicatorIconButtonProps: {
          style: {
            display: "none",
          },
        },
      };
       return (
        <Container maxWidth='xl'>
        <Carousel sx={{borderRadius: "10px"}} {...settings}>
            {
                heroItems.map( (item, i) => <HeroItem key={i} item={item} /> )
            }
        </Carousel>
        </Container>
    )
    
}

export default HeroSection
