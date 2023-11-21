import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";


const Layout = () => {

    return (
        <div >

            <Header/>
            <main style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
            <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default Layout;