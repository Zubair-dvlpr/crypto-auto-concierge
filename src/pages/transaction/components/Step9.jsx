import React, { forwardRef, useImperativeHandle } from "react";
import { FaCheck } from "react-icons/fa";

const Step9 = forwardRef(({ data, setData }, ref) => {
  const conciergeOptions = [
    {
      key: "registration",
      description:
        "Both Buyer and Seller must present valid government-issued photo ID at the time of transaction.",
    },
    {
      key: "lienCheck",
      description:
        "I confirm that the information provided is accurate and I agree to Crypto Auto Concierge’s Terms of Service.",
    },
  ];

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.registration) return "Please confirm the ID verification requirement.";
      if (!data.lienCheck) return "Please accept the Terms of Service to proceed.";
      return true;
    },
  }));

  const toggleOption = (key) => {
    setData({ ...data, [key]: !data[key] });
  };

  return (
    <div>
      <h3 className="appointment-title">
        Let us Do the Work — Just Answer a Few Quick Questions
      </h3>

      {/* Additional Notes Field */}
      <div className="mb-6">
        <label className="block mb-2 font-medium text-white text-base">
          Additional Notes or Special Instructions
        </label>
        <textarea
          placeholder="Add relevant details (optional)"
          value={data.additionalNotes}
          rows={6}
          onChange={(e) => setData({ ...data, additionalNotes: e.target.value })}
          className="input-style w-full"
        />
      </div>

      {/* Confirmation Checkboxes */}
      <div className="space-y-6">
        {conciergeOptions.map(({ key, description }) => (
          <div key={key}>
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={data[key]}
                onChange={() => toggleOption(key)}
                className="hidden"
              />
              <span className="w-8 h-5 mt-1 flex items-center justify-center border border-[#00D2FF] rounded-md">
                {data[key] && <FaCheck className="text-[#00D2FF] text-sm" />}
              </span>
              <div className="ml-2.5 font-poppins text-base font-medium leading-8 text-white">
                {description}
              </div>
            </label>
          </div>
        ))}
      </div>
    </div>
  );
});

export default Step9;
