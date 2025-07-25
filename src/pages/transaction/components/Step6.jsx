import React from "react";

const Step6 = ({ data, setData }) => {
  return (
    <div>
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
};

export default Step6;
