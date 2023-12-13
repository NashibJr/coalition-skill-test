import React from "react";
import logo from "../assets/Logo.png";
import AccordionComponent from "./AccordionComponent";

const NavigationBar = ({ showMount }) => {
  return (
    <nav className="p-4 flex justify-between lg:ml-[150px] lg:mr-[150px] sm:ml-11 sm:mr-11 md:mr-16 md:ml-16">
      <div className="flex sm:-ml-4">
        <img src={logo} alt="" className="w-[40px] h-[40px] cursor-pointer" />
        <span className={`sm:-mt-1 ml-2 mt-1 ${showMount ? "" : "hidden"}`}>
          <p className="uppercase text-[#4D4D4D] font-semibold md:font-bold text-sm sm:text-lg">
            los angeles
          </p>
          <p className="text-[#414F6B] uppercase font-semibold md:font-bold text-sm sm:text-lg -mt-2">
            mountains
          </p>
        </span>
      </div>

      {/* small devices */}
      <div className="w-[36%] sm:hidden">
        <AccordionComponent title="Menu">
          <ul className="flex flex-col">
            <li className="mb-2 hover:border-b hover:border-b-[#414F6B] p-[2px]">
              <a
                href="/"
                className="uppercase text-sm font-semibold text-[#414F6B]"
              >
                01. history
              </a>
            </li>
            <li className="hover:border-b hover:border-b-[#414F6B] p-[2px]">
              <a
                href="/"
                className="uppercase text-sm font-semibold text-[#414F6B]"
              >
                02. team
              </a>
            </li>
          </ul>
        </AccordionComponent>
      </div>

      {/* larger devices */}
      <ul className="sm:flex hidden">
        <li className="text-[#414F6B] mr-10 hover:text-black uppercase font-bold text-lg cursor-pointer underline">
          <p>01. history</p>
        </li>
        <li className="text-[#414F6B] uppercase hover:text-black font-bold text-lg cursor-pointer underline">
          <p>02. team</p>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
