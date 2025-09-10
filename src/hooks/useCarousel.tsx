import { useState } from "react";

export default function useCarousel (length: number) {
    const [current, setCurrent] = useState(0)
    const [touchStartX, setTouchStartX] = useState(0)
    const [touchEndX, setTouchEndX] = useState(0)

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? length - 1 : prev - 1 ))
    }
    
    const nextSlide = () => {
        setCurrent((prev) => (prev === length - 1 ? 0 : prev + 1 ))
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

    return {
        current,
        prevSlide,
        nextSlide,
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    }
}