import React from 'react'
import TwoSectionLayout from './component/TwoSectionLayout'
import HowItWorksSection from '../services/components/HowItWorksSection'
import pricingbgtop from '../../assets/images/pricebgtop.png'
import VerifiedIcon from '../../assets/images/VerifiedIcon.svg';
import TransparentIcon from '../../assets/images/TransparentIcon.svg';
import PaperworkIcon2 from '../../assets/images/PaperworkIcon2.svg';
import SecuredIcon from '../../assets/images/SecuredIcon.svg';

import lookingAhead from '../../assets/images/lookingAhead.png';
import markIcon from '../../assets/images/Wavy_Check.svg';
import WhyChooseUs from '../services/components/WhyChooseUs';

const stepsAboutData = [
  { icon: VerifiedIcon, title: 'Verified Crypto Transactions — Every Time' },
  { icon: SecuredIcon, title: 'Secured Seller Payouts: EMT, Wire, Draft, or Cash' },
  { icon: TransparentIcon, title: 'Transparent, All-Inclusive Pricing' },
  { icon: PaperworkIcon2, title: 'Optional Concierge Services: Paperwork, Registration, Deal Facilitation' },
];


const featuresList = [
  { icon: markIcon, text: 'Build Canada’s most trusted crypto transaction concierge' },
  { icon: markIcon, text: 'Serve buyers and sellers who expect more from their crypto deals' },
  { icon: markIcon, text: 'Keep security, professionalism, and client experience at the core of everything we do' }
];

const About = () => {
  return (
    <div  className='pt-28    bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <TwoSectionLayout />
      <HowItWorksSection
        title="Why Clients Choose Satoshi Drive"
        steps={stepsAboutData}
        position="center"
      />


      <p className='max-w-[1240px] mt-10 mx-auto text-xl font-semibold leading-12'><span className='font-extrabold text-2xl'>Our Mission:</span> To simplify and secure crypto-based vehicle transactions — making the process professional, transparent, and trusted across Canada.</p>

      <WhyChooseUs
        title="Looking Ahead"
        image={lookingAhead}
        intro="We’re actively expanding our partner network beyond the GTA to serve clients across Ontario and Canada-wide.
 Our vision is clear:"
        features={featuresList}
      />

    </div>
  )
}

export default About
