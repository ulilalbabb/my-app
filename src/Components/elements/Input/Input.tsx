import { AuthType } from "@/src/types/auth.type"

const Input = ( {type, placeholder, name, id, onChange, value}: AuthType) => {
    return (
        <input 
            type={type}
            placeholder={placeholder}
            className="border border-gray-300 rounded-md p-2 w-full"
            name={name}
            id={id}
            onChange={onChange}
            value={value}
            required
        />
    )
}

export default Input