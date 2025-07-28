import React from 'react'
import DealTable from './Components/DealTable'

const Transactiontable = () => {
    const columns = [
        { label: "ID", key: "id" },
        { label: "Buyer", key: "buyer" },
        { label: "Seller", key: "seller" },
        { label: "Vehicle", key: "vehicle" },
        { label: "Amount", key: "amount" },
        { label: "Status", key: "status" },
        { label: "Crypto Used", key: "crypto" },
        { label: "Funded", key: "funded" },
        { label: "Payout Method", key: "PayoutMethod" },
        {
            label: "Actions", key: "actions", render: (item) => (
                <div className="flex justify-center gap-3">
                    <button className="text-white hover:text-[#D015FF]">
                        <FaEye />
                    </button>
                    <button className="text-white hover:text-[#D015FF]">
                        <FaEdit />
                    </button>
                </div>
            )
        }
    ];


    const deals = [

        ...Array(14).fill({
            id: "TX-1001",
            buyer: "John D.",
            seller: "Mike S",
            amount: "$65,000",
            vehicle: "2022 Audi Q7",
            cacFee: "$65,000",
            status: "In Progress",
            crypto: "BTC",
            funded: "Funded",
            PayoutMethod: "ETC",
        }),
    ];


    return (
        <div>
            <h2 className='text-center text-4xl font-bold leading-12'>All Transactions Table</h2>

            <DealTable columns={columns} data={deals} />
        </div>
    )
}

export default Transactiontable
