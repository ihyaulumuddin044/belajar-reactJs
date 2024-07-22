import InputForm from "../Elements/input";
import Button from "../Elements/Button/Buttons"
import { useEffect, useRef, useState } from "react";
import { login } from "../services/Aunt.service";


const FormLogin = () => {
    const [loginFailed, setLoginFiled] = useState ("");
    const hendleLogin = (event) => {
        
        event.preventDefault();
        // localStorage.setItem("email", event.target.email.value)
        // localStorage.setItem("password", event.target.password.value)
        // window.location.href = "/product"
        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        }
        login(data, (status, res)=>{
            if(status){
                localStorage.setItem("token", res)
                window.location.href = "/product"
            } else{
                setLoginFiled(res.response.data)
                console.log(res.response.data)
            }
        })
    }

    const usernameRef = useRef();

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    return (

        <form onSubmit={hendleLogin} >
            <InputForm title="Username" name="username" type="text" placeholder="example@gmail.com" ref={usernameRef} />
            <InputForm title="Password" name="password" type="password" placeholder="********" />
            <Button classname="bg-blue-600 w-full" childern="login" type="submit" />
            {loginFailed && <p className="text-red-600 mt-5 text-center">{loginFailed}</p>}
        </form >
    )
}
export default FormLogin;
