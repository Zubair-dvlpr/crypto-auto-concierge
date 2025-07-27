import React from 'react';
import PagetitleSection from '../../Components/PagetitleSection';
import pricingbgtop from '../../assets/images/pricebgtop.png';
import InfoSection from '../../Components/InfoSection';
import markIcon from '../../assets/images/Wavy_Check.svg';
import phoneIcon from '../../assets/images/phone.svg';
import locationIcon from '../../assets/images/location2.svg';
import emailIcon from '../../assets/images/email2.svg';
import capa from '../../assets/images/Capa_1.svg';
import DynamicBannerSection from '../../Components/DynamicFooterSection';

const InvestorPartnerships = () => {
  const marketNeed1 = {
    title: "Why the Market Needs a Service Like CAC",
    icon: markIcon,
    items: [
      "Crypto is increasingly used in high-value purchases like vehicles",
      "There are few, if any, professional services in Canada handling crypto transactions specifically for private vehicle sales",
      "Buyers and sellers want a secure, trusted way to transact — that’s the space we operate in"
    ]
  };

  const marketNeed2 = {
    title: "Why the Market Needs a Service Like CAC",
    icon: markIcon,
    items: [
      "Headquartered at 200 Front Street West, Toronto — operating in Canada’s business and automotive hub.",
      "Partnered exclusively with licensed, FINTRAC-registered MSBs and OTC providers.",
      "Built by professionals with hands-on experience in both automotive and financial services."
    ]
  };

  const ourApproach = {
    title: "Our Approach",
    icon: markIcon,
    items: [
      "All transactions verified through approved partners",
      "Compliance with Canadian federal and provincial regulations.",
      "Focused on delivering a simple, secure experience for every client"
    ]
  };

  const growthPlans = {
    title: "Our Plans for Growth",
    icon: markIcon,
    items: [
      "Expanding partner locations across Canada",
      "Building strategic alliances within the automotive sectors",
      "Scaling responsibly with investor-backed support."
    ]
  };



  const investorPartnershipData = {
    title: "Interested in Discussing Opportunities?",
    description: "Contact Our Leadership Team",
    items: [
      { text: "905-409-0992", icon: phoneIcon },
      { text: "CAC212@gmail .com", icon: emailIcon }
    ]
  };

  return (
    <div className='pt-32 relative before:content-[] before:block before:w-[458px] before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px] bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <PagetitleSection
        title={"Delivering Verified Crypto Transactions for the Automotive Market"}
        paragraph={"At Crypto Auto Concierge (CAC), we focus on making crypto vehicle transactions secure, transparent, and compliant. We combine experience in the automotive industry with a practical understanding of how cryptocurrency is reshaping private sales. Our role is straightforward — we help buyers and sellers complete verified transactions backed by proper compliance and professional handling."}
      />

      <div className='relative after:content-[] after:block after:w-[376px] after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-1/3 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
        <div className='max-w-[1240px] gap-x-12 gap-y-12 mx-auto px-2 grid md:grid-cols-2 grid-cols-1 sm:px-4 py-8 '>
          <div className='space-y-6'>
            <InfoSection {...marketNeed1} />
            <InfoSection {...ourApproach} />
          </div>
          <div className='space-y-6'>
            <InfoSection {...marketNeed2} />
            <InfoSection {...growthPlans} />
          </div>
        </div>

        <DynamicBannerSection {...investorPartnershipData} />
      </div>
    </div>
  );
};

export default InvestorPartnerships;
