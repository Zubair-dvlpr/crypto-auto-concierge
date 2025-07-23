import React from 'react'
import Crypto from '../../Components/Crypto'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorksSection from './components/HowItWorksSection'
import TransactionManagement from './components/TransactionManagement'
import pricingbgtop from '../../assets/images/pricebgtop.png'
const Services = () => {
  return (
    <div className='pt-28    bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <TransactionManagement />
      <HowItWorksSection />
      <WhyChooseUs />
      <Crypto
        description="We handle it all: fund verification, instant payout, and private sale paperwork."
        title="Your Crypto. Your Car. Your Concierge."
      />
    </div>
  )
}

export default Services
