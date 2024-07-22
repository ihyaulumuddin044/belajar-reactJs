import AuntLayot from "../Layouts/AuntLayout";
import FormRegister from "../Fregments/RegisterUser";
// import { Link } from "react-router-dom";
const RegisterPage = () => {
    return (
        <AuntLayot title="Register" type="register">
            <FormRegister />
        </AuntLayot>
    )
};

export default RegisterPage;