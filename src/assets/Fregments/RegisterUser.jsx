import InputForm from "../Elements/input";
import Button from "../Elements/Button/Buttons";

const FormRegister = () => {
    return (
        <form action="">
            <InputForm title="FullName" name="Fullname" type="text" placeholder="inser your fullname" />
            <InputForm title="Email" name="email" type="email" placeholder="example@gmail.com" />
            <InputForm title="Password" name="password" type="password" placeholder="********" />
            <InputForm title="Confirm Password" name="confirm assword" type="password" placeholder="********" />
            <Button classname="bg-blue-600 w-full" childern="register now" />
        </form>
    )
}
export default FormRegister;
