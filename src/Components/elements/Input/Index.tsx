import Label from "./LabelForm"
import { AuthType } from "@/src/types/auth.type"
import Input from "./Input"

const InputForm = ( {type, placeholder, name, label, id, onChange, value}: AuthType) => {
    return (
        <div>
            <Label htmlfor={name}>
                {label}
            </Label>
            <Input 
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
                label={label}
            />
        </div>
    )
}

export default InputForm