import React from "react";
import { image10, image11, swiggle } from "../assets";
import { services } from "../constants";

const ServiceCard = () => {
  return (
    <div className="grid grid-col-1 w-screen mobile:w-full h-screen gap-[600px] tablet:ml-[10%] desktop:ml-[0%]   px-auto py-auto justify-center place-content-center">
      {services.map((service) => (
        <div className=" list-none bg-cover w-[500px]  px-auto py-auto h-[500px] mt-[-20em] rounded-[10%] p-[10%] m-5 bg-primary mobile:ml-[20%]">
          <li key={service.id}>
            <h2   className=" w-full flex justify-center m-2 font-extrabold">{service.title}</h2>
            <img className=" w-full h-[300px] rounded-[10%]" src={service.img} alt=""></img>
            <button className=" w-[100px] flex bg-black rounded-lg text-center text-white p-1 mt-6 m-2 py-2 mx-auto border-[2px] border-black">READ MORE</button>
          </li>
        </div>
      ))}
    </div>
  );
};

export default ServiceCard;
