import React, { forwardRef, useImperativeHandle } from "react";

const Step3 = forwardRef(({ data, setData }, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.name?.trim()) return "Please enter the buyer's full legal name.";
      if (!data.number?.trim()) return "Please enter the buyer's phone number.";
      if (!data.emailAddress?.trim()) return "Please enter the buyer's email address.";
      // Optional: Add regex validation for email and phone format
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Please Enter The Buyer’s Details</h3>

      {/* Full Name */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Full Legal Name</span>
        <input
          type="text"
          placeholder="Enter Name"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Phone Number */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Phone Number</span>
        <input
          type="text"
          placeholder="Enter Number"
          value={data.number}
          onChange={(e) => setData({ ...data, number: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Email Address */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Email Address</span>
        <input
          type="text"
          placeholder="Enter Email Address"
          value={data.emailAddress}
          onChange={(e) => setData({ ...data, emailAddress: e.target.value })}
          className="input-style"
        />
      </label>
    </div>
  );
});

export default Step3;
