import React from "react";
import CustomSelect from "../../contact/components/CustomSelect";

const Step7 = ({ data, setData }) => {
    // Inside ContactForm component
    const payoutMethodOptions = ["Interac e-Transfer (EMT)", "Ethereum (ETH)", "Litecoin (LTC)", "Tether (USDT)" ];

    return (
        <div>

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
