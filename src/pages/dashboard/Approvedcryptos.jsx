import React from 'react'
import DealTable from './Components/DealTable'

const Approvedcryptos = () => {

    const columns = [
        { label: "Crypto Name", key: "Cryptoname" },
        { label: "Description", key: "Desc" },
        {
            label: "Actions",
            key: "actions",
            render: (item) => (
                <div className="flex justify-center gap-2">
                    <div className='d-btn-style cursor-pointer p-[1px]'>
                        <button className="bg-black cursor-pointer h h-full rounded-lg px-2">Remove</button>
                    </div>
                    <button className="d-btn-style py-2 px-5">Add</button>
                </div>
            )
        }
    ];


    const deals = [

        ...Array(10).fill({
            Cryptoname: "Bitcoin (BTC)",
            Desc: "The first decentralized cryptocurrency.",
        }),
    ];

    return (
        <div >
            <h2 className='text-center text-4xl font-bold leading-12'>Approved Cryptos</h2>

            <DealTable columns={columns} data={deals} />
        </div>
    )
}

export default Approvedcryptos
