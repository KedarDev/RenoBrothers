import React from "react";
import RenoLogo from "../assets/RenoLogo.png";
import RenovatorLogo from "../assets/RenovatorLogo.png";
import { navLink } from "../constants";
import { Link } from "react-router-dom";
import EstimateButton from "./EstimateButton";

const Navbar = () => {
  return (
    <nav className="flex">
      <img src={RenovatorLogo} alt="RenoBrothersLogo" />
      <img src={RenoLogo} alt="textLogo" />
    
      <EstimateButton />
      {navLink.map((Link) => (
        <li
          key={Link.id}
          className="text-black text-[18px] font-medium cursor-pointer "
        >
          <a href={`#${Link.id}`}>{Link.title}</a>
        </li>
      ))}
      
    </nav>
  );
};

export default Navbar;
