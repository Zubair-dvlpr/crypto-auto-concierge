import React from "react";
import { FaEye, FaEdit, FaPlus } from "react-icons/fa";

const DealTable = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="w-full min-w-[900px] border-collapse text-white">
        <thead>
          <tr className="bg-[#D015FF] text-white">
            {columns.map((col, index) => (
              <th
                key={index}
                className={`px-3 py-5 text-center ${index === 0 ? "rounded-tl-lg" : ""} ${
                  index === columns.length - 1 ? "rounded-tr-lg" : ""
                }`}
              >
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((deal, rowIndex) => (
            <tr key={rowIndex} className="border-b border-gray-700">
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="px-3 py-5 text-center">
                  {col.render ? col.render(deal) : deal[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DealTable;
