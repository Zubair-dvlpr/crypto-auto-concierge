import React, { forwardRef, useImperativeHandle } from "react";
import CustomSelect from "../../contact/components/CustomSelect";

const Step2 = forwardRef(({ data, setData }, ref) => {
  const saletypeptions = ["Private Sale", "Dealership"];

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.yearMakeModel?.trim()) return "Please enter Year / Make / Model.";
      if (!data.vehicleIdentificationNumber?.trim()) return "Please enter the Vehicle Identification Number.";
      if (!data.purchasePrice?.trim()) return "Please enter the Purchase Price.";
      if (!data.saleType) return "Please select a Sale Type.";
      if (data.saleType === "Dealership" && !data.dealershipName?.trim()) {
        return "Please enter the Dealership Name.";
      }
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">Please Enter Vehicle Details</h3>

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

      {/* Sale Type Dropdown */}
      <div className="mb-4">
        <CustomSelect
          label="Sale Type"
          options={saletypeptions}
          selected={data.saleType}
          onChange={(val) =>
            setData((prev) => ({ ...prev, saleType: val, dealershipName: "" }))
          }
        />
      </div>

      {/* Dealership Name (only if Dealership is selected) */}
      {data.saleType === "Dealership" && (
        <label className="block mb-4">
          <span className="block mb-3 text-lg font-semibold leading-7">Dealership Name</span>
          <input
            type="text"
            placeholder="Enter the name of the dealership"
            value={data.dealershipName || ""}
            onChange={(e) =>
              setData({ ...data, dealershipName: e.target.value })
            }
            className="input-style"
          />
        </label>
      )}
    </div>
  );
});

export default Step2;
