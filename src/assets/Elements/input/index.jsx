import Label from "./Label";
import Input from "./Input";
import { forwardRef } from "react";

const InputForm = forwardRef((props, ref) => {
        const { title, name, type, placeholder } = props;
        return (
            <div className="mb-6">
                <Label htmlFor={name} text={title} />
                <Input name={name} type={type} placeholder={placeholder} ref={ref}/>
            </div>
        );
    }
);


export default InputForm;