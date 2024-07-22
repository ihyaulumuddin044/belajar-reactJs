import { useLogin } from "../Hooks/UseLogin";
const ProfilePage = () => {
    const Username = useLogin();
    return (
        <div>
            <h1>Profile</h1>
            Username = {Username}
        </div>
    );
};

export default ProfilePage;