import React from 'react';
import Banner from './Components/Banner';
import StatsSection from './Components/StatsSection';
import TextMarquee from './Components/TextMarquee';
import Testimonials from './Components/Testimonials';
import Crypto from './Components/Crypto';
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
      <Testimonials />
      <CryptoPartners />
      <Crypto />
    </>
  )
}

export default Home
