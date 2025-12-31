"use client";

import InputForm from "../elements/Input/Index";
import Button from "../elements/Button/Button";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import { getSupabaseBrowserClient } from "@/src/lib/supabase/browser-client";
import { FcGoogle } from "react-icons/fc";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = getSupabaseBrowserClient();

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
    });
    if (error) {
      return toast.error(error.message);
    }
  };



  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data } = await supabase.auth.signInWithPassword({ 
      email, password 
    });

    if (!email || !password) {
            return toast.error('Please fill in all fields', {
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

    if (data.user) {
      setTimeout(() => {
        router.push("/");
      }, 1000);
      toast.success("Login successful", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <Button
        variant="w-full border rounded-xl py-2 flex items-center justify-center gap-2 mt-5 hover:bg-gray-100"
        type="submit"
        onClick={handleGoogleLogin}>
          <FcGoogle size={20}/>
          Daftar dengan Google
      </Button>
    </form>
  );
};

export default FormLogin;
