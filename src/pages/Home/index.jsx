import React from 'react';
import Banner from './Components/Banner';
import StatsSection from './Components/StatsSection';
import TextMarquee from './Components/TextMarquee';
import Testimonials from '../../components/Testimonials';
import Crypto from '../../Components/Crypto';
import CryptoPartners from './Components/CryptoPartners';
import WhyChooseCrypto from './Components/WhyChooseCrypto';
import HowCryptoWorks from './Components/HowCryptoWorks';
import TrustedProcess from './Components/TrustedProcess';
const Home = () => {

  return (
    <>
      <Banner />
      <StatsSection />
      <TextMarquee />
      <HowCryptoWorks />
      <TrustedProcess />
      <WhyChooseCrypto />
      <Testimonials
        title="Satoshi Drive— Real Client Experiences"
        description="Real Clients. Real Deals. Verified Payouts."
      />
      <CryptoPartners />
      <Crypto
        description="We handle it all: fund verification, instant payout, and private sale paperwork."
        title="Start Your Crypto Vehicle Deal Today"
      />
    </>
  )
}

export default Home
