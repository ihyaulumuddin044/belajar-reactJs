import AuntLayot from "../Layouts/AuntLayout";
import FormLogin from "../Fregments/FomLogin";
// import { Link } from "react-router-dom";

const LoginPage = () => {
    return (
        <AuntLayot title="Login" type="login">
            <FormLogin />
            
        </AuntLayot>
    )
};

export default LoginPage;