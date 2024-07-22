import { useContext, useEffect, useState } from "react";
import Button from "../Elements/Button/Buttons"
import { useLogin } from "../Hooks/UseLogin"
import { useSelector } from "react-redux";
import { DarkMode } from "../../context/DarkMode";
import { useTotalPrice } from "../../context/TotalPriceContext";


const Navbar = () => {
    const username = useLogin();
    const {isDarkMode, setIsDarkMode} = useContext(DarkMode);
    const [totalCrat, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);
    const {total} = useTotalPrice();

    useEffect(()=>{
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty;
        },0)
        setTotalCart(sum)
    },[cart]) 
    const hendleLogout = () => {
        localStorage.removeItem("token")
        window.location.href = "/Login"
    }
    return (
        <div className="flex justify-end h-20 bg-blue-600 text-white item-center px-10 py-5">
                {username}
                <Button classname="ml-5 bg-black item-center" childern="Logout" onClick={hendleLogout} />
                <button className="bg-black px-10 mx-5 text-white rounded" onClick={() => setIsDarkMode(!isDarkMode)}>
                    {isDarkMode ? "Light" : "Dark"}
                </button>
                <div className="flex items-center bg-gray-800 p-2 rounded-md ml-5">
                   item: {totalCrat} | Price:  $ {total}
                </div>
            </div>
    )
};

export default Navbar;