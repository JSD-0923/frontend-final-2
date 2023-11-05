import React from 'react'
import Carousel from 'react-material-ui-carousel'
import FeatureCard from '../FeatureCard/FeatureCard'
import HeroItem from '../HeroItem/HeroItem'
import {heroItems } from '../data'
const HeroSection = () => {
  
       return (
        <Carousel>
            {
                heroItems.map( (item, i) => <HeroItem key={i} item={item} /> )
            }
        </Carousel>
    )
    
}

export default HeroSection
