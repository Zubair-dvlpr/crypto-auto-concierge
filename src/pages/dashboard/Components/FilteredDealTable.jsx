import React, { useState } from "react";
import DealTable from "./DealTable"; // Ensure path is correct
import { FaPlus, FaSearch } from "react-icons/fa";

// Dummy Data Example
const allData = {
    seller: [
        {
            id: 1,
            FirstN: "Ali",
            LastN: "Khan",
            Email: "ali@example.com",
            Phone: "1234567890",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-20",
        },
        {
            id: 2,
            FirstN: "Ahmed",
            LastN: "Raza",
            Email: "ahmed@example.com",
            Phone: "9876543210",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-21",
        },
        {
            id: 5,
            FirstN: "Hassan",
            LastN: "Malik",
            Email: "hassan@example.com",
            Phone: "8888888888",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-22",
        },
        {
            id: 6,
            FirstN: "Noman",
            LastN: "Iqbal",
            Email: "noman@example.com",
            Phone: "7777777777",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-23",
        },
        {
            id: 7,
            FirstN: "Usman",
            LastN: "Ali",
            Email: "usman@example.com",
            Phone: "6666666666",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-24",
        },
    ],
    buyer: [
        {
            id: 3,
            FirstN: "Sara",
            LastN: "Sheikh",
            Email: "sara@example.com",
            Phone: "5555555555",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-18",
        },
        {
            id: 4,
            FirstN: "Zara",
            LastN: "Kamil",
            Email: "zara@example.com",
            Phone: "4444444444",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-19",
        },
        {
            id: 8,
            FirstN: "Fatima",
            LastN: "Noor",
            Email: "fatima@example.com",
            Phone: "3333333333",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-20",
        },
        {
            id: 9,
            FirstN: "Ayesha",
            LastN: "Mirza",
            Email: "ayesha@example.com",
            Phone: "2222222222",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-21",
        },
        {
            id: 10,
            FirstN: "Hina",
            LastN: "Farooq",
            Email: "hina@example.com",
            Phone: "1111111111",
            Crypto: "Bitcoin (BTC)",
            Transaction: "2025-07-22",
        },
    ],
};


const FilteredDealTable = () => {
    const [activeTab, setActiveTab] = useState("seller");
    const [searchText, setSearchText] = useState("");

    const columns = [
        { label: "First Name", key: "FirstN" },
        { label: "Last Name", key: "LastN" },
        { label: "Email", key: "Email" },
        { label: "Phone Number", key: "Phone" },
        { label: "Crypto Used", key: "Crypto" },
        { label: "Transaction Date", key: "Transaction" },
    ];

    const filteredData = allData[activeTab].filter((item) => {
        const fullName = `${item.FirstN} ${item.LastN}`.toLowerCase();
        return fullName.includes(searchText.toLowerCase());
    });

    return (
        <div className="p-4">
            {/* Top Header Controls */}
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-4">
                {/* Tabs */}
                <div className="flex gap-4">
                    {["seller", "buyer"].map((tab) => (
                        <button
                            key={tab}
                            onClick={() => {
                                setActiveTab(tab);
                                setSearchText(""); // clear search when tab switches
                            }}
                            className={`px-4 py-2 cursor-pointer text-sm font-semibold border-t ${activeTab === tab
                                    ? " text-white border-[#D015FF]"
                                    : "bg-transparent  text-white border-transparent"
                                }`}
                        >
                            {tab.charAt(0).toUpperCase() + tab.slice(1)}
                        </button>
                    ))}
                </div>

                {/* Search */}
                <div className="relative max-w-xs w-full ml-auto">
                    <input
                        type="text"
                        placeholder="Search by name..."
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 rounded-md bg-gradient text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#D015FF]"
                    />
                    <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
            </div>

            {/* Table */}
            <DealTable columns={columns} data={filteredData} />
        </div>
    );
};

export default FilteredDealTable;
