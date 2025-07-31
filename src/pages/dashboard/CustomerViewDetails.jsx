import { useState } from "react"
import aiuser from "../../assets/images/aiuser.png"
import { FiUpload } from "react-icons/fi"

const CustomerViewDetails = () => {
    const [leftComment, setLeftComment] = useState("")
    const [rightComment, setRightComment] = useState("")
    const [bankAccount, setBankAccount] = useState("00000000000")
    const [transitNumber, setTransitNumber] = useState("00000000000")
    const [institutionNumber, setInstitutionNumber] = useState("00000000000")

    const copyToClipboard = (text) => {
        navigator.clipboard.writeText(text)
    }

    return (
        <div className="min-h-screen bg-gradient text-white p-4 sm:p-6 lg:p-8">
            {/* Header */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-xs sm:text-sm mb-6 sm:mb-8">
                <span>Sale Type: Private</span>
                <span>Current Status: lorem</span>
                <span>Booking time: 12:45 PM</span>
                <span>Date: May12,2026</span>
                <span>Location: lorem</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
                {/* Left Profile Card */}
                <div className="order-1 lg:order-1">
                    <div className="space-y-6">
                        {/* Profile Card */}
                        <div className=" rounded-lg p-6 flex flex-col items-center">
                            <div className="rounded-lg overflow-hidden mb-4 p-2 bg-gradient">
                                <img src={aiuser} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 text-sm sm:text-base transition-all duration-200">
                               <FiUpload />
                                Upload ID
                            </button>
                        </div>

                        {/* Personal Information */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">First Name:</label>
                                    <div className="text-white mt-1">Farhan</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Farhan</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Middle Name:</label>
                                    <div className="text-white mt-1">Farooq</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Farooq</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Last Name:</label>
                                    <div className="text-white mt-1">Farooq</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Farooq</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Phone no:</label>
                                    <div className="text-white mt-1">00-0000-00</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">00-0000-00</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Email:</label>
                                    <div className="text-white text-xs sm:text-sm mt-1 break-all">farooqfarhan752@gmail.com</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white text-xs sm:text-sm break-all">farooqfarhan752@gmail.com</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Document Type:</label>
                                    <div className="text-white mt-1">Drivers license</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Drivers license</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Document Exp:</label>
                                    <div className="text-white mt-1">May 21,2026</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">May 21,2026</div>
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm font-medium">Regulation comment</label>
                                <textarea
                                    placeholder="Enter Comments"
                                    value={leftComment}
                                    onChange={(e) => setLeftComment(e.target.value)}
                                    className="input-style mt-3"
                                    rows={4}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Center Transaction Details */}
                <div className="order-3 lg:order-2">
                    <div className="space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="text-white text-sm font-medium">Transaction id</label>
                                <div className="text-white font-semibold text-lg">FTX-1001</div>
                            </div>
                            <div>
                                <label className="text-white text-sm font-medium">Transaction Date</label>
                                <div className="text-white font-semibold text-lg">May 12,2025</div>
                            </div>
                        </div>

                        <div>
                            <label className="text-white text-sm font-medium">Completed Date</label>
                            <div className="text-white font-semibold text-lg">X/X/XXXX</div>
                        </div>

                        <div>
                            <label className="text-white text-sm font-medium">Vehicle Details</label>
                            <div className="text-white font-semibold text-lg">2024 Lamborghini Urus SE</div>
                        </div>

                        <div>
                            <label className="text-white text-sm font-medium">Vehicle Identification Number</label>
                            <div className="text-white font-semibold text-lg break-all">000000000000000</div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div>
                                <label className="text-white text-sm font-medium">Purchase Price</label>
                                <div className="text-white font-bold text-xl sm:text-2xl">$338,200</div>
                            </div>
                            <div>
                                <label className="text-white text-sm font-medium">Satoshi Drive FEES</label>
                                <div className="text-white font-bold text-xl sm:text-2xl">$1,1100</div>
                            </div>
                        </div>

                        <div>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                                <label className="text-white text-sm font-medium">Satoshi Drive Wallet</label>
                                <span className="text-xs text-slate-400">Copy Wallet Address/Send to buyer</span>
                            </div>
                            <div className="flex items-center gap-2 bg-gradient p-3 rounded-lg">
                                <span className="text-white font-mono text-sm break-all flex-1">cb5dd239ebfe0</span>
                                <button
                                    onClick={() => copyToClipboard("cb5dd239ebfe0")}
                                    className="text-white hover:bg-slate-600 p-2 rounded transition-colors duration-200 flex-shrink-0"
                                >
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Crypto Payment Details */}
                        <div className="bg-gradient rounded-lg p-4">
                            <div className="grid grid-cols-3 gap-4 text-sm font-semibold mb-3">
                                <div className="text-white">Selected Crypto</div>
                                <div className="text-white text-center">Amount</div>
                                <div className="text-white text-right">Value</div>
                            </div>
                            <div className="space-y-2">
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div className="text-white">Bitcoin-($161,000)</div>
                                    <div className="text-white text-center">2</div>
                                    <div className="text-white text-right">$324,000</div>
                                </div>
                                <div className="grid grid-cols-3 gap-4 text-sm">
                                    <div className="text-white">Ethereum($3, 550)</div>
                                    <div className="text-white text-center">4</div>
                                    <div className="text-white text-right">$14,200</div>
                                </div>
                            </div>
                            <div className="border-t border-slate-600 mt-4 pt-4">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white font-semibold">Total -$338,200</span>
                                </div>
                                <div className="text-sm text-slate-400 mt-1">Pending -$0</div>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <div>
                                <label className="text-white text-sm font-medium">Buyer Add On</label>
                                <div className="flex justify-between items-center mt-2 bg-gradient p-3 rounded-lg">
                                    <span className="text-white">Stolen Vehicle Check</span>
                                    <span className="text-white font-semibold">$149,000</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm font-medium">Seller Add On</label>
                                <div className="flex justify-between items-center mt-2 bg-gradient p-3 rounded-lg">
                                    <span className="text-white">Lien Pay Off</span>
                                    <span className="text-white font-semibold">$149.99</span>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label className="text-white text-sm font-medium">Partner Payout:</label>
                            <div className="text-white mt-1">Lorem Ipsum Sit Amit</div>
                        </div>
                    </div>
                </div>

                {/* Right Profile Card */}
                <div className="order-2 lg:order-3">
                    <div className="space-y-6">
                        {/* Profile Card */}
                        <div className=" rounded-lg p-6 flex flex-col items-center">
                            <div className="rounded-lg overflow-hidden mb-4 p-2 bg-gradient">
                                <img src={aiuser} alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-4 sm:px-6 py-2 rounded-lg flex items-center gap-2 text-sm sm:text-base transition-all duration-200">
                               <FiUpload />
                                Upload ID
                            </button>
                        </div>

                        {/* Personal Information */}
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">First Name:</label>
                                    <div className="text-white mt-1">Farhan</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Farhan</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Middle Name:</label>
                                    <div className="text-white mt-1">Farooq</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Farooq</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Last Name:</label>
                                    <div className="text-white mt-1">Farooq</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Farooq</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Phone no:</label>
                                    <div className="text-white mt-1">00-0000-00</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">00-0000-00</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Email:</label>
                                    <div className="text-white text-xs sm:text-sm mt-1 break-all">farooqfarhan752@gmail.com</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white text-xs sm:text-sm break-all">farooqfarhan752@gmail.com</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Document Type:</label>
                                    <div className="text-white mt-1">Drivers license</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">Drivers license</div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-white text-sm font-medium">Document Exp:</label>
                                    <div className="text-white mt-1">May 21,2026</div>
                                </div>
                                <div className="sm:text-right">
                                    <div className="text-white">May 21,2026</div>
                                </div>
                            </div>

                            <div>
                                <label className="text-white text-sm font-medium">Regulation comment</label>
                                <textarea
                                    placeholder="Enter Comments"
                                    value={rightComment}
                                    onChange={(e) => setRightComment(e.target.value)}
                                    className="input-style mt-3"
                                    rows={4}
                                />
                            </div>

                            {/* Banking Information */}
                            <div className="space-y-4 pt-4 border-t border-slate-600">
                                <div>
                                    <label className="text-white text-sm font-medium">Preferred Payout Method</label>
                                    <input
                                        value="Bank Wire Transfer"
                                        readOnly
                                        className="input-style mt-3"
                                    />
                                </div>

                                <div>
                                    <label className="text-white text-sm font-medium">Bank Account Number</label>
                                    <input
                                        value={bankAccount}
                                        onChange={(e) => setBankAccount(e.target.value)}
                                        className="input-style mt-3"
                                    />
                                </div>

                                <div>
                                    <label className="text-white text-sm font-medium">Transit Number</label>
                                    <input
                                        value={transitNumber}
                                        onChange={(e) => setTransitNumber(e.target.value)}
                                        className="input-style mt-3"
                                    />
                                </div>

                                <div>
                                    <label className="text-white text-sm font-medium">Institution Number</label>
                                    <input
                                        value={institutionNumber}
                                        onChange={(e) => setInstitutionNumber(e.target.value)}
                                        className="input-style mt-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-center mt-8 sm:mt-12">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
                    Save
                </button>
            </div>
        </div>
    )
}


export default CustomerViewDetails
