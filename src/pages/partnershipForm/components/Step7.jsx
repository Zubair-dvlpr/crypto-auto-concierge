import React from "react";
import CustomSelect from "../../contact/components/CustomSelect";

const Step7 = ({ data, setData }) => {
    // Inside ContactForm component
    const payoutMethodOptions = ["Interac e-Transfer (EMT)", "Ethereum (ETH)", "Litecoin (LTC)", "Tether (USDT)"];

    return (
        <div>
            <h3 className="appointment-title">
                Once you and the buyer meet at the Satoshi Drive location, we’ll issue your payout on the spot. For wire, we’ll confirm details in advance.
            </h3>
            {/* Preferred Payment Method */}
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
};

export default Step7;
