'use client'

import InputForm from "@/src/Components/elements/Input/Index";
import { useState } from "react";
import Button from "@/src/Components/elements/Button/Button";
import Link from "next/link";

const FormRegister = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleRegister = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleRegister}>

            <p>Already have an account? <Link href="/auth/login" className="text-green-500">Sign In</Link></p>
            <InputForm 
                type="email"
                placeholder="example@.com"
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
                variant="bg-black text-white w-full py-3 rounded-xl mt-5" 
                type="submit">
                    Sign Up
            </Button>
        </form>
    )
}

export default FormRegister