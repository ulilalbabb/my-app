import AuthLayouts from "@/src/Components/layouts/AuthLayouts"
import FormRegister from "@/src/Components/fragments/FormRegister"

const RegisterPage = () => {
    return (
        <AuthLayouts title="Sign Up" type="register">
            <FormRegister />
        </AuthLayouts>
    )
}

export default RegisterPage