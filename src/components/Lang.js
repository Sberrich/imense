// LanguageDropdown.js
import React, { useState } from 'react';
import english from '../assets/english.svg'

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('(EN)');

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setIsOpen(false);
    // Implement language change logic here
    console.log(`Language changed to: ${language}`);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        type="button"
        className="flex items-center p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        onClick={toggleDropdown}
      >
        <span className="text-gray-800 text-sm"><img src={english}/></span>
        <svg
          className="ml-2 w-4 h-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleLanguageChange('English')}
                className=" gap-4 px-4 flex py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm"
              >
               <img src={english}/> English (EN)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange('English')}
                className=" gap-4 px-4 flex py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm"
              >
               <img src={english}/> English (EN)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange('English')}
                className=" gap-4 px-4 flex py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm"
              >
               <img src={english}/> English (EN)
              </button>
            </li>
            {/* Add more languages as needed */}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
