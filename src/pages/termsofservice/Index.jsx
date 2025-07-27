import React from 'react'
import PagetitleSection from '../../Components/PagetitleSection'
import pricingbgtop from '../../assets/images/pricebgtop.png'
import InfoSection from '../../Components/InfoSection';
// import markIcon from '../../../assets/images/Wavy_Check.svg';
import phoneIcon from '../../assets/images/phone.svg';
import locationIcon from '../../assets/images/location2.svg';
import emailIcon from '../../assets/images/email2.svg';
import capa from '../../assets/images/Capa_1.svg';
import markIcon from '../../assets/images/Wavy_Check.svg'; // Assuming this is the correct path for the icon
import DynamicBannerSection from '../../Components/DynamicFooterSection';

const Termsofservice = () => {

  const scopeOfServices = {
    title: "Scope of Services",
    icon: markIcon,
    items: [
      "Verification of cryptocurrency funds through CAC-approved, licensed partners",
      "Arrangement of seller payout via client-selected method (Interac e-Transfer, wire transfer, certified bank draft, or cash where permitted)",
      "Optional concierge services such as transaction facilitation, paperwork preparation, and registration assistance",
      "Internal transaction record-keeping for risk management and compliance purposes",
    ],
    description: "CAC provides transaction facilitation services for private vehicle transactions involving cryptocurrency. Our services include:",
    lastdesc: "CAC is not a bank, financial institution, exchange, crypto brokerage, or investment advisor We do not custody, hold, or transfer client cryptocurrency."
  };

  const complianceAndVerification = {
    title: "Compliance, Due Diligence & Verification Rights",
    icon: markIcon,
    items: [
      "CAC complies with Canadian regulatory standards, including FINTRAC KYC, AML, and CDD requirements through our partner network",
      "We reserve the right to request additional information or documentation at any stage of the transaction",
      "CAC may refuse, suspend, or terminate any transaction at our sole discretion for non-compliance or risk management concerns",
      "Clients acknowledge that failure to comply with verification requests may result in immediate service cancellation"
    ]
  };

  const clientObligations = {
    title: "Client Obligations & Responsibilities",
    description: "Clients must:",
    icon: markIcon,
    items: [
      "Provide accurate, truthful information and documentation when requested",
      "Present valid government-issued photo identification at the time of transaction",
      "Disclose the lawful source of funds used for the transaction",
      "Comply with applicable federal and provincial laws governing financial transactions in Canada"
    ]
  };

  const limitationOfLiability = {
    title: "Limitation of Liability",
    icon: markIcon,
    items: [
      "CAC assumes no responsibility for the condition, ownership, or legal standing of any vehicle involved in a transaction",
      "CAC is not liable for disputes, claims, or damages arising between the buyer and seller before, during, or after the transaction",
      "CAC’s liability is strictly limited to the services explicitly agreed upon in writing and is capped to the total service fee paid by the client",
      "CAC shall not be held responsible for delays or issues arising from third-party service providers, payment processors, or partners"
    ]
  };

  const privacyAndData = {
    title: "Privacy & Data Handling",
    icon: markIcon,
    items: [
      "Client information is collected and stored solely for transaction facilitation, compliance with legal requirements, and internal record-keeping",
      "Data is handled per PIPEDA (Personal Information Protection and Electronic Documents Act) and applicable Ontario privacy laws",
      "Client data will never be sold or shared with unauthorized third parties, except where required by law or regulatory authorities"
    ]
  };

  const terminationOfServices = {
    title: "Termination of Services",
    icon: markIcon,
    items: [
      "The client provides false or misleading information",
      "A transaction is deemed high-risk or non-compliant",
      "The client fails to meet CAC’s internal risk and compliance standards"
    ],
    description: "CAC reserves the right to refuse or terminate services at any time if:"
  };

  const feesAndRefunds = {
    title: "Fees, Payment Terms & Refunds",
    icon: markIcon,
    items: [
      "All service fees are set forth on our Pricing Page and must be agreed upon prior to service engagement",
      "Fees for optional services, such as paperwork assistance or on-site facilitation, are additional and non-refundable once service has commenced",
      "Payments for services are final; CAC does not offer refunds for services rendered or transactions initiated"
    ]
  };

  const governingLaw = {
    title: "Governing Law & Jurisdiction",
    description: "These Terms are governed by the laws of the Province of Ontario and the applicable federal laws of Canada. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts of Ontario, Canada.",
  };

  const amendments = {
    title: "Amendments & Updates",
    description: "CAC reserves the right to update or modify these Terms at any time without prior notice. The most current version will be posted on our website, and continued use of services constitutes acceptance of the updated Terms.",
  };



 
  const investorPartnershipData = {
    title: "Contact Us In Term Of Services",
    description: "For questions, access requests, or concerns related to this Privacy Policy, please contact:",
    items: [
      { text: "905-409-0992", icon: phoneIcon },
      { text: "200 Front Street West, Toronto, Ontario, Canada ", icon: locationIcon },
      { text: "CAC212@gmail.com", icon: emailIcon }
    ]
  };

  return (
    <div className='pt-32 relative  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]   bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }} >
      <PagetitleSection
        paragraph={"These Terms of Service (“Terms”) govern the use of services provided by Crypto Auto Concierge (CAC), a Canadian business headquartered at 200 Front Street West, Toronto, Ontario, Canada. By engaging with our services, you agree to comply with these Terms."}
      />

      <div className='relative after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-1/3 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
        <div className='max-w-[1240px] gap-x-12 gap-y-12 mx-auto px-2 grid md:grid-cols-2 grid-cols-1 sm:px-4 py-8 '>
          <div className='space-y-6'>
            <InfoSection {...scopeOfServices} />
            <InfoSection {...clientObligations} />
            <InfoSection {...privacyAndData} />
            <InfoSection {...terminationOfServices} />
          </div>
          <div className='space-y-6'>
            <InfoSection {...complianceAndVerification} />
            <InfoSection {...limitationOfLiability} />
            <InfoSection {...feesAndRefunds} />
            <InfoSection {...governingLaw} />
            <InfoSection {...amendments} />

          </div>

        </div>


        <DynamicBannerSection {...investorPartnershipData} />
      </div>
    </div>
  )
}

export default Termsofservice
