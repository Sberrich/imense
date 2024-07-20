// AvatarDropdown.js
import React, { useState } from 'react';
import { IoSettingsOutline } from "react-icons/io5";
import { CgDanger, CgLogOut } from "react-icons/cg";
const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen(!isOpen);

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={toggleDropdown}
      >
        <img
          src="https://via.placeholder.com/40" // Replace with your avatar image
          alt="Avatar"
          className="w-10 h-10 rounded-full"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li>
              <a href="#profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">BESIX Group</a>
            </li>
            <li>
              <a href="#profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm opacity-50">besix.group@besix.be</a>
            </li>
            <li>
              <hr  className=" hover:bg-gray-100 border-1"/>
            </li>
            <li className='flex items-center justify-start ml-6 mt-4'>
              <IoSettingsOutline/>
              <a href="#settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Profile settings</a>
            </li>
            <li className='flex items-center justify-start ml-6'>
              <CgDanger/>
              <a href="#settings" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Our policies</a>
            </li>
            <li>
              <hr  className=" hover:bg-gray-100 border-1"/>
            </li>
            <li className='flex items-center justify-start ml-6'>
              <CgLogOut/>
              <a href="#logout" className="block px-4 py-2 text-gray-700 hover:bg-gray-100 text-sm">Logout</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;
