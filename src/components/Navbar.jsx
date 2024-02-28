import React, { useState } from "react";
import RenoLogo from "../assets/RenoLogo.png";
import RenovatorLogo from "../assets/RenovatorLogo.png";
import FreeEstButton from "../assets/FreeEstButton.png";
import menu from "../assets/menu.png";
import closeMenu from "../assets/closeMenu.png";
import { styles } from "../styles";

import { navLinks } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState("");

  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full bg-tertiary sticky-top-0 flex m-1 items-center py-1 z-20`}
    >
      <div className=" w-full h-fit justify-between max-w-7x1 items-center content-center flex mx-auto gap-">
        <Link
          to="/"
          className="flex h-10 items-center justify-center mx-auto gap-2"
          onClick={() => {
            setActive(""); // keeps track of where the user is on the page
            window.scrollTo(0, 0);
          }}
        >
          <img
            className="w-full h-[50px] mt-0 object-fit"
            src={RenovatorLogo}
            alt="RenoBrothersLogo"
          />
          <img
            className="w-[200px] min-desktop:w-full    p-1 ml-[-20px] mt-[-5px] items-center justify-center cursor-pointer "
            src={RenoLogo}
            alt="textLogo"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
        <img 
        className=" relative w-[130px] ml-20  h-8  object-contain" 
        src={FreeEstButton} 
        alt="FreeEstButton" 
        />
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-primary" : "text-black"
              } hover:text-primary text-[18px]  font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a className="left-5" href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="sm:hidden h-15 flex flex-1 justify-end items-center">
          <img 
          src={toggle ? closeMenu : menu} 
          alt="menu" 
          className=" shrink-0 mt-[-5px] w-[35px] h-[35px] mr-0   object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} h-[200px] p-6 bg-primary top-16 absolute right-0 mx-4 my-2 min-w-[140px] z-10 rounded`}>
          <ul className="list-none  top-10 sm:flex flex-row gap-10 ">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-black" : "text-black"
              } hover:text-primary text-[18px]  font-medium cursor-pointer`}
              onClick={() => setActive(Link.title)}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        <img className="w-[100px] h-8  object-contain" src={FreeEstButton} alt="FreeEstButton" />

        </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
