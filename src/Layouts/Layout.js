import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import {Outlet} from "react-router-dom";
import {useState} from "react";


const Layout = () => {

    const [section, setSection] = useState("")

    return (
        <div >

            <Header/>
            <main style={{ width: '100%', maxWidth:'1440px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', margin: 'auto'}}>
            <Outlet context={{section: section, setSection:setSection}}/>
            </main>
            <Footer setSection={setSection}/>
        </div>
    )
}

export default Layout;