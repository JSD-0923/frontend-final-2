import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";
import {Container} from "@mui/material";


const Layout = () => {

    return (
        <div>
            
           <Container disableGutters>
               <Header/>
               <Outlet />
               <Footer/>
           </Container>
            
        </div>
    )
}

export default Layout;