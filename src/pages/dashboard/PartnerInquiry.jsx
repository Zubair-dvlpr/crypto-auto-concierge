import React from 'react'
import DealTable from './Components/DealTable'
import { FaPlus } from 'react-icons/fa';

const PartnerInquiry = () => {


    const columns = [
        { label: "Name", key: "name" },
        { label: "Phone", key: "phone" },
        { label: "Email Address", key: "mail" },
        { label: "BN", key: "bn" },
        { label: "Position", key: "position" },
        { label: "Business type", key: "business" },
        { label: "Company name", key: "company" },
        { label: "office address", key: "office" },
        {
            label: "Actions", key: "actions", render: (item) => (
                <button className="d-btn-style py-2 px-5">
                    Add
                </button>
            )
        }
    ];


    const deals = [

        ...Array(10).fill({
            name: "Farhan",
            phone: "00-0000-00",
            mail: "Farhan753@gmial.com",
            bn: "12-12-12",
            position: "Owner",
            business: "OTC DESK",
            company: "Comapny ABC",
            office: "Lorem , canada",
        }),
    ];

    return (
        <div >
            <h2 className='text-center text-4xl font-bold leading-12'>Partner Inquiry</h2>

            <DealTable columns={columns} data={deals} />
        </div>
    )
}

export default PartnerInquiry
