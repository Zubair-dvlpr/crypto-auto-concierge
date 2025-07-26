import React from "react";

const Step3 = ({ data, setData }) => {
  return (
    <div>
       <h3 className="appointment-title">Please Enter The Buyers Details</h3>
      {/* Year / Make / Model */}
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

      {/* Vehicle Identification Number */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Phone Number</span>
        <input
          type="text"
          placeholder="Enter Numberl"
          value={data.number}
          onChange={(e) =>
            setData({ ...data, number: e.target.value })
          }
          className="input-style"
        />
      </label>

      {/* Purchase Price */}
      <label className="block mb-6">
        <span className="block mb-4 text-lg font-semibold leading-7">Enter Email Address</span>
        <input
          type="text"
          placeholder="Enter the agreed purchase price in Canadian Dollars (CAD)."
          value={data.emailAddress}
          onChange={(e) => setData({ ...data, emailAddress: e.target.value })}
          className="input-style"
        />
      </label>

    </div>
  );
};

export default Step3;