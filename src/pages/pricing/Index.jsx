import React from 'react'
import CryptoTransactionInfo from './components/CryptoTransactionInfo'
import pricingbgtop from '../../assets/images/pricebgtop.png'
import OurPricing from './components/OurPricing'
import ServiceFeeCalculator from './components/ServiceFeeCalculator'
import Testimonials from '../../components/Testimonials'
import Crypto from '../../Components/Crypto'
const Pricing = () => {
  return (
    <div className='bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <CryptoTransactionInfo />
      <OurPricing />
      <ServiceFeeCalculator />
      <Testimonials
        title="Why choose CAC"
        description="Real Clients. Real Deals. Verified Payouts."
      />
      <Crypto
        title="Ready to Buy or Sell with Crypto"
        description="We handle it all: fund verification, instant payout, and private sale paperwork."
      />
    </div>
  )
}

export default Pricing
