import React from 'react'
import PagetitleSection from '../../Components/PagetitleSection'
import pricingbgtop from '../../assets/images/pricebgtop.png'
import InfoSection from '../../Components/InfoSection';
// import markIcon from '../../../assets/images/Wavy_Check.svg';
import markIcon from '../../assets/images/Wavy_Check.svg'; // Assuming this is the correct path for the icon
import DynamicBannerSection from '../../Components/DynamicFooterSection';
const Buyer = () => {

  const howItWorks = {
    title: "How It Works",
    icon: markIcon, // just one icon used globally (e.g., handshake icon)
    items: [
      "Find your vehicle on any website or dealership",
      "Submit the listing to CAC and complete secure ID verification",
      "Pay in crypto through our secure gateway",
      "We verify and process the payment",
      "The seller gets CAD or crypto, and you get the car — done",
    ]
  };

  const whyBuyersChooseCAC = {
    title: "Why Buyers Choose CAC",
    icon: markIcon, // just one icon used globally (e.g., handshake icon)
    items: [
      "Pay directly in crypto — no need to convert or cash out",
      "Works with dealerships, private sellers, or auction platforms",
      "Fully compliant with Canadian AML/KYC regulations",
      "Add-ons: vehicle inspection, delivery coordination, buyer support",
      "Add-ons: Lien pay off protection",
    ]
  };

  const investorPartnershipData = {
    title: "Ready to use crypto for your next car purchase?",
    buttonText: "Start Your Crypto Purchase",
    buttonLink: "/contact"
  };

  return (
    <div className='pt-32 relative  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]   bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }} >
      <PagetitleSection
        title={"Buy Any Car Using Crypto — Even from Dealerships"}
        paragraph={"Canada’s First Crypto Car Concierge. Shop on Facebook Marketplace, Kijiji, Autotrader, or any dealership. Pay with Bitcoin, Ethereum, USDT, USDC, and more — sellers get cash instantly."}
      />

      <div className='relative after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:bottom-0 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
        <div className='max-w-[1240px] mx-auto px-2 grid md:grid-cols-2 grid-cols-1 sm:px-4 py-8 '>
          <div>
            <InfoSection
              title={howItWorks.title}
              icon={howItWorks.icon}
              items={howItWorks.items}
            />
          </div>
          <div>
            <InfoSection
              title={whyBuyersChooseCAC.title}
              icon={whyBuyersChooseCAC.icon}
              items={whyBuyersChooseCAC.items}
            />
          </div>
        </div>


        <DynamicBannerSection {...investorPartnershipData} />
      </div>
    </div>
  )
}

export default Buyer
