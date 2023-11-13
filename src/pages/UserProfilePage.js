import UserProfileMenu from "../components/UserProfilePageComponents/UserProfileMenu/UserProfileMenu";
import PersonalInformation from "../components/UserProfilePageComponents/PersonalInformation/PersonalInformation";
import ChangePasswordForm from "../components/UserProfilePageComponents/ChangePasswordForm/ChangePasswordForm";


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