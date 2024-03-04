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
      className={`${styles.paddingX} w-screen bg-tertiary sticky-top-0 flex m-3 items-center py-2 z-20`}
    >
      <div className="w-full h-fit justify-between max-w-7x1 items-center content-center flex">
        <Link
          to="/"
          className="flex h-10 items-center justify-center mx-auto gap-2"
          onClick={() => {
            setActive(""); // keeps track of where the user is on the page
            window.scrollTo(0, 0);
          }}
        >
          <img
            className=" mobile:w-40 mobile:h-12 desktop:w-[150px] w-full h-[60px] mt-1 object-fit"
            src={RenovatorLogo}
            alt="RenoBrothersLogo"
          />
          <img
            className=" tablet:w-[100%] mobile:w-[70%] mobile:mr-[50px] laptop:w-[60%] desktop:w-[60%] w-[200px] ml-[-20px] mt-[-5px] items-center justify-center cursor-pointer "
            src={RenoLogo}
            alt="textLogo"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 p-1 relative  ">
        <img 
        className="relative w-[130px] ml-10  h-8  object-contain" 
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
              <a className="left-" href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className=" absolute ml-[80%] pl-[4%] tablet:hidden  h-15 flex flex-1 justify-end items-center">
          <img 
          src={toggle ? closeMenu : menu} 
          alt="menu" 
          className="w-[45px] h-[45px]  mr-0 ml-5   object-contain cursor-pointer"
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
