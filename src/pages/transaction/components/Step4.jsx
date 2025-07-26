import React from "react";
import CustomSelect from "../../contact/components/CustomSelect";

const Step4 = ({ data, setData }) => {
    // Inside ContactForm component
    const crypto1Options = ["Bitcoin (BTC)", "Ethereum (ETH)", "Litecoin (LTC)", "Tether (USDT)" ];
    const crypto2Options = ["Dogecoin (DOGE)", "Cardano (ADA)", "Ripple (XRP)", "Solana (SOL)" ];

    return (
        <div>
 <h3 className="appointment-title">Please Select Payment  Options</h3>
            {/* Preferred Payment Method */}
            <label className="block mb-6">
                
                <CustomSelect
                    label="Preferred Payment Method"
                    options={crypto1Options}
                    selected={data.crypto1}
                    onChange={(val) =>
                        setData((prev) => ({ ...prev, crypto1: val }))
                    }
                />
                
            </label>

            {/* Amount for First Crypto */}
            <label className="block mb-6">
                <span className="block mb-4 text-lg font-semibold leading-7">Amount</span>
                <input
                    type="text"
                    placeholder="Enter the amount for this cryptocurrency."
                    value={data.crypto1Amount}
                    onChange={(e) => setData({ ...data, crypto1Amount: e.target.value })}
                    className="input-style"
                />
            </label>

            {/* Crypto #2 (Optional) */}
            <label className="block mb-6">
                <CustomSelect
                    label="Crypto #2 (Optional)"
                    options={crypto2Options}
                    selected={data.crypto2}
                    onChange={(val) =>
                        setData((prev) => ({ ...prev, crypto2: val }))
                    }
                />
            </label>

            {/* Amount for Crypto #2 */}
            <label className="block mb-6">
                <span className="block mb-4 text-lg font-semibold leading-7">Current Live Market Rate</span>
                <input
                    type="text"
                    placeholder="Live Prices are Provided by Coinbase"
                    value={data.crypto2Amount}
                    onChange={(e) => setData({ ...data, crypto2Amount: e.target.value })}
                    className="input-style"
                />
            </label>

            {/* Total Dollar Amount */}
            <label className="block mb-6">
                <span className="block mb-4 text-lg font-semibold leading-7">CAC Fees</span>
                <input
                    type="text"
                    placeholder="Total Value in CAD"
                    value={data.totalCAD}
                    onChange={(e) => setData({ ...data, totalCAD: e.target.value })}
                    className="input-style"
                />
            </label>

        </div>
    );
};

export default Step4;
