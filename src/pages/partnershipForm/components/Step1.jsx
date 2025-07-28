import React, { forwardRef, useImperativeHandle } from "react";
import { FaCheck } from "react-icons/fa";

const Step1 = forwardRef(({ data, setData }, ref) => {
  const options = [
    { value: "Buyer", label: "I am the Buyer" },
    { value: "Seller", label: "I am the Seller" },
    { value: "Both", label: "I am submitting on behalf of Both Parties" },
  ];

  const handleChange = (value) => {
    setData({ ...data, party: value });
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.party?.trim()) return "Please select a party.";
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Party Declaration</h3>
      <div className="space-y-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center cursor-pointer">
            <input
              type="radio"
              name="party"
              value={option.value}
              checked={data.party === option.value}
              onChange={() => handleChange(option.value)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-md ${
                data.party === option.value ? "border-[#00D2FF]" : "border-gray-300"
              }`}
            >
              {data.party === option.value && <FaCheck className="text-[#00D2FF] text-sm" />}
            </span>
            <span className="ml-2.5 font-poppins text-base font-medium leading-8">
              {option.label}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
});

export default Step1;
