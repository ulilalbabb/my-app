import AuthLayouts from "@/src/Components/layouts/AuthLayouts";
import FormLogin from "@/src/Components/fragments/FormLogin";

const LoginPage = () => {
  return (
    <AuthLayouts title="Sign In" type="login">
      <FormLogin />
    </AuthLayouts>
  );
};

export default LoginPage;
