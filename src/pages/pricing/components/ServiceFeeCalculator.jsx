import React, { useState } from 'react';

import feeIcon from '../../../assets/images/feeIcon.svg';
const ServiceFeeCalculator = () => {
    const [vehiclePrice, setVehiclePrice] = useState('');
    const [serviceFee, setServiceFee] = useState('');
    const [showMessage, setShowMessage] = useState(true);

    // Example formula: service fee = 5% of vehicle price
    const calculateFee = () => {
        const price = parseFloat(vehiclePrice);
        if (!isNaN(price) && price > 0) {
            const fee = (price * 0.05).toFixed(4); // showing up to 4 decimal places
            setServiceFee(fee);
            setShowMessage(false);
        } else {
            setServiceFee('');
            setShowMessage(true);
        }
    };

    return (
        <section className=" px-2 md:px-0 rounded-xl shadow-md max-w-[1240px] mx-auto">
            <h2 className="text-4xl font-bold leading-12 capitalize text-center  mb-8">
                Calculate Your Service Fee
            </h2>

            {/* Form */}
            <div className="grid bg-gradient-to-r p-8 rounded-xl from-[#2e6cf41a] to-[#00d2ff1a] grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Vehicle Price Input */}
                <div>
                    <label className="block text-white text-xl leading-7 capitalize font-medium mb-6">
                        Enter Your Vehicle Purchase Price
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        value={vehiclePrice}
                        onChange={(e) => setVehiclePrice(e.target.value)}
                        className="w-full p-5 rounded-xl focus:outline-none bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Calculated Service Fee */}
                <div>
                    <label className="block text-white text-xl leading-7 capitalize font-medium mb-6">
                        Your Total Service Fee Will Be
                    </label>
                    <input
                        type="text"
                        value={serviceFee ? `${serviceFee} BTC` : ''}
                        readOnly
                        placeholder="Calculated Fee"
                        className="w-full p-5 rounded-xl focus:outline-none bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] focus:ring-2 focus:ring-purple-500"
                    />
                </div>

                {/* Button */}
                <div className="text-center col-span-full mb-4">
                    <button
                        onClick={calculateFee}
                        className="btn-style"
                    >

                        Calculate Now
                    </button>
                </div>
            </div>



            {/* Message */}
            {serviceFee && (
                <div className="flex items-center  text-lg mt-4">
                    <img src={feeIcon} alt="icon" className=" mr-2" />
                    {serviceFee
                        ? `Your calculated service fee is: ${serviceFee} BTC`
                        : 'Our calculator shows the total fee you’ll pay — no surprises.'}
                </div>

            )}
        </section>
    );
};

export default ServiceFeeCalculator;
