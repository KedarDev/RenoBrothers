import React from "react";
import { swiggle } from "../assets";
import { video1 } from "../assets";
import { videos } from "../constants";
import { motion } from 'framer-motion';

const Videos = () => {

  const videoSlides = [...videos, ...videos];

  return (
    <div className=" desktop:left-[0%] tablet:left-[75px] relative justify-center w-full h-screen mt-[50%]">
      <h1 className=" mobile:ml-[62%] relative flex justify-center">Videos</h1>
      <img
        className="relative w-[110px] flex h-3 desktop:ml-[47%] mobile:ml-[63%] tablet:ml-[42%]  ml-[44%]"
        src={swiggle}
        alt="swiggle"
      />
      <div className=" grid grid-col-1 bg-primary w-full mobile:w-[500px] h-[700px] mt-[50px] rounded-[10%]">
        <div className="relative w-full mobile:w-  overflow-hidden mt-[18%]  h-screen">
          {/* Wrapping div for seamless looping */}
          <motion.div
            className="flex"
            animate={{
              x: ["-100%", "0%"],
              transition: {
                ease: "linear",
                duration: 20,
                repeat: Infinity,
              },
            }}
          >
            {/* Render duplicated slides */}
            {videoSlides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 gap-5 m-2 rounded-[20%]"
                style={{ width: `${100 / videos.length}%` }}
              >
                <div className="flex flex-col items-center justify-center h-full text-6xl">
                  <video controls
                    className="w-full h-[400px] rounded-[2%]"
                    src={slide.video}
                    alt=""
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Videos;
