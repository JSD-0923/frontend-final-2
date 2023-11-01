import React from 'react'
import HeroSection from '../HeroSection/HeroSection'
import NewArrival from '../NewArrival/NewArrival'
import HandpickedCollections from '../HandpickedCollections/HandpickedCollections'
import Brands from '../Brands/Brands'
import FilterCards from '../FilterCards/FilterCards'
const LandingPageContainer = () => {
  return (
    <div>
      
      <HeroSection />
      <NewArrival />
      <HandpickedCollections />
      <Brands />
      <FilterCards />
    </div>
  )
}

export default LandingPageContainer
