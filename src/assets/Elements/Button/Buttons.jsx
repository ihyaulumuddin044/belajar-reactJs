const Button = (proms) => {
    const {  childern, classname = "bg-black", onClick = () => {}, type = "button" } = proms;
    return (
        <button className={`h-10 px-6 font-semibold rounded-md ${classname} text-white`}
        type={type}
        onClick={onClick}>
                {childern}
        </button>
    )
}

export default Button;