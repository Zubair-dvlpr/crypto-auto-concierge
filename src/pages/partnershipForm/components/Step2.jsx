import React, { forwardRef, useImperativeHandle } from "react";

const Step2 = forwardRef(({ data, setData }, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.companyName?.trim()) return "Company name is required.";
      if (!data.businessNumber?.trim()) return "Business number is required.";
      if (!data.registrationLocation?.trim()) return "Registration location is required.";
      if (!data.headOfficeAddress?.trim()) return "Head office address is required.";
      // companyWebsite is optional, no validation needed here
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Company Information</h3>

      {/* Company Name */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Company Name</span>
        <input
          type="text"
          placeholder="Enter the official name"
          value={data.companyName || ""}
          onChange={(e) => setData({ ...data, companyName: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Registered Business Number (BN) */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Registered Business Number (BN)</span>
        <input
          type="text"
          placeholder="Enter BN"
          value={data.businessNumber || ""}
          onChange={(e) => setData({ ...data, businessNumber: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Country & Province of Registration */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Country & Province of Registration</span>
        <input
          type="text"
          placeholder="Enter Country and province where registered"
          value={data.registrationLocation || ""}
          onChange={(e) => setData({ ...data, registrationLocation: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Head Office Address */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Head Office Address</span>
        <input
          type="text"
          placeholder="Enter the full address"
          value={data.headOfficeAddress || ""}
          onChange={(e) => setData({ ...data, headOfficeAddress: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Company Website (optional) */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Company Website (if applicable)</span>
        <input
          type="text"
          placeholder="Company Website (if applicable)"
          value={data.companyWebsite || ""}
          onChange={(e) => setData({ ...data, companyWebsite: e.target.value })}
          className="input-style"
        />
      </label>
    </div>
  );
});

export default Step2;
