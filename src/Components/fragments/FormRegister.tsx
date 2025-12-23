'use client'

import InputForm from "@/src/Components/elements/Input/Index";
import { useState } from "react";
import Button from "@/src/Components/elements/Button/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";

const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const router = useRouter();

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();

        if (!email || !password || !confirmPassword) {
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
    
        if (password !== confirmPassword) {
            return toast.error('Passwords and confirm password do not match', {
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
    
        if (password.length < 6) {
            return toast.error('Password must be at least 6 characters', {
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
    
        const user = { email, password };
        localStorage.setItem('user', JSON.stringify(user));
        console.log(user);
    
        router.push('/auth/login');
    
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <form onSubmit={handleRegister}>
            <ToastContainer/>
            <p>Already have an account? <Link href="/auth/login" className="text-green-500 hover:underline">Sign In</Link></p>
            <InputForm 
                type="email"
                placeholder="example@gmail.com"
                name="email"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
            />
            <InputForm 
                type="password"
                placeholder="*********"
                name="password"
                id="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
            />
            <InputForm 
                type="password"
                placeholder="*********"
                name="confirm-password"
                id="confirm-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                value={confirmPassword}
            />
            <Button 
                variant="bg-black text-white hover:bg-gray-800 w-full py-3 rounded-xl mt-5" 
                type="submit">
                    Sign Up
            </Button>
        </form>
    )
}

export default FormRegister