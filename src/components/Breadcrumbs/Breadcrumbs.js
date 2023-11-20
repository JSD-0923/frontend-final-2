
import {Link} from "react-router-dom";
import Typography from "@mui/material/Typography";
import React from "react";
import {ReactComponent as NavigateNextIcon} from "../../assets/icons/next-icon.svg";
import {Breadcrumbs} from "@mui/material";
const CustomBreadcrumbs = (props) => {

    const routerLinkStyle = {textDecoration: 'none', color: '#1B4B66', fontSize: '16px'}

    const {links, label} = props
return (
    <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb" sx={{display: 'flex', justifyContent: 'flex-start', alignSelf: 'flex-start',marginBottom: '1rem', marginTop: '24px'}}>
        {links.map(link =>
            {
                return (
                    <Link key={link.name} to={link.path} style={routerLinkStyle}>{link.name}</Link>
                )
            }
        )}
        <Typography variant={'body1'}  underline="none" color="TypeLowEmphasis.main">{label}</Typography>
    </Breadcrumbs>
)
}

export default CustomBreadcrumbs;