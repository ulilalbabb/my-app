'use client'

import { useState } from "react"
import slider from "@/src/Components/Data/slider.json"
import Image from "next/image"
import Button from "../Button/Button"
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const HeroSlider = () => {
    const [current, setCurrent] = useState(0)
    const [touchStartX, setTouchStartX] = useState(0)
    const [touchEndX, setTouchEndX] = useState(0)

    const prevSlide = () => {
        setCurrent(current === 0 ? slider.length - 1 : current - 1 )
    }

    const nextSlide = () => {
        setCurrent(current === slider.length - 1 ? 0 : current + 1 )
    }

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStartX(e.touches[0].clientX)
    }

    const handleTouchMove = (e: React.TouchEvent) => {
        setTouchEndX(e.touches[0].clientX)
    }

    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            nextSlide()
        } else if (touchStartX - touchEndX < -50) {
            prevSlide()
        }
    }

    return (
        <div 
            className="relative w-full max-w-6xl mx-auto overflow-hidden rounded-md shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            {/* images */}
            <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${current * 100}%)` }}
            >
                {slider.map((src, index) => (
                    <div key={index} className="min-w-full">
                        <Image
                            src={src.image}
                            alt={`Slide ${index + 1}`}
                            width={1000}
                            height={500}
                            className="w-full h-full object-cover"
                        />
                    </div>
                ))}
            </div>

            <Button
                onClick={prevSlide}
                variant="hidden md:flex absolute top-1/2 left-3 -translate-y-1/2 bg-white px-3 py-3 rounded-full hover:bg-gray-200"
            >
                <FaArrowLeftLong />
            </Button>
            <Button
                onClick={nextSlide}
                variant="hidden md:flex absolute top-1/2 right-3 -translate-y-1/2 bg-white px-3 py-3 rounded-full hover:bg-gray-200"
            >
                <FaArrowRightLong />
            </Button>
            
            {/* dots */}
            <div 
                className="absolute bottom-4 right-40 md:right-135 transform -translate-x-1/2 flex space-x-3 cursor-pointer"
                onClick={nextSlide}>
                    {slider.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full ${
                                current === index ? "bg-white" : "bg-gray-300"
                            }`}
                        />
                    ))}
            </div>
        </div>
    )
}

export default HeroSlider