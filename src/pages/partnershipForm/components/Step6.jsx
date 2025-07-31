import React, { forwardRef, useImperativeHandle } from "react";
import { GoDotFill } from "react-icons/go";

const Step6 = forwardRef(({ data, setData }, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.businessDescription || data.businessDescription.trim() === "") {
        return "Please provide a description of your business and partnership interest.";
      }
      if (!data.confirmed) {
        return "Please confirm that the provided information is accurate.";
      }
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Business Description & Confirmation</h3>

      {/* Business Description & Partnership Interest */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">
          Business Description & Partnership Interest
        </span>
        <textarea
          rows="5"
          placeholder="Describe your business and your interest in partnering with Satoshi Drive"
          value={data.businessDescription || ""}
          onChange={(e) => setData({ ...data, businessDescription: e.target.value })}
          className="input-style"
        ></textarea>
      </label>

      {/* Confirmation Checkbox */}
      <div className="mb-6">
        <label className="flex items-start cursor-pointer">
          <input
            type="checkbox"
            checked={data.confirmed || false}
            onChange={(e) => setData({ ...data, confirmed: e.target.checked })}
            className="hidden"
          />
          <span
            className={`w-[42px] h-5 flex items-center justify-center border-2 rounded-full mt-1 ${
              data.confirmed ? "border-[#00D2FF]" : "border-[#00D2FF]"
            }`}
          >
            {data.confirmed && <GoDotFill className="text-[#00D2FF]" />}
          </span>
          <span className="ml-2.5 font-poppins text-base font-medium leading-7">
            I confirm that the information provided is accurate and understand that Satoshi Drive will conduct a full partner vetting process prior to any partnership agreement.
          </span>
        </label>
      </div>
    </div>
  );
});

export default Step6;
