import React, { forwardRef, useImperativeHandle } from "react";
import { FaCheck } from "react-icons/fa";

const Step4 = forwardRef(({ data, setData }, ref) => {
  const businessOptions = [
    "Licensed Money Services Business (MSB)",
    "OTC Desk / Liquidity Provider",
    "Currency Exchange",
    "Automotive Dealer / Service Provider",
    "Other"
  ];

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.businessTypes || data.businessTypes.length === 0) {
        return "Please select at least one business type.";
      }
      return true;
    },
  }));

  const handleCheckboxChange = (option) => {
    const selected = data.businessTypes || [];
    if (selected.includes(option)) {
      setData({
        ...data,
        businessTypes: selected.filter(item => item !== option),
      });
    } else {
      setData({
        ...data,
        businessTypes: [...selected, option],
      });
    }
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold ">Become Our Partner</h1>
      
      <div className="space-y-4">
        {businessOptions.map((option) => (
          <label key={option} className="flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={data.businessTypes?.includes(option)}
              onChange={() => handleCheckboxChange(option)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-md ${
                data.businessTypes?.includes(option)
                  ? "border-[#00D2FF] "
                  : "border-gray-300"
              }`}
            >
              {data.businessTypes?.includes(option) && (
                <FaCheck className="text-[#00D2FF] text-sm" />
              )}
            </span>
            <span className="ml-2.5 text-base font-medium">
              {option}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
});

export default Step4;