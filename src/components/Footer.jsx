import React from "react";
import logo from "../assets/Logo.png";

const Footer = ({ showMount = true }) => {
  return (
    <footer className="flex justify-between bg-[#414F6B] opacity-80 p-5 w-full">
      <div className="sm:flex hidden">
        <img src={logo} alt="" className="w-[40px] h-[40px]" />
        <span className={`sm:-mt-1 ml-2 mt-1 ${showMount ? "" : "hidden"}`}>
          <p className="uppercase text-[#fff] font-semibold md:font-bold text-sm sm:text-lg opacity-70">
            los angeles
          </p>
          <p className="text-[#fff] opacity-70 uppercase font-semibold md:font-bold text-sm sm:text-lg -mt-2">
            mountains
          </p>
        </span>
      </div>
      <p className="text-xs mt-3 uppercase font-bold text-[#fff] opacity-70 sm:text-base">
        copyright {new Date().getFullYear()} all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
