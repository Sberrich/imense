import React from 'react';

const data = [
  // Add your data here
  { name: "Blaise DEFLOO", role: "Manager", violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0, 0, 0] },
  { name: "Blaise DEFLOO", role: "Manager", violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0, 0, 0] },
  { name: "Blaise DEFLOO", role: "Manager", violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0, 0, 0] },
  { name: "Blaise DEFLOO", role: "Manager", violations: [2, 0, 0, 10, 0, 1, 0, 3, 0, 0, 0, 0, 0] },
  // ... more rows
];

const PPEViolationsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Worker
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Protective gloves
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Worker
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Role
            </th>
            <th className="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
              Protective gloves
            </th>
            {/* Add more headers as needed */}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src="https://via.placeholder.com/150" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm leading-5 font-medium text-gray-900">{row.name}</div>
                    <div className="text-sm leading-5 text-gray-500">{row.role}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">{row.role}</td>
              {row.violations.map((violation, idx) => (
                <td key={idx} className="px-6 py-4 whitespace-no-wrap border-b border-gray-200 text-sm leading-5 text-gray-500">
                  {violation > 0 ? (
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                        violation < 5 ? 'bg-yellow-100 text-yellow-800' : 'bg-red-100 text-red-800'
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
