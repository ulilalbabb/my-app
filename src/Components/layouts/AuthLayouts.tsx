import Image from "next/image"

const AuthLayouts = () => {
    return (
        <div>
            <div className="bg-gray-100 flex items-center justify-center">
                <h1>
                    Luminette
                </h1>
                <Image 
                    src="/assets/login.png"
                    width={500}
                    height={500}
                    alt="login/register"
                />
            </div>

            <div>
                
            </div>
        </div>
    )
}

export default AuthLayouts