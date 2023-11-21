import HeroSection from '../components/LandingPageComponents/HeroSection/HeroSection'
import NewArrival from '../components/LandingPageComponents/NewArrival/NewArrival'
import HandpickedCollections from '../components/LandingPageComponents/HandpickedCollections/HandpickedCollections'
import ShopByBrands from '../components/LandingPageComponents/ShopByBrands/ShopByBrands'
import FilteredSection from '../components/LandingPageComponents/FilteredSection/FilteredSection'
import Box from "@mui/material/Box";
const HomePage = () => {

    return (
        <div style={{display:"flex", flexDirection:'column', justifyContent: 'center'}}>
            <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '2rem'}} >
                <HeroSection />
                <NewArrival />
            </Box>
            <HandpickedCollections />
            <ShopByBrands />
            <FilteredSection />
        </div>
    )
}
export default HomePage