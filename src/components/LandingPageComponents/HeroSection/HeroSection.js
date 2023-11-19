import React from 'react'
import Carousel from 'react-material-ui-carousel'
import HeroItem from './HeroItem/HeroItem'
import { Items } from '../../data'
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

    <Carousel maxWidth='xl' sx={{ borderRadius: "10px", margin: '1rem', width: '100%' }} {...settings}>
      {
        Items.map((item, i) => <HeroItem key={i} item={item} />)
      }
    </Carousel>

  )
}

export default HeroSection
