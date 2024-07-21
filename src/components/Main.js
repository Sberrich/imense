import React from "react";
import avatar from "../assets/avatar.png";
import Gloves from "../assets/baseball.png";
import Glasses from "../assets/Safetyglasses.png";
import Earprotection from "../assets/Earprotection.png";
import Mask from "../assets/mask.png";
import Kneepads from "../assets/Kneepads.png";
const data = [
  // Add your data here
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 10, 0, 1, 0, 3, 0, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 10, 0, 1, 0, 3, 0, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0],
  },

 
];

const PPEViolationsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className=" bg-white min-w-full">
        <thead>
          <tr>
            <th className="px-14 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Worker
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              <img src={Gloves}/>
              Protective gloves
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Glasses}/>


            Safety glasses
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Earprotection}/>

            Ear protection
            </th>
           
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Mask}/>
            Mask protection
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Kneepads}/>

            Knee pads
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Earprotection}/>

            Ear protection
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Earprotection}/>

            Ear protection
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Earprotection}/>

            Ear protection
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Earprotection}/>

            Ear protection
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Earprotection}/>

            Ear protection
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
            <img src={Earprotection}/>

            Ear protection
            </th>
         
       
          
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img
                      className="h-10 w-10 rounded-full"
                      src={avatar}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">
                      {row.name}
                    </div>
                    <div className="text-sm leading-5 text-gray-500">
                      {row.role}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                {row.role}
              </td>
              {row.violations.map((violation, idx) => (
                <td
                  key={idx}
                  className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500"
                >
                  {violation > 0 ? (
                    <span
                      className={` p-2  text-xs leading-5 font-semibold rounded-full ${
                        violation < 5
                          ? "bg-yellow-400 text-dark"
                          : "bg-red-600 text-white"
                      }`}
                    >
                      {violation}
                    </span>
                  ) : (
                    "-"
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PPEViolationsTable;
