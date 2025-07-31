import React, { forwardRef, useImperativeHandle } from "react";

const Step3 = forwardRef(({ data, setData }, ref) => {
  const handleChange = (field, value) => {
    setData((prev) => ({ ...prev, [field]: value }));
  };

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.fullName?.trim()) return "Please enter your full name.";
      if (!data.position?.trim()) return "Please enter your position/title.";
      if (!data.emailAddress?.trim()) return "Please enter your email address.";
      // Simple email format validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.emailAddress)) return "Please enter a valid email address.";
      if (!data.phoneNumber?.trim()) return "Please enter your phone number.";
      // Website is optional, no validation needed
      return true;
    },
  }));

  return (
    <div className="space-y-6">
      <h3 className="appointment-title">Introduce Yourself</h3>
      <p className="text-gray-600 mb-6">Our Team Will Review Your Message And Respond Within 1-2 Business Days.</p>

      {/* Full Name */}
      <div>
        <label className="block mb-4 text-lg font-semibold leading-7">Full Name</label>
        <input
          type="text"
          placeholder="Enter the full name"
          value={data.fullName || ""}
          onChange={(e) => handleChange("fullName", e.target.value)}
          className="input-style"
        />
      </div>

      {/* Position/Title */}
      <div>
        <label className="block mb-4 text-lg font-semibold leading-7">Position/Title</label>
        <input
          type="text"
          placeholder="Enter the job title"
          value={data.position || ""}
          onChange={(e) => handleChange("position", e.target.value)}
          className="input-style"
        />
      </div>

      {/* Email Address */}
      <div>
        <label className="block mb-4 text-lg font-semibold leading-7">Email Address</label>
        <input
          type="email"
          placeholder="Contact person's email address"
          value={data.emailAddress || ""}
          onChange={(e) => handleChange("emailAddress", e.target.value)}
          className="input-style"
        />
      </div>

      {/* Phone Number */}
      <div>
        <label className="block mb-4 text-lg font-semibold leading-7">Phone Number</label>
        <input
          type="tel"
          placeholder="Contact person's phone number"
          value={data.phoneNumber || ""}
          onChange={(e) => handleChange("phoneNumber", e.target.value)}
          className="input-style"
        />
      </div>

      {/* Website (Optional) */}
      <div>
        <label className="block text-sm font-medium  mb-1">Website (Optional)</label>
        <input
          type="url"
          placeholder="Please enter the website"
          value={data.website || ""}
          onChange={(e) => handleChange("website", e.target.value)}
          className="input-style"
        />
      </div>
    </div>
  );
});

export default Step3;