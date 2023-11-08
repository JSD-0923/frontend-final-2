import { Typography} from "@mui/material";
import HeroSection from '../../components/HeroSection/HeroSection'
import NewArrival from '../../components/NewArrival/NewArrival'
import HandpickedCollections from '../../components/HandpickedCollections/HandpickedCollections'
import ShopByBrands from '../../components/ShopByBrands/ShopByBrands'
import FilteredSection from '../../components/FilteredSection/FilteredSection'

const LandingPage = () => {

    return (
        <div>
            <Typography variant='displayLarge' component={'h2'}>Landing Page</Typography>
            <HeroSection />
            <NewArrival />
            <HandpickedCollections />
            <ShopByBrands />
            <FilteredSection />
        </div>
    )
}
export default LandingPage