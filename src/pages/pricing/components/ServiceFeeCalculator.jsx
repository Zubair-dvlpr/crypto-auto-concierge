import React, { useState } from 'react';
import feeIcon from '../../../assets/images/feeIcon.svg';

const ServiceFeeCalculator = () => {
    const [vehiclePrice, setVehiclePrice] = useState('');
    const [serviceFee, setServiceFee] = useState('');
    const [showMessage, setShowMessage] = useState(true);

    // Format number with commas and 2 decimal places
    const formatCurrency = (num) => {
        return num.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    };

    const calculateFee = () => {
        // Remove all non-numeric characters except decimal point
        const numericValue = parseFloat(vehiclePrice.replace(/[^0-9.]/g, ''));
        
        if (!isNaN(numericValue) && numericValue > 0) {
            let fee = 0;
            
            if (numericValue >= 5000 && numericValue <= 10000) {
                fee = 595;
            } else if (numericValue >= 10001 && numericValue <= 25000) {
                fee = 895;
            } else if (numericValue >= 25001 && numericValue <= 50000) {
                fee = 1495;
            } else if (numericValue >= 50001 && numericValue <= 100000) {
                fee = Math.max(numericValue * 0.0225, 1750);
            } else if (numericValue >= 100001 && numericValue <= 250000) {
                fee = Math.max(numericValue * 0.02, 2750);
            } else if (numericValue >= 250001 && numericValue <= 500000) {
                fee = Math.max(numericValue * 0.015, 4000);
            } else if (numericValue > 500000) {
                fee = Math.max(numericValue * 0.0125, 6000);
            } else {
                fee = 0;
            }
            
            setServiceFee(formatCurrency(fee));
            setShowMessage(false);
        } else {
            setServiceFee('');
            setShowMessage(true);
        }
    };

    // Handle input change with proper formatting
    const handlePriceChange = (e) => {
        const value = e.target.value;
        
        // Allow only numbers and decimal point
        if (value === '' || /^[0-9]*\.?[0-9]*$/.test(value)) {
            // Format with commas as user types
            const parts = value.split('.');
            parts[0] = parts[0].replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            
            const formattedValue = parts.length > 1 ? `${parts[0]}.${parts[1]}` : parts[0];
            setVehiclePrice(formattedValue);
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
                        type="text"
                        placeholder="15,000.00"
                        value={vehiclePrice}
                        onChange={handlePriceChange}
                        className="w-full p-5 rounded-xl focus:outline-none bg-gradient-to-r from-[#2e6cf41a] to-[#00d2ff1a] focus:ring-2 focus:ring-purple-500"
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
                        placeholder="1,495.00"
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