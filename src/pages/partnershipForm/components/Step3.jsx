import React, { forwardRef, useImperativeHandle } from "react";

const Step3 = forwardRef(({ data, setData }, ref) => {
  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.fullName?.trim()) return "Please enter the buyer's full name.";
      if (!data.position?.trim()) return "Please enter the buyer's position/title.";
      if (!data.emailAddress?.trim()) return "Please enter the buyer's email address.";
      // Simple email format validation (optional)
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.emailAddress)) return "Please enter a valid email address.";
      if (!data.phoneNumber?.trim()) return "Please enter the buyer's phone number.";
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Please Enter the Buyer's Details</h3>

      {/* Full Name */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Full Name</span>
        <input
          type="text"
          placeholder="Enter the full name"
          value={data.fullName || ""}
          onChange={(e) => setData({ ...data, fullName: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Position/Title */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Position/Title</span>
        <input
          type="text"
          placeholder="Enter the job title"
          value={data.position || ""}
          onChange={(e) => setData({ ...data, position: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Email Address */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Email Address</span>
        <input
          type="email"
          placeholder="Contact person's email address."
          value={data.emailAddress || ""}
          onChange={(e) => setData({ ...data, emailAddress: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Phone Number */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Phone Number</span>
        <input
          type="tel"
          placeholder="Contact person's phone number."
          value={data.phoneNumber || ""}
          onChange={(e) => setData({ ...data, phoneNumber: e.target.value })}
          className="input-style"
        />
      </label>
    </div>
  );
});

export default Step3;
