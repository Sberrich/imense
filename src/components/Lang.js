// LanguageDropdown.js
import React, { useState } from 'react';
import english from '../assets/english.svg'
import france from '../assets/france.svg'
import NL from '../assets/nederlands.svg'
import ES from '../assets/spain.svg'
import DE from '../assets/germany.svg'

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
    
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
          <ul className="py-1">
            <li>
              <button
                onClick={() => handleLanguageChange('English')}
                className=" gap-4 px-4 flex py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm"
              >
            
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
               <img src={france}/> Français (FR))
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange('English')}
                className=" gap-4 px-4 flex py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm"
              >
               <img src={NL}/> Nederlands (NL)
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange('English')}
                className=" gap-4 px-4 flex py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm"
              >
               <img src={ES}/>  Español (ES) 
              </button>
            </li>
            <li>
              <button
                onClick={() => handleLanguageChange('English')}
                className=" gap-4 px-4 flex py-2 text-gray-700 hover:bg-gray-100 w-full text-left text-sm"
              >
               <img src={DE}/>  Deutsch (DE)  
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
