import React from 'react';
import { motion } from 'framer-motion';
import { image10, image11 } from "../assets";
import { slides } from '../constants';

// Define the array of slides with numbers


const Slider = () => {
    // Duplicate the slides array to ensure seamless looping
    const duplicatedSlides = [...slides, ...slides];

    return (
        <div className="relative w-full  overflow-hidden mt-[18%] mobile:p-10  h-screen">
            {/* Wrapping div for seamless looping */}
            <motion.div
                className="flex"
                animate={{
                    x: ['-100%', '0%'],
                    transition: {
                        ease: 'linear',
                        duration: 20,
                        repeat: Infinity,
                    }
                }}
            >
                {/* Render duplicated slides */}
                {duplicatedSlides.map((slide, index) => (
                    <div key={index} className="flex-shrink-0 gap-[100px] m-2 rounded-[20%]" style={{ width: `${100 / slides.length}%` }}>
                        <div className="flex mobile:w-full   flex-col items-center justify-center h-full text-6xl">
                            <img className='  w-full h-[400px] rounded-[2%]' src={slide.img} alt="" />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default Slider;