import React from 'react';
import pricingBanner from '../../../assets/images/pricingBanner.svg'
const CryptoTransactionInfo = () => {
    return (
        <div className='pt-44 relative  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]  after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-[50%] after:translate-y-[-50%] after:right-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
            <section className="max-w-[1240px]  mx-auto pt-10 pb-32 px-6 md:px-20 text-center rounded-2xl bg-bottom bg-no-repeat bg-cover" style={{ backgroundImage: `url('${pricingBanner}')` }}>
                <div className='max-w-3xl mx-auto'>
                    <h2 className="text-3xl md:text-4xl font-bold leading-12  mb-2">
                        All-Inclusive Crypto Vehicle Transaction Fees <span className='text-[#7CFEFD]'>Transparent & Trusted </span>
                    </h2>
                    <p className="text-lg md:text-xl  mb-6 max-w-[671px] mx-auto">
                        We verify your crypto, handle the exchange, and ensure a secured payout - all for one simple fee. No hidden costs.
                    </p>
                    <button className="bg-gradient-to-r from-[#00D2FF] to-[#D015FF] text-white text-base font-semibold px-6 py-3 rounded-xl transition">
                        Contact Us
                    </button>
                </div>
            </section>
        </div>
    );
};

export default CryptoTransactionInfo;
