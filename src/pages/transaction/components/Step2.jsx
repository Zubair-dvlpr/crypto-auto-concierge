import React from "react";

const Step2 = ({ data, setData }) => {
  return (
    <div>
      <h3 className="appointment-title">Vehicle Information</h3>

      {/* Year / Make / Model */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Year / Make / Model</span>
        <input
          type="text"
          placeholder="Please enter the vehicle's year, make, and model"
          value={data.yearMakeModel}
          onChange={(e) => setData({ ...data, yearMakeModel: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Vehicle Identification Number */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Vehicle Identification Number</span>
        <input
          type="text"
          placeholder="Provide the 17-character VIN for the vehicle"
          value={data.vehicleIdentificationNumber}
          onChange={(e) =>
            setData({ ...data, vehicleIdentificationNumber: e.target.value })
          }
          className="input-style"
        />
      </label>

      {/* Purchase Price */}
      <label className="block mb-4">
        <span className="block mb-3 text-lg font-semibold leading-7">Purchase Price</span>
        <input
          type="text"
          placeholder="Enter the agreed purchase price in Canadian Dollars (CAD)."
          value={data.purchasePrice}
          onChange={(e) => setData({ ...data, purchasePrice: e.target.value })}
          className="input-style"
        />
      </label>

      {/* Sale Type */}
      <label className="block">
        <span className="block mb-3 text-lg font-semibold leading-7">Sale Type</span>
        <input
          type="text"
          placeholder="Private Sale or Dealer sale"
          value={data.saleType}
          onChange={(e) => setData({ ...data, saleType: e.target.value })}
          className="input-style"
        />
      </label>
    </div>
  );
};

export default Step2;