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

const buyerFeatures = [
  "Buy any vehicle using your crypto — Bitcoin, Ethereum, USDT & more",
  "Shop any marketplace or dealership — Facebook, Kijiji, Autotrader, or licensed sellers",
  "No more awkward crypto talks — We handle the conversation, conversion, and verification",
  "Secure and verified — We confirm seller ownership, lien status, and paperwork before you send funds",
  "Global capability — Whether you’re in Canada or abroad, we facilitate the transaction and title transfer"
];

const sellerFeatures = [
  "Get paid your way — EMT, wire, bank draft, certified cheque, or crypto",
  "Optional lien payoff — We handle loan closures and registration for just $149",
  "Instant crypto fund verification — No guesswork, we monitor wallets and block flagged or blacklisted activity",
  "Concierge-style support — We assist with paperwork, tax remittance, and Service Ontario submission",
  "In-person payout available — Meet us at a CAC partner location for secure handover"
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
        buyers={buyerFeatures}
        sellers={sellerFeatures}
      />
      <Crypto
        description="We handle it all: fund verification, instant payout, and private sale paperwork."
        title="Your Crypto. Your Car. Your Concierge."
      />
    </div>
  )
}

export default Services
