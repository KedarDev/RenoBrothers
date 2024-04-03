import React from "react";
import { swiggle } from "../assets";
import InfiniteSlider from "./InfiniteSlider";
import { hardHat } from "../assets";

const Gallery = () => {
  return (
    <div className=" relative justify-center  w-full h-screen desktop:mt-[70%] mobile:mt-[80em] mt-[150%]">
      <h1 className=" desktop:ml-[-8%] mobile:w-full  mobile:ml-[30%] relative flex  tablet:left-[75px] justify-center">Gallery</h1>
      <img
        className="relative w-[110px]  mobile:ml-[63%]  tablet:left-[60px] flex h-3  ml-[44%]"
        src={swiggle}
        alt="swiggle"
      />
      <div className=" desktop:ml-[0%] desktop:w-full tablet:ml-[10%] grid grid-col-1 bg-primary mobile:w-[500px] w-full h-[700px] mt-[100px] rounded-[10%]">
        <InfiniteSlider />
      </div>
    </div>
  );
};

export default Gallery;
