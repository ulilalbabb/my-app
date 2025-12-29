'use client'

import Link from "next/link"
import { motion } from "motion/react"

const navItems = [
    { label: "Home", href: "/" },
    { label: "Shop", href: "/shop" },
    { label: "Product", href: "/product" },
    { label: "Contact Us", href: "/contact" },
]

const Navbar = () => {
    return (
        <nav className="h-18 flex items-center justify-between mx-3 md:mx-6 lg:mx-34">
            <div>
                <h1 className="text-2xl">Luminette</h1>
            </div>
            <div>
                <ul className="hidden md:flex gap-8">
                    {navItems.map((item, index) => (
                        <motion.li 
                            key={index} 
                            whileHover={{ scale: 1.1 }} 
                            whileTap={{ scale: 0.9 }}
                            className="relative after:block after:h-[2px] after:w-0 after:bg-yellow-600 after:transition-all after:duration-300 hover:after:w-full "
                        >
                                <Link href={item.href}>{item.label}</Link>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div>
                <Link href="/auth/login">Login</Link>
            </div>
        </nav>
    )
}

export default Navbar