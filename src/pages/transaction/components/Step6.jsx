import React, { forwardRef, useImperativeHandle } from "react";

const Step6 = forwardRef(({ data, setData }, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.billingName?.trim()) return "Please enter the seller’s full legal name.";
      if (!data.billingNumber?.trim()) return "Please enter the seller’s phone number.";
      if (!data.billingEmail?.trim()) return "Please enter the seller’s email address.";
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Please Enter The Seller’s Details</h3>

      {/* Full Legal Name */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Full Legal Name</span>
        <input
          type="text"
          placeholder="Enter Name"
          value={data.billingName}
          onChange={(e) => setData({ ...data, billingName: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Phone Number */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Phone Number</span>
        <input
          type="text"
          placeholder="Enter Number"
          value={data.billingNumber}
          onChange={(e) => setData({ ...data, billingNumber: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Email Address */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Email Address</span>
        <input
          type="text"
          placeholder="Enter Email"
          value={data.billingEmail}
          onChange={(e) => setData({ ...data, billingEmail: e.target.value })}
          className="input-style"
        />
      </label>
    </div>
  );
});

export default Step6;
