import Image from "next/image";
import FormLogin from "../fragments/FormLogin";
import FormRegister from "../fragments/FormRegister";

type Props = {
  title: string;
  type: string;
  children?: React.ReactNode;
};

const AuthLayouts = ({ title, type }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
      <div className="bg-gray-100 h-screen flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mt-10">Luminette</h1>
        <Image src="/assets/login.png" width={500} height={500} alt="login/register" />
      </div>

      <div className="m-4 pt-7 md:w-2/3 md:mx-auto md:my-auto">
        <h1 className="text-4xl pb-7">{title}</h1>
        {type === "login" ? <FormLogin /> : <FormRegister />}
      </div>
    </div>
  );
};

export default AuthLayouts;
