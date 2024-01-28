import { useState, useEffect, useCallback } from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { PropTypes } from 'prop-types';

const Carousel = ({ children: slides, autoSlide = false, autoSlideInterval = 3000 }) => {
    const [curr, setCurr] = useState(0)

    const prev = () => setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))

    const next = useCallback(() => setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1)), [slides])

    useEffect(() => {
        if (!autoSlide) return
        const slideInterval = setInterval(next, autoSlideInterval)
        return () => clearInterval(slideInterval)
    }, [autoSlide, next, autoSlideInterval])


    return (
        <div className="w-full flex flex-col justify-between items-center gap-8 select-none ">
            <div className="w-full flex justify-between items-center">
                <div onClick={prev} className="w-8 h-8 bg-orange-200 rounded-full text-orange-500 flex justify-center items-center cursor-pointer">
                    <MdKeyboardArrowLeft size={25} />
                </div>
                <div className="text-black text-2xl font-inter font-semibold leading-7">Our Benefits</div>
                <div onClick={next} className="w-8 h-8 bg-orange-200 rounded-full text-orange-500 flex justify-center items-center cursor-pointer">
                    <MdKeyboardArrowRight size={25} />
                </div>
            </div>
            <div className='overflow-hidden w-full  relative rounded-lg bg-[#b96004]'>
                <div className='flex  transition-transform ease-out duration-500' style={{ transform: `translateX(-${curr * 100}%)` }}>
                    {slides}
                </div>
            </div>
        </div>

    )
}
Carousel.propTypes = {
    children: PropTypes.array,
    autoSlide: PropTypes.bool,
    autoSlideInterval: PropTypes.number,
}
export default Carousel