import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import RenoLogo from "../assets/RenoLogo.png";
import RenovatorLogo from "../assets/RenovatorLogo.png";
import FreeEstButton from "../assets/FreeEstButton.png";
import menu from "../assets/menu.png";
import closeMenu from "../assets/closeMenu.png";
import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX}  w-full right-0 flex items-center py-1 top-0 z-20 fixed  bg-tertiary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={RenovatorLogo}
            alt="logo"
            className=" mobile:w-[100px] mobile:ml-[px] justify-center items-center mobile:p-0 mobile:m-0"
          />
          <img
            src={RenoLogo}
            alt="textLogo"
            className="mobile:w-[200px] mobile:ml-[-40px] tablet:h-[35px]  tablet:w-[180px] laptop:w-[80%] laptop:h-[50%] justify-center items-center"
          />
        </Link>
        <a  className="w-fit" href="">
          <img
            className="tablet:flex mobile:hidden hidden  relative laptop:w-[90%] tablet:w-[110px] w-20   h-8  object-contain"
            src={FreeEstButton}
            alt="FreeEstButton"
          />
        </a>
        <ul className="list-none hidden sm:flex flex-row gap-[60px]">
          {navLinks.map((Link) => (
            <li
              key={Link.id}
              className={`${
                active === Link.title ? "text-primary" : "text-black"
              } hover:text-primary text-[18px] sm:text-[18px] mr-[-40px] justify-end font-medium cursor-pointer`}
              onClick={() => {
                setActive(Link.title);
              }}
            >
              <a href={`#${Link.id}`}>{Link.title}</a>
            </li>
          ))}
        </ul>
        <div className="tablet:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? closeMenu : menu}
            alt="menu"
            className="w-[35px] h-[35px] object-contain cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-primary absolute top-20 right-0 mx-4 py-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none hidden sm:flex  mobile:flex flex-col gap-2  justify-center items-center">
              {navLinks.map((Link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === Link.title ? "text-black" : "text-black"
                  } hover:text-white text-[16px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(Link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${Link.id}`}>{Link.title}</a>
                </li>
              ))}
              <a href="">
                <img
                  className="items-start relative w-[130px] h-8  object-contain"
                  src={FreeEstButton}
                  alt="FreeEstButton"
                />
              </a>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
