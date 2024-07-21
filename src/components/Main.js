import React, { useState, useRef } from "react";
import avatar from "../assets/avatar.png";
import Gloves from "../assets/baseball.png";
import Glasses from "../assets/Safetyglasses.png";
import Earprotection from "../assets/Earprotection.png";
import Mask from "../assets/mask.png";
import Kneepads from "../assets/Kneepads.png";
import SafetyShoes from "../assets/Safetyshoes.png";
import Coverall from "../assets/Coverall.png";
import HiVisJacket from "../assets/HiVisJacket.png";
import SafetyHarness from "../assets/SafetyHarness.png";
import FaceShield from "../assets/FaceShield.png";
import HardHat from "../assets/HardHat.png";
import WeldingHelmet from "../assets/WeldingHelmet.png";
import settings from "../assets/settings.png";
import biowanz from "../assets/biowanz.png";

const data = [
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 10, 0, 1, 0, 3, 0, 0, 0, 0, 3],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 10, 0, 1, 0, 0, 0, 0, 3, 0, 3],
  },
  {
    name: "Blaise DEFLOO",
    role: "Manager",
    violations: [2, 0, 0, 10, 0, 1, 0, 0, 0, 3, 0, 3],
  },
];

const headers = [
  { img: Gloves, alt: "Protective gloves" },
  { img: Glasses, alt: "Safety glasses" },
  { img: Earprotection, alt: "Ear protection" },
  { img: Mask, alt: "Mask protection" },
  { img: Kneepads, alt: "Knee pads" },
  { img: SafetyShoes, alt: "Safety shoes" },
  { img: Coverall, alt: "Coverall" },
  { img: HiVisJacket, alt: "Hi-Vis Jacket" },
  { img: SafetyHarness, alt: "Safety Harness" },
  { img: FaceShield, alt: "Face shield" },
  { img: HardHat, alt: "Hard Hat" },
  { img: WeldingHelmet, alt: "Welding helmet" },
];

const PPEViolationsTable = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenViolations,setIsModalOpenViolations] = useState(false);
  const [selectedColumns, setSelectedColumns] = useState(
    headers.map((_, index) => true)
  );
  const tableRef = useRef(null);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const toggleModalViolations = () => {
    setIsModalOpenViolations(!isModalOpenViolations);
  };

  const handleCheckboxChange = (index) => {
    const newSelectedColumns = [...selectedColumns];
    newSelectedColumns[index] = !newSelectedColumns[index];
    setSelectedColumns(newSelectedColumns);
  };

  return (
    <div className="relative overflow-x-auto">
      {isModalOpen && (
        <div className="fixed flex items-center justify-center z-50 left-40">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg mb-4">Select columns to display</h2>
            <div className="flex flex-col">
              {headers.map((header, index) => (
                <label key={index} className="flex items-center mb-2">
                  <input
                    type="checkbox"
                    checked={selectedColumns[index]}
                    onChange={() => handleCheckboxChange(index)}
                    className="mr-2"
                  />
                  {header.alt}
                </label>
              ))}
            </div>
            <button
              className="mt-4 p-2 bg-blue-500 text-white rounded"
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <div ref={tableRef}>
        <table className="bg-white min-w-full border border-gray-200 mt-4">
          <thead>
            <tr>
              <th className="border border-gray-200 p-2 max-w-5">
                <button
                  className="p-2 bg-gray-100 rounded-full"
                  onClick={toggleModal}
                >
                  <img src={settings} alt="settings" className="cover w-6" />
                </button>
              </th>
              <th className="border border-gray-200 p-2">Worker</th>
              {headers.map((header, index) =>
                selectedColumns[index] ? (
                  <th
                    key={index}
                    className="px-6 py-3 border border-gray-200 bg-gray-50 text-center leading-4 text-gray-500 tracking-wider"
                  >
                    <div className="flex flex-col items-center justify-center">
                      <img
                        src={header.img}
                        alt={header.alt}
                        className="mx-auto"
                      />
                      <span className="text-xs text-start">{header.alt}</span>
                    </div>
                  </th>
                ) : null
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                <td className="px-6 py-4 border border-gray-200 text-center text-sm leading-5 text-gray-500">
                  {rowIndex + 1}
                </td>
                <td className="px-4 py-2 border border-gray-200 flex items-center justify-center">
                  <div className="flex-shrink-0 w-12 h-12">
                    <img
                      className="h-full w-full rounded-full"
                      src={avatar}
                      alt={row.name}
                    />
                  </div>
                  <div className="flex flex-col justify-center text-xs ml-4">
                    <div className="leading-5 text-gray-900">{row.name}</div>
                    <div className="text-gray-500">{row.role}</div>
                  </div>
                  <img
                    src={biowanz}
                    className="w-10 h-10 ml-4"
                    alt="company logo"
                  />
                </td>
                {row.violations.map((violation, colIndex) =>
                  selectedColumns[colIndex] ? (
                    <td
                      key={colIndex}
                      className="px-6 py-4 border border-gray-200 text-center text-sm leading-5 text-gray-500"
                    >
                      {violation > 0 ? (
                        <button
                          className={`p-2 text-xs leading-5 font-semibold rounded-full ${
                            violation < 5
                              ? "bg-yellow-400 text-dark"
                              : "bg-red-600 text-white"
                          }`}
                       onClick={toggleModalViolations} >
                          {violation}
                        </button>
                      ) : (
                        "-"
                      )}
                    </td>
                  ) : null
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PPEViolationsTable;
