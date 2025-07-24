import React, { useState } from "react";
import { ChevronDown } from "lucide-react"; // Optional, or use an image icon

const CustomSelect = ({ label, options, selected, onChange }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative w-full">
      <label className="block mb-1 text-white">{label}</label>

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full text-left px-4 py-2 rounded-md input-style text-white flex justify-between items-center"
      >
        <span>{selected}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <ul className="absolute z-10 mt-1 w-full bg-gradient-to-r to-[#050C19] from-[#00151A] rounded-md text-white shadow-lg overflow-hidden">
          {options.map((opt, idx) => (
            <li
              key={idx}
              className="px-4 py-4 hover:bg-cyan-800 cursor-pointer border-b border-gray-700 last:border-none"
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
