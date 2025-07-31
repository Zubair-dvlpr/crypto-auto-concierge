import React, { useState } from 'react';
import feeIcon from '../../../assets/images/feeIcon.svg';

const ServiceFeeCalculator = () => {
    const [vehiclePrice, setVehiclePrice] = useState('');
    const [serviceFee, setServiceFee] = useState('');
    const [showMessage, setShowMessage] = useState(true);

    const calculateFee = () => {
        const price = parseFloat(vehiclePrice);
        if (!isNaN(price) && price > 0) {
            let fee = 0;
            
            if (price >= 5000 && price <= 10000) {
                fee = 595;
            } else if (price >= 10001 && price <= 25000) {
                fee = 895;
            } else if (price >= 25001 && price <= 50000) {
                fee = 1495;
            } else if (price >= 50001 && price <= 100000) {
                fee = Math.max(price * 0.0225, 1750);
            } else if (price >= 100001 && price <= 250000) {
                fee = Math.max(price * 0.02, 2750);
            } else if (price >= 250001 && price <= 500000) {
                fee = Math.max(price * 0.015, 4000);
            } else if (price > 500000) {
                fee = Math.max(price * 0.0125, 6000);
            } else {
                fee = 0; // Price too low
            }
            
            setServiceFee(fee.toFixed(2));
            setShowMessage(false);
        } else {
            setServiceFee('');
            setShowMessage(true);
        }
    };

    return (
        <section className="px-2 md:px-0 rounded-xl shadow-md max-w-[1240px] mx-auto">
            <h2 className="text-4xl font-bold leading-12 capitalize text-center mb-8">
                Calculate Your Service Fee
            </h2>

            {/* Form */}
            <div className="grid bg-gradient-to-r p-8 rounded-xl from-[#2e6cf41a] to-[#00d2ff1a] grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                {/* Vehicle Price Input */}
                <div>
                    <label className="block text-white text-xl leading-7 capitalize font-medium mb-6">
                        Enter Your Vehicle Purchase Price ($)
                    </label>
                    <input
                        type="number"
                        placeholder="Enter Price"
                        value={vehiclePrice}
                        onChange={(e) => setVehiclePrice(e.target.value)}
                        className="w-full p-5 rounded-xl focus:outline-none bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] focus:ring-2 focus:ring-purple-500"
                        min="5000"
                    />
                </div>

                {/* Calculated Service Fee */}
                <div>
                    <label className="block text-white text-xl leading-7 capitalize font-medium mb-6">
                        Your Total Service Fee Will Be ($)
                    </label>
                    <input
                        type="text"
                        value={serviceFee ? `$${serviceFee}` : ''}
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
                <div className="flex items-center text-lg mt-4">
                    <img src={feeIcon} alt="icon" className="mr-2" />
                    {`Your calculated service fee is: $${serviceFee}`}
                </div>
            )}
            {showMessage && (
                <div className="flex items-center text-lg mt-4">
                    <img src={feeIcon} alt="icon" className="mr-2" />
                    Our calculator shows the total fee you'll pay — no surprises.
                </div>
            )}
        </section>
    );
};

export default ServiceFeeCalculator;