import React, { forwardRef, useImperativeHandle } from "react";
import { FaCheck } from "react-icons/fa"; // Make sure to import your CustomSelect component
import CustomSelect from "../../contact/components/CustomSelect";

const Step2 = forwardRef(({ data, setData }, ref) => {
  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.interested?.trim()) return "Choose Your Interest.";
      if (!data.investmentRange?.trim()) return "Investment range is required.";
      if (!data.schedulePreference?.trim()) return "Please select schedule preference.";
      return true;
    },
  }));

  const interested = [
    { value: "Equity", label: "Equity Investment" },
    { value: "Convertible", label: "Convertible Note / SAFE" },
    { value: "Collaboration", label: "Partnership / Strategic Collaboration" },
    { value: "interested-Other", label: "Other" },
  ];

  const investmentRangeOptions = [
    "Please Select Investment Range",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "$100,000 - $250,000",
    "$250,000 - $500,000",
    "$500,000+"
  ];

  const scheduleOptions = [
    { 
      value: "schedule-yes", 
      label: "Yes, I'd like to schedule a briefing" 
    },
    { 
      value: "schedule-no", 
      label: "No, just send more information" 
    }
  ];

  return (
    <div className="space-y-6">
      <div>
        <h3 className="appointment-title">What are you interested in?</h3>
        {interested.map((option) => (
          <label key={option.value} className="flex items-center cursor-pointer my-2">
            <input
              type="radio"
              name="interested"
              value={option.value}
              checked={data.interested === option.value}
              onChange={() => handleChange("interested", option.value)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-md ${
                data.interested === option.value ? "border-[#00D2FF]" : "border-gray-300"
              }`}
            >
              {data.interested === option.value && <FaCheck className="text-[#00D2FF] text-sm" />}
            </span>
            <span className="ml-2.5 font-poppins text-base font-medium leading-8">
              {option.label}
            </span>
          </label>
        ))}
      </div>

      <div>
        <CustomSelect
          label="Preferred Investment Range"
          options={investmentRangeOptions}
          selected={data.investmentRange}
          onChange={(val) => handleChange("investmentRange", val)}
        />
      </div>

      <div>
        <h3 className="appointment-title">Would You Like to Schedule a Call?</h3>
        {scheduleOptions.map((option) => (
          <label key={option.value} className="flex items-center cursor-pointer my-2">
            <input
              type="radio"
              name="schedulePreference"
              value={option.value}
              checked={data.schedulePreference === option.value}
              onChange={() => handleChange("schedulePreference", option.value)}
              className="hidden"
            />
            <span
              className={`w-5 h-5 flex items-center justify-center border-2 rounded-md ${
                data.schedulePreference === option.value ? "border-[#00D2FF]" : "border-gray-300"
              }`}
            >
              {data.schedulePreference === option.value && <FaCheck className="text-[#00D2FF] text-sm" />}
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

export default Step2;