import React from 'react';
import WhyChooseBox from './WhyChooseBox';

import FacilitationIcon from '../../../assets/images/FacilitationIcon.svg'
import HandoverIcon from '../../../assets/images/FacilitationIcon.svg'
import PaymentsIcon from '../../../assets/images/FacilitationIcon.svg'
const WhyChooseCrypto = () => {
    const boxData = [
        {
            icon: FacilitationIcon,
            number: '01',
            title: 'Fully Managed Transactions',
            description: 'We take care of everything — from verifying crypto and preparing paperwork to handling the payout and final handover. You just show up and close the deal.',
            textColor: 'text-[#4555FF]' // dark gray
        },
        {
            icon: HandoverIcon,
            number: '02',
            title: 'Funds Verified Before Any Handover',
            description: 'The seller never hands over the keys until the buyer’s crypto is confirmed, verified, and fully cleared. Every wallet is screened for risk and compliance.',
            textColor: 'text-[#CA19FF]' // blue
        },
        {
            icon: PaymentsIcon,
            number: '03',
            title: 'Instant Payouts. No Delays.',
            description: 'Once crypto is verified, the seller gets paid on the spot — via EMT, wire, bank draft, or even crypto. No waiting, no confusion, no extra charges.',
            textColor: 'text-[#7CFEFD]' // green
        }
    ];

    return (
        <div className='relative py-12 px-3 md:px-0 overflow-hidden before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]  after:content-[] after:block after:w-[458px]  after:h-[458px] after:bg-[#ca19ff66] after:absolute after:bottom-[-100px] after:right-[-100px] after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
            <div className="max-w-[1240px] mx-auto">
                <h2 className="text-4xl font-bold text-left leading-16 mb-2">
                    Why Choose Crypto Auto Concierge?
                </h2>
                <p className=" mb-9 text-left max-w-3xl">
                    Crypto Auto Concierge is Canada’s first full-service platform built specifically for buying and selling vehicles with cryptocurrency. <br />
                    Whether you’re a buyer paying with crypto or a seller who wants secure cash, we handle every step — safely, legally, and instantly. No middlemen. No hidden fees.
                </p>

                <div className="grid md:grid-cols-3 gap-6">
                    {boxData.map((box, index) => (
                        <WhyChooseBox
                            key={index}
                            icon={box.icon}
                            number={box.number}
                            title={box.title}
                            description={box.description}
                            textColor={box.textColor}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseCrypto;
