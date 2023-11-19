import HeroSection from '../components/LandingPageComponents/HeroSection/HeroSection'
import NewArrival from '../components/LandingPageComponents/NewArrival/NewArrival'
import HandpickedCollections from '../components/LandingPageComponents/HandpickedCollections/HandpickedCollections'
import ShopByBrands from '../components/LandingPageComponents/ShopByBrands/ShopByBrands'
import FilteredSection from '../components/LandingPageComponents/FilteredSection/FilteredSection'
const LandingPage = () => {

    return (
        <>
            <HeroSection />
            <NewArrival />
            <HandpickedCollections />
            <ShopByBrands />
            <FilteredSection />
        </>
    )
}
export default LandingPage