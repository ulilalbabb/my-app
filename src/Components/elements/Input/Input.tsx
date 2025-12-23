import { AuthType } from "@/src/types/auth.type"

const Input = ( {type, placeholder, name, id, onChange, value}: AuthType) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className=" border-b-2 border-gray-300 p-2 my-3 w-full"
            name={name}
            id={id}
            onChange={onChange}
            value={value}
        />
    )
}

export default Input