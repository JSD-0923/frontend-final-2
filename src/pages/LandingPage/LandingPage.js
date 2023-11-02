import { Typography } from "@mui/material";
import HeroSection from '../../components/HeroSection/HeroSection'
import NewArrival from '../../components/NewArrival/NewArrival'
import HandpickedCollections from '../../components/HandpickedCollections/HandpickedCollections'
import Brands from '../../components/Brands/Brands'
import FilterCards from '../../components/FilterCards/FilterCards'

const LandingPage = () => {

    return (
        <div>
            <Typography variant='displayLarge' component={'h2'}>Landing Page</Typography>
            <HeroSection />
            <NewArrival />
            <HandpickedCollections />
            <Brands />
            <FilterCards />
        </div>
    )
}
export default LandingPage