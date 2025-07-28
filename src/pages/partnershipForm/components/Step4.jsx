import React, { forwardRef, useImperativeHandle } from "react";
import { FaCheck } from "react-icons/fa";

const Step4 = forwardRef(({ data, setData }, ref) => {
  const businessOptions = [
    { value: "MSB", label: "Licensed Money Services Business (MSB)" },
    { value: "OTC", label: "OTC Desk / Liquidity Provider" },
    { value: "Currency", label: "Currency Exchange" },
    { value: "Auto", label: "Automotive Dealer / Service Provider" },
    { value: "Other", label: "Other" },
  ];

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.businessTypes || data.businessTypes.length === 0) {
        return "Please select at least one business type.";
      }
      return true;
    },
  }));

  const handleCheckboxChange = (value) => {
    const selected = data.businessTypes || [];
    if (selected.includes(value)) {
      setData({
        ...data,
        businessTypes: selected.filter((item) => item !== value),
      });
    } else {
      setData({
        ...data,
        businessTypes: [...selected, value],
      });
    }
  };

  return (
    <div>
      <h3 className="appointment-title">Business Type</h3>

      <div className="space-y-4">
        {businessOptions.map((option) => (
          <label key={option.value} className="flex items-center cursor-pointer">
            {/* Hidden Checkbox Input */}
            <input
              type="checkbox"
              value={option.value}
              checked={data.businessTypes?.includes(option.value)}
              onChange={() => handleCheckboxChange(option.value)}
              className="hidden"
            />
            {/* Custom Checkbox Style */}
            <span
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-md ${
                data.businessTypes?.includes(option.value)
                  ? "border-[#00D2FF]"
                  : "border-gray-300"
              }`}
            >
              {data.businessTypes?.includes(option.value) && (
                <FaCheck className="text-[#00D2FF] text-sm" />
              )}
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

export default Step4;
