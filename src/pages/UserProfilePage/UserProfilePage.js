import './UserProfilePage.css'
import UserProfileMenu from "../../components/UserProfileMenu/UserProfileMenu";
import PersonalInformation from "../../components/PersonalInformation/PersonalInformation";
import ChangePasswordForm from "../../components/ChangePasswordForm/ChangePasswordForm";


const UserProfilePage = () => {

    return (
        <div>
            <h3>this is breadcrumbs Component</h3>
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