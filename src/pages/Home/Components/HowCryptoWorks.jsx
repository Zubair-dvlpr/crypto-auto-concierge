import React, { useState } from 'react';
import FaqItem from './FaqItem';
import howworkImg from '../../../assets/images/howwork.png'
import submit from '../../../assets/images/Submit.svg'
import Location from '../../../assets/images/Location.svg'
import Crypto from '../../../assets/images/Crypto.svg'
import Paid from '../../../assets/images/Paid.svg'
import Handover from '../../../assets/images/Handover.svg'
import downArrow from '../../../assets/images/downArrow.png'
import howworkbg from '../../../assets/images/howworkbg.png'

const HowCryptoWorks = () => {
    const [openIndex, setOpenIndex] = useState(0); // default open 1st FAQ

    const faqData = [
        {
            icon: submit,
            title: 'Submit Your Deal',
            content: 'Both buyer and seller send us the deal details — vehicle info, payment preference, and documentation — for verification.'
        },
        {
            icon: Location,
            title: 'Meet at a Satoshi Drive Partner Location',
            content: 'We arrange a secure in-person meeting at a trusted Satoshi Drive location, or virtually if agreed by both parties.'
        },
        {
            icon: Crypto,
            title: 'Buyer Sends Crypto',
            content: 'We verify and track the buyer’s crypto transfer in real-time, with full compliance and audit checks.'
        },
        {
            icon: Paid,
            title: 'Seller Gets Paid',
            content: 'Once funds are verified, we release same-day payout to the seller via EMT, wire, draft, or crypto — no delays, no risks.'
        },
        {
            icon: Handover,
            title: 'Complete the Sale & Handover',
            content: 'Paperwork is finalized, keys change hands, and both parties leave with confidence. Deal done right.'
        }
    ];

    return (
        <div className='howworkbg-cover  bg-center bg-no-repeat' style={{ backgroundImage: `url('${howworkbg}')` }} >

            <div className="max-w-[1240px] mx-auto px-2">
                <div className='flex justify-between'>
                    <img src={downArrow} alt="" />
                    <img src={downArrow} alt="" />
                </div>
                <h2 className="text-3xl mt-4 font-bold mb-4">
                    How Satoshi Drive Works
                </h2>
                <p className="mb-10 max-w-2xl">
                    Buy or Sell Any Car with Crypto — Instantly.
                </p>

                <div className="grid md:grid-cols-5 grid-cols-1 gap-10 items-center">
                    {/* Left Image */}
                    <div className='md:col-span-2 col-full '>
                        <img
                            src={howworkImg}
                            alt="How it works"
                            className="rounded-lg"
                        />
                    </div>

                    {/* Right FAQ Section */}
                    <div className='md:col-span-3 col-span-full bg-linear-65 p-5 space-y-4 rounded-xl  from-[#2e6cf41a] to-[#00d2ff1a]'>
                        {faqData.map((faq, index) => (
                            <FaqItem
                                key={index}
                                icon={faq.icon}
                                title={faq.title}
                                content={faq.content}
                                isOpen={openIndex === index}
                                onClick={() => setOpenIndex(index)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowCryptoWorks;
