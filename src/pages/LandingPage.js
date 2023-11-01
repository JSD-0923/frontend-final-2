import {Typography} from "@mui/material";
import LandingPageContainer from '../components/LandingPageContainer/LandingPageContainer'
const LandingPage = () => {

    return (
        <div>
            <Typography  variant='displayLarge' component={'h2'}>Landing Page</Typography>
            <LandingPageContainer />
        </div>
    )
}
export default LandingPage