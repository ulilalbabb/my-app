import Image from "next/image"
import FormLogin from "../fragments/FormLogin"
import FormRegister from "../fragments/FormRegister"
import Link from "next/link"

type Props = {
    title: string
    type: string
    children?: React.ReactNode
}

const AuthLayouts = ({title, type}: Props) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-100 flex flex-col items-center justify-center">
                <h1 className="text-4xl font-bold mt-10">
                    Luminette
                </h1>
                <Image 
                    src="/assets/login.png"
                    width={500}
                    height={500}
                    alt="login/register"
                />
            </div>

            <div className="m-4 pt-7">
                <h1 className="text-4xl pb-7">{title}</h1>
                {type === "login" ? <FormLogin /> : <FormRegister />}
            </div>
        </div>
    )
}

export default AuthLayouts