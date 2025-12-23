"use client";

import InputForm from "../elements/Input/Index";
import Button from "../elements/Button/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    const dataUser = JSON.parse(localStorage.getItem("user") as string);

    if (dataUser) {
      if (dataUser.email === email && dataUser.password === password) {
        localStorage.setItem("isLogin", "true");
        router.push("/");
      } else {
        toast.error("Email or password is incorrect", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Please register first", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <ToastContainer />
      <p>
        Don't have an account?{" "}
        <Link href="/auth/register" className="text-green-500 hover:underline">
          Sign Up
        </Link>
      </p>

      <InputForm 
        type="email" 
        placeholder="example@gmail.com" 
        name="email" 
        id="email" 
        value={email} 
        onChange={(e) => setEmail(e.target.value)} 
      />
      <InputForm 
        type="password" 
        placeholder="*********" 
        name="password" 
        id="password" 
        value={password} 
        onChange={(e) => setPassword(e.target.value)} 
      />

      <Button 
        variant="bg-black text-white hover:bg-gray-800 w-full py-3 rounded-xl mt-5" 
        type="submit"
      >
          Sign In
      </Button>
    </form>
  );
};

export default FormLogin;
