import React from 'react'
import Crypto from '../../Components/Crypto'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorksSection from './components/HowItWorksSection'
import TransactionManagement from './components/TransactionManagement'
import pricingbgtop from '../../assets/images/pricebgtop.png'

import cacloction from '../../assets/images/CACLocation.svg';
import instant from '../../assets/images/instant.svg';
import SecurePayment from '../../assets/images/SecurePayment.svg';
import CACPaperwork from '../../assets/images/CACPaperwork.svg';

import whychooseimg from '../../assets/images/whychooseimg.png';
import markIcon from '../../assets/images/Wavy_Check.svg';


const stepsData = [
  { icon: cacloction, title: 'Meet at a CAC Partner Location' },
  { icon: instant, title: 'Instant Crypto Fund Verification' },
  { icon: SecurePayment, title: 'Secure Seller Payment Arranged by CAC' },
  { icon: CACPaperwork, title: 'Optional Registration & Paperwork Completed' },
];

const featuresList = [
  { icon: markIcon, text: 'Secure and transparent transactions powered by blockchain.' },
  { icon: markIcon, text: 'Buy vehicles globally using your preferred cryptocurrency.' },
  { icon: markIcon, text: 'Concierge-style customer support from start to finish.' },
  { icon: markIcon, text: 'Fast processing with no middlemen or hidden fees.' },
];

const Services = () => {
  return (
    <div className='pt-28 bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <TransactionManagement />
      <HowItWorksSection
        title="How It Works"
        steps={stepsData}
        position="left"
      />
      <WhyChooseUs
      title="Why Choose Crypto Auto Concierge?"
      image={whychooseimg} 
      features={featuresList}
    />
      <Crypto
        description="We handle it all: fund verification, instant payout, and private sale paperwork."
        title="Your Crypto. Your Car. Your Concierge."
      />
    </div>
  )
}

export default Services
