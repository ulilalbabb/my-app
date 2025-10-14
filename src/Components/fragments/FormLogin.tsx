'use client'

import InputForm from "../elements/Input/Index"
import Button from "../elements/Button/Button"
import { useState } from "react";
import Link from "next/link";

const FormLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={handleLogin}>
            <p>Don't have an account? <Link href="/auth/register" className="text-green-500">Sign Up</Link></p>

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

            <Button variant="bg-black text-white w-full py-3 rounded-xl mt-5" type="submit">
                Sign In
            </Button>
        </form>
    )
}

export default FormLogin