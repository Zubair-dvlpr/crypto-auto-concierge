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
            title: 'End-to-End Deal Facilitation',
            description: 'We handle crypto transfer, fund verification, paperwork, and handover.',
            textColor: 'text-[#4555FF]' // dark gray
        },
        {
            icon: HandoverIcon,
            number: '02',
            title: 'Funds Verified Before Handover',
            description: 'No vehicle changes hands until funds are fully secured and confirmed.',
            textColor: 'text-[#CA19FF]' // blue
        },
        {
            icon: PaymentsIcon,
            number: '03',
            title: ' Instant Payments. Zero Hassle.',
            description: 'Payouts processed on the spot with no waiting or hidden fees.Instantly',
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
                    Buy or Sell Any Car with We’re the first concierge service built for private vehicle transactions. <br />
                    Buy any vehicle from any marketplace and pay securely with crypto. <br />
                    Sellers receive crypto — or choose from a variety of instant payout options. — Instantly.
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
