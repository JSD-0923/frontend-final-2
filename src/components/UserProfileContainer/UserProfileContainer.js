
import './UserProfileContainer.css'
import UserProfileMenu from "../UserProfileMenu/UserProfileMenu";
import PersonalInformation from "../PersonalInformation/PersonalInformation";
import ChangePasswordForm from "../ChangePasswordForm/ChangePasswordForm";
const UserProfileContainer = () => {

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

export default UserProfileContainer;