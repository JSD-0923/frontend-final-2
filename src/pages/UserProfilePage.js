import UserProfileMenu from "../components/UserProfilePageComponents/UserProfileMenu/UserProfileMenu";
import PersonalInformation from "../components/UserProfilePageComponents/PersonalInformation/PersonalInformation";
import ChangePasswordForm from "../components/UserProfilePageComponents/ChangePasswordForm/ChangePasswordForm";
import {ReactComponent as NavigateNextIcon} from "../assets/icons/next-icon.svg";
import Link from "@mui/material/Link";
import {Breadcrumbs} from "@mui/material";
import React from "react";


const UserProfilePage = () => {

    return (
        <div>
            <Breadcrumbs separator={<NavigateNextIcon />} aria-label="breadcrumb" sx={{display: 'flex', justifyContent: 'flex-start', alignSelf: 'flex-start', marginLeft: '20px',marginBottom: '1rem', marginTop: '24px'}}>
                <Link href={'/'}  underline="none" variant="body1" >Home</Link>
                <Link variant={'body1'}  underline="none" color="TypeLowEmphasis.main">User Profile</Link>
            </Breadcrumbs>
            <h3>This is Personal Information Title</h3>
            <h3>logout button</h3>
            <UserProfileMenu/>
            <PersonalInformation />
            <ChangePasswordForm />
            <h3>Save changes button</h3>
        </div>
    )
}

export default UserProfilePage;