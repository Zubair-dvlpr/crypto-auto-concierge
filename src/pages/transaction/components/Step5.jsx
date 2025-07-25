import React from "react";
import { FaCheck } from "react-icons/fa";

const Step5 = ({ data, setData }) => {
    const conciergeServices = [
        { value: "Vehicle Registration & Paperwork Assistance — $500", label: "Add this service?" },
        { value: "Canada Wide Stolen Vehicle / Lien Check — $250", label: "Add this service?" },
    ];

    return (
        <div>
            <h3 className="appointment-title">Optional Concierge Services</h3>
            <div className="space-y-4">
                {conciergeServices.map((option) => (
                    <div key={option.value}>
                        <h3 className="text-lg font-semibold mb-3 leading-8 text-[#fffffff1]">{option.value}</h3>
                        <label
                            
                            className="flex items-center cursor-pointer"
                        >
                            {/* Hidden Radio Input */}
                            <input
                                type="radio"
                                name="party"
                                value={option.value}
                                checked={data.conciergeServices === option.value}
                                onChange={(e) => setData({ ...data, conciergeServices: e.target.value })}
                                className="hidden"
                            />
                            {/* Custom Radio Button */}
                            <span
                                className={`w-5 h-5 flex items-center justify-center border-1 rounded-md ${data.conciergeServices === option.value
                                    ? "border-[#00D2FF]"
                                    : "border-[#00D2FF]"
                                    }`}
                            >
                                {data.conciergeServices === option.value && (
                                    <FaCheck className="text-[#00D2FF] text-sm" />
                                )}
                            </span>
                            <span className="ml-2.5 font-poppins text-base font-medium leading-8">{option.label}</span>
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Step5;