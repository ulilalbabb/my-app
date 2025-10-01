import Label from "./LabelForm"
import { AuthType } from "@/src/types/auth.type"
import Input from "./Input"

const InputForm = ( {type, placeholder, name, id, onChange, value}: AuthType) => {
    return (
        <div>
            <Label htmlfor={name}>
                {placeholder}
            </Label>
            <Input 
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default InputForm