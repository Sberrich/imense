import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaArrowsUpDown } from "react-icons/fa6";
import { GoMoon } from "react-icons/go";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import AvatarDropdown from "./Avatar";
import LanguageDropdown from "./Lang";

function Navbar() {
  return (
    <div>
      <nav className="flex items-start justify-between border-b-2 p-2">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold">Overview</h1>
        </div>
        <ul className="flex justify-center items-center text-xl gap-4">
          <li className="mr-4  flex items-center justify-center ">
            <button
              type="button"
              className="flex justify-between gap-2 items-center p-2 rounded-full "
            >
              A <FaArrowsUpDown className="hover:bg-gray-100" />
            </button>
          </li>
          <li className="mr-4">
          <button
              type="button"
              className="flex justify-between gap-2 items-center p-2 rounded-full "
            >
            <GoMoon className="hover:bg-gray-100" />
            </button>
          </li>
          <li className="mr-4">
          <button
              type="button"
              className="flex justify-between gap-2 items-center p-2 rounded-full "
            >
            <IoNotificationsOutline className="hover:bg-gray-100" />
            </button>
          </li>
          <li className="mr-4">
            <LanguageDropdown className="hover:bg-gray-100" />
          </li>
          <AvatarDropdown className="hover:bg-gray-100" />
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
