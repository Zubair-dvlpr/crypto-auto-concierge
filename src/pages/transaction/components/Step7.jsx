import React, { forwardRef, useImperativeHandle } from "react";
import CustomSelect from "../../contact/components/CustomSelect";

const Step7 = forwardRef(({ data, setData }, ref) => {
  const payoutMethodOptions = [
    "Interac e-Transfer (EMT)",
    "Ethereum (ETH)",
    "Litecoin (LTC)",
    "Tether (USDT)",
  ];

  useImperativeHandle(ref, () => ({
    validate: () => {
      if (!data.payoutMethod?.trim()) {
        return "Please select your preferred payout method.";
      }
      return true;
    },
  }));

  return (
    <div>
      <h3 className="appointment-title">
        Once you and the buyer meet at the CAC location, we’ll issue your payout on the spot.
        For wire, we’ll confirm details in advance.
      </h3>

      <label className="block mb-6">
        <CustomSelect
          label="Preferred Payout Method"
          options={payoutMethodOptions}
          selected={data.payoutMethod}
          onChange={(val) =>
            setData((prev) => ({ ...prev, payoutMethod: val }))
          }
        />
      </label>
    </div>
  );
});

export default Step7;
