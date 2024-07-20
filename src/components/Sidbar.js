import React, { useState } from "react";
import logo from "../assets/logo.png";
import logo3 from "../assets/logo3.png";
import { RxHamburgerMenu, RxBackpack, RxHome } from "react-icons/rx";
import { IoHandRightOutline } from "react-icons/io5";
import { PiHandshakeThin, PiUser } from "react-icons/pi";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const handleToggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex ">
      <div className={`bg-white text-gray-400 h-screen border-r-2 transition-all duration-300 ${isCollapsed ? "w-20 p-1" : "w-64"}`}>
        <div className="flex items-center justify-between">
          <a href="#" className="py-2">
            <img src={isCollapsed ? logo3 : logo} alt="Logo" className={`transition-all duration-300 ${isCollapsed ? "w-[100px]" : "w-[190px]"}`} />
          </a>
          <button onClick={handleToggleSidebar}>
            <RxHamburgerMenu className={`transition-all duration-300 ${isCollapsed ? "" : "w-8 h-8"}`} />
          </button>
        </div>
        <div className="p-2 mt-8">
          <ul className="flex flex-col items-start">
            <li className={`flex items-center gap-2 hover:bg-blue-400 hover:text-white hover:rounded-md w-full p-2 ${isCollapsed ? "justify-center " : ""}`}>
              <RxHome className={`transition-all duration-300  ${isCollapsed ? "h-8 w-8" : "h-6 w-6"}`} />
              {!isCollapsed && <a href="#" className="w-full">Dashboard</a>}
            </li>
            <li className={`flex items-center gap-2 hover:bg-blue-400 hover:text-white hover:rounded-md w-full p-2 ${isCollapsed ? "justify-center" : ""}`}>
              <IoHandRightOutline className={`transition-all duration-300 ${isCollapsed ? "h-8 w-8" : "h-6 w-6"}`} />
              {!isCollapsed && <a href="#" className="w-full">P.P.E Violations</a>}
            </li>
          </ul>
        </div>
        <div className=  {`${isCollapsed ? "border-2 my-10  border-gray-400" : ""}`}></div>
        <div className="mt-2 p-2 text-gray-400">
          {!isCollapsed && <h1 className="mb-2">MANAGE</h1>}
          <ul className="flex flex-col items-start">
            <li className={`flex items-center gap-2 hover:bg-blue-400 hover:text-white hover:rounded-md w-full p-2 ${isCollapsed ? "justify-center" : ""}`}>
              <PiHandshakeThin className={`transition-all duration-300 ${isCollapsed ? "h-8 w-8" : "h-6 w-6"}`} />
              {!isCollapsed && <a href="#" className="w-full">P.P.E.s</a>}
            </li>
            <li className={`flex items-center gap-2 hover:bg-blue-400 hover:text-white hover:rounded-md w-full p-2 ${isCollapsed ? "justify-center" : ""}`}>
              <RxBackpack className={`transition-all duration-300 ${isCollapsed ? "h-8 w-8" : "h-6 w-6"}`} />
              {!isCollapsed && <a href="#" className="w-full h-full">Contractors</a>}
            </li>
            <li className={`flex items-center gap-2 hover:bg-blue-400 hover:text-white hover:rounded-md w-full p-2 ${isCollapsed ? "justify-center" : ""}`}>
              <PiUser className={`transition-all duration-300 ${isCollapsed ? "h-8 w-8" : "h-6 w-6"}`} />
              {!isCollapsed && <a href="#" className="w-full">Workers</a>}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
