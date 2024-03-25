import React from "react";
import { swiggle } from "../assets";
import InfiniteSlider from "./InfiniteSlider";
import { hardHat } from "../assets";

const Gallery = () => {
  return (
    <div className=" relative justify-center w-full h-screen mt-[150%]">
      <h1 className=" relative flex justify-center">Gallery</h1>
      <img
        className="relative w-[110px] flex h-3  ml-[44%]"
        src={swiggle}
        alt="swiggle"
      />
      <div className=" grid grid-col-1 bg-primary w-full h-[700px] mt-[100px] rounded-[10%]">
        <InfiniteSlider />
      </div>
    </div>
  );
};

export default Gallery;
