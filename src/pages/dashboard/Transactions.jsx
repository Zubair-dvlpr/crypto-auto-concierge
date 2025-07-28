import React from 'react'
import DealTable from './Components/DealTable'

const Transactions = () => {


    const columns = [
  { label: "Deal ID", key: "id" },
  { label: "Buyer", key: "buyer" },
  { label: "Vehicle", key: "vehicle" },
  { label: "Amount", key: "amount" },
  { label: "Cac Fee", key: "cacFee" },
  { label: "Partner fee", key: "partnerFee" },
  { label: "Date Created", key: "date" },
  { label: "Status", key: "status" },
  { label: "Actions", key: "actions", render: (item) => (
    <div className="flex justify-center gap-3">
      <button className="text-white hover:text-[#D015FF]">
        <FaEye />
      </button>
      <button className="text-white hover:text-[#D015FF]">
        <FaEdit />
      </button>
    </div>
  )}
];


        const deals = [
            {
                id: "TX-1001",
                buyer: "John D.",
                vehicle: "Mike S",
                amount: "2022 Audi Q7",
                cacFee: "$65,000",
                partnerFee: "In Progress",
                date: "BTC",
                status: "Funded",
            },
            // Repeat for demo
            ...Array(10).fill({
                id: "TX-1001",
                buyer: "John D.",
                vehicle: "Mike S",
                amount: "2022 Audi Q7",
                cacFee: "$65,000",
                partnerFee: "In Progress",
                date: "BTC",
                status: "Funded",
            }),
        ];

        return (
            <div >
                <h2 className='text-center text-4xl font-bold leading-12'>Transactions</h2>

                <DealTable columns={columns} data={deals} />
            </div>
        )
    }

    export default Transactions
