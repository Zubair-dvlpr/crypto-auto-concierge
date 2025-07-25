import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const CustomSelect = ({ label, options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={wrapperRef} className="relative w-full ">
      <label className="block mb-3 text-white">{label}</label>

      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full text-left cursor-pointer  px-4 py-2 rounded-md input-style text-white flex justify-between items-center"
      >
        <span>{selected || "Select an option"}</span>
        <ChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 w-full bg-gradient-to-r to-[#050C19] from-[#00151A] rounded-md text-white shadow-lg overflow-hidden max-h-60 overflow-y-auto">
          {options.map((opt, idx) => (
            <li
              key={idx}
              className="px-4 py-4 hover:bg-cyan-800 cursor-pointer border-b border-gray-700 last:border-none"
              onMouseDown={(e) => {
                // Use onMouseDown instead of onClick to fire before blur/outside click closes it
                e.preventDefault(); // Prevents button blur behavior
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
