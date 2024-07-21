import React from "react";

function Subpages() {
  return (
    <div>
      <div className="flex items-center text-sm leading-6 justify-between  border-b-2 p-2">
        <ul className="flex justify-center items-center  gap-4">
          <li className="mr-4 font-bold hover:text-blue-400 cursor-pointer">SITES</li>
          <li className="mr-4 font-bold hover:text-blue-400 cursor-pointer">All</li>
          <li className="mr-4 font-bold hover:text-blue-400 cursor-pointer">Site 1</li>
          <li className="mr-4 font-bold hover:text-blue-400 cursor-pointer">Site 2</li>
          <li className="mr-4 font-bold hover:text-blue-400 cursor-pointer">Site 3</li>
          <li className="mr-4 font-bold hover:text-blue-400 cursor-pointer">Site 4</li>
        </ul>
        <input className="border border-gray-300 rounded-md px-4 py-2 text" type="txt" placeholder="search workers"/>
        <input className="border border-gray-300 rounded-md px-4 py-2 text" type="date"/>
  
        
      </div>
    </div>
  );
}

export default Subpages;
