import React from 'react'
import PagetitleSection from '../../Components/PagetitleSection'
import pricingbgtop from '../../assets/images/pricebgtop.png'
import InfoSection from '../../Components/InfoSection';
import phoneIcon from '../../assets/images/phone.svg';
import locationIcon from '../../assets/images/location2.svg';
import emailIcon from '../../assets/images/email2.svg';
import markIcon from '../../assets/images/Wavy_Check.svg'; // Assuming this is the correct path for the icon
import DynamicBannerSection from '../../Components/DynamicFooterSection';
const Privacypolicy = () => {

  const ScopeofPolicy = {
    title: "Scope of Policy",
    description: "Crypto Auto Concierge (CAC) is a Canadian-based company that provides a secure and compliant platform for buying and selling vehicles using cryptocurrency. Our services are designed to facilitate transactions between buyers and sellers while ensuring compliance with Canadian laws and regulations.",
  };

  const CollectYourInformation = {
    title: "Why We Collect Your Information",
    description: "We collect personal information for the following purposes:",
    icon: markIcon, // just one icon used globally (e.g., handshake icon)
    items: [
      "To facilitate crypto-based vehicle transactions",
      "To comply with legal and regulatory obligations",
      "To manage partnerships and internal risk assessments",
      "To verify client identity (KYC) and comply with applicable AML regulations",
      "To process payments, arrange seller payouts, and confirm transaction details",
      "To communicate with clients regarding services, appointments, and updates",
    ]
  };

  const ProtectInformation = {
    title: "How We Protect Your Information",
    icon: markIcon, // just one icon used globally (e.g., handshake icon)
    items: [
      "Personal information is stored securely using physical, organizational, and technological safeguards",
      "Access to client information is restricted to authorized personnel only",
      "Data is retained only for as long as necessary to fulfill the identified purposes and comply with legal requirements"
    ]
  };

  const UnderThisPolicy = {
    title: "Your Rights Under This Policy",
    description: "Clients have the right to:",
    icon: markIcon, // just one icon used globally (e.g., handshake icon)
    items: [
      "Access the personal information we hold about them",
      "Request corrections to inaccurate or incomplete information",
      "Inquire about our privacy practices",
      "Withdraw consent to the use of their information, subject to legal exceptions",
    ]
  };

  const InformationCollect = {
    title: "Information We Collect",
    description: "We may collect the following types of personal information",
    icon: markIcon, // just one icon used globally (e.g., handshake icon)
    items: [
      "Full Name, Contact Information (Phone, Email, Address)",
      "Government-Issued Identification for verification purposes",
      "Payment and payout method information",
      "Business registration or licensing information (for partners)",
      "Transaction-related information (Vehicle details, purchase price, crypto verification details)",
    ]
  };

  const DisclosureInformation = {
    title: "Disclosure of Information",
    description: "We do not sell, rent, or trade client personal information. We may disclose information only in the following cases:",
    icon: markIcon, // just one icon used globally (e.g., handshake icon)
    items: [
      "When required by law, regulation, or court order",
      "With client consent for a specific purpose",
      "To our CAC-approved partners for transaction facilitation and compliance verification",
    ]
  };

  const Acknowledgment = {
    title: "Consent&Client Acknowledgment",
    description: "By using our services, clients consent to the collection, use, and disclosure of personal information for the purposes outlined in this policy. Clients have the right to withdraw consent, subject to legal and contractual limitations.",
  };

  const ThirdParty = {
    title: "Third-Party Links & Services",
    description: "Our website may contain links to third-party services. We are not responsible for the privacy practices of external sites or services linked from our platform.",
  };

  const PolicyUpdates = {
    title: "Policy Updates",
    description: "This Privacy Policy may be updated periodically to reflect legal requirements or changes in our operations. The most current version will always be posted on our website",
  };



  const investorPartnershipData = {
    title: "Contact Us Regarding Privacy",
    description: "For questions, access requests, or concerns related to this Privacy Policy, please contact:",
    items: [
      { text: "905-409-0992", icon: phoneIcon },
      { text: "200 Front Street West, Toronto, Ontario, Canada ", icon: locationIcon },
      { text: "CAC212@gmail.com", icon: emailIcon }
    ],
    buttonText: "Contact Us",
    buttonLink: "/contact"
  };

  return (
    <div className='pt-32 relative  before:content-[] before:block before:w-[458px]  before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px]   bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }} >
      <PagetitleSection
        paragraph={"At Crypto Auto Concierge (CAC), we are committed to protecting the privacy and confidentiality of all client information. This Privacy Policy explains how we collect, use, disclose, and protect personal information in accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and applicable Ontario laws."}
      />

      <div className='relative after:content-[] after:block after:w-[376px]  after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-1/3 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
        <div className='max-w-[1240px] gap-x-12 gap-y-12 mx-auto px-2 grid md:grid-cols-2 grid-cols-1 sm:px-4 py-8 '>
          <div className='space-y-6'>
            <InfoSection
              title={ScopeofPolicy.title}
              description={ScopeofPolicy.description}
              icon={ScopeofPolicy.icon}
            />
            <InfoSection
              title={CollectYourInformation.title}
              icon={CollectYourInformation.icon}
              items={CollectYourInformation.items}
              description={CollectYourInformation.description}

            />
            <InfoSection
              title={ProtectInformation.title}
              icon={ProtectInformation.icon}
              items={ProtectInformation.items}
            />
            <InfoSection
              title={UnderThisPolicy.title}
              icon={UnderThisPolicy.icon}
              items={UnderThisPolicy.items}
              description={UnderThisPolicy.description}
            />
          </div>
          <div className='space-y-6'>
            <InfoSection
              title={InformationCollect.title}
              icon={InformationCollect.icon}
              items={InformationCollect.items}
              description={InformationCollect.description}
            />

            <InfoSection
              title={DisclosureInformation.title}
              icon={DisclosureInformation.icon}
              items={DisclosureInformation.items}
              description={DisclosureInformation.description}
            />

            <InfoSection
              title={Acknowledgment.title}
              icon={Acknowledgment.icon}
              items={Acknowledgment.items}
              description={Acknowledgment.description}
            />

            <InfoSection
              title={ThirdParty.title}
              icon={ThirdParty.icon}
              items={ThirdParty.items}
              description={ThirdParty.description}
            />

            <InfoSection
              title={PolicyUpdates.title}
              icon={PolicyUpdates.icon}
              items={PolicyUpdates.items}
              description={PolicyUpdates.description}
            />
          </div>

        </div>


        <DynamicBannerSection {...investorPartnershipData} />
      </div>
    </div>
  )
}

export default Privacypolicy
