import HeroSection from '../../components/HeroSection/HeroSection'
import NewArrival from '../../components/NewArrival/NewArrival'
import HandpickedCollections from '../../components/HandpickedCollections/HandpickedCollections'
import ShopByBrands from '../../components/ShopByBrands/ShopByBrands'
import FilteredSection from '../../components/FilteredSection/FilteredSection'

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