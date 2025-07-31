import React from 'react'
import DealTable from './Components/DealTable'
import { FaEdit, FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Transactions = () => {


    const columns = [
  { label: "Deal ID", key: "id" },
  { label: "Buyer", key: "buyer" },
  { label: "Vehicle", key: "vehicle" },
  { label: "Amount", key: "amount" },
  { label: "Satoshi Drive Fee", key: "cacFee" },
  { label: "Partner fee", key: "partnerFee" },
  { label: "Date Created", key: "date" },
  { label: "Status", key: "status" },
  { label: "Actions", key: "actions", render: (item) => (
    <div className="flex justify-center gap-3">
      <Link to={'/customer-details'} className="text-white hover:text-[#D015FF]">
        <FaEye />
      </Link>
      <Link className="text-white hover:text-[#D015FF]">
        <FaEdit />
      </Link>
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
