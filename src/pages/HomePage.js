import HeroSection from '../components/LandingPageComponents/HeroSection/HeroSection'
import NewArrival from '../components/LandingPageComponents/NewArrival/NewArrival'
import HandpickedCollections from '../components/LandingPageComponents/HandpickedCollections/HandpickedCollections'
import ShopByBrands from '../components/LandingPageComponents/ShopByBrands/ShopByBrands'
import FilteredSection from '../components/LandingPageComponents/FilteredSection/FilteredSection'
import Box from "@mui/material/Box";
import {useOutletContext} from "react-router-dom";
import {useEffect, useRef} from "react";
const HomePage = () => {

    const { section } = useOutletContext();

    const featuredSection = useRef(null);
    const trendySection = useRef(null);
    const brandsSection = useRef(null);



    useEffect(() => {
        switch (section) {
            case "Featured":
                featuredSection.current?.scrollIntoView({
                    behavior: "smooth",

                });
                break;
            case "Trendy":
                trendySection.current?.scrollIntoView({
                    behavior: "smooth",

                });
                break;
            case "Brands":
                brandsSection.current?.scrollIntoView({
                    behavior: "smooth",

                });
                break;
            default:
                break;
        }
    }, [section]);


    return (
        <div style={{display:"flex", flexDirection:'column', justifyContent: 'center'}}>
            <Box style={{ width: '100%', display: 'flex', flexDirection: 'column', marginBottom: '2rem'}} >
                <HeroSection />
                <NewArrival />
            </Box>
            <HandpickedCollections innerRef={featuredSection}/>
            <ShopByBrands innerRef={brandsSection}/>
            <FilteredSection innerRef={trendySection}/>
        </div>
    )
}
export default HomePage