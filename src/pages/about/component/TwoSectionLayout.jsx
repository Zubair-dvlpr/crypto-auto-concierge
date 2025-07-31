import React from 'react';
import TrustedPartner from '../../../assets/images/TrustedPartner.png';
import Canadian from '../../../assets/images/Canadian.png';
import { Link } from 'react-router-dom';
const TwoSectionLayout = () => {
    return (
        <div className='relative  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]  after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:bottom-0 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
            <div className="max-w-[1240px] mx-auto px-4 py-16 space-y-24">

                {/* Section 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Image */}
                    <div>
                        <img
                            src={TrustedPartner}
                            alt="Crypto Vehicle"
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>

                    {/* Right Content */}
                    <div>
                        <h2 className="text-4xl font-bold leading-12 mb-2">
                            Your Trusted Partner for Crypto Vehicle Transactions
                        </h2>
                        <p className="text-[#ffffffe5] text-xl leading-8 mb-6">
                            At Satoshi Drive, we make crypto-based vehicle transactions simple, secure, and fully verified. We’re not a crypto exchange. We’re not a dealership. We’re a dedicated transaction concierge — managing every step from fund verification to secure seller payout.
                        </p>
                        <Link to="/contact" className="inline-block">
                            <button className="btn-style">
                                Contact Us
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Section 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    {/* Left Content */}
                    <div>
                        <h2 className="text-4xl font-bold leading-12 mb-2">
                            Proudly Canadian. Professionally Driven.
                        </h2>
                        <p className="text-[#ffffffe5] text-xl leading-8 mb-6">
                            Headquartered at 200 Front Street West, Toronto, Ontario, Satoshi Drive operates in the heart of Canada’s financial district. We proudly serve clients across Toronto, the Greater Toronto Area, and surrounding regions through our network of trusted partner locations. As a Canadian-founded business, we’re committed to delivering professional service backed by transparency, security, and local expertise.
                        </p>

                    </div>

                    {/* Right Image */}
                    <div>
                        <img
                            src={Canadian}
                            alt="Dashboard"
                            className="w-full rounded-xl shadow-lg"
                        />
                    </div>
                </div>

            </div>
        </div>

    );
};

export default TwoSectionLayout;
