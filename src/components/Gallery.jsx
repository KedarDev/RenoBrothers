import React from "react";
import { swiggle } from "../assets";

const Gallery = () => {
  return (
    <div className=" relative justify-center w-full h-screen mt-[150%]">
      <h1 className=" relative flex justify-center">Gallery</h1>
      <img
        className="relative w-[110px] flex h-3  ml-[44%]"
        src={swiggle}
        alt="swiggle"
      />
      <div className=" grid grid-col-1 bg-primary w-full h-screen mt-[100px] rounded-[10%]">

      </div>
    </div>
  );
};

export default Gallery;
