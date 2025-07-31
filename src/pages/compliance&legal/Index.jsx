import React from 'react';
import PagetitleSection from '../../Components/PagetitleSection';
import pricingbgtop from '../../assets/images/pricebgtop.png';
import InfoSection from '../../Components/InfoSection';
import markIcon from '../../assets/images/Wavy_Check.svg';
import capa from '../../assets/images/Capa_1.svg';
import DynamicBannerSection from '../../Components/DynamicFooterSection';
import { Link } from 'react-router-dom';

const Compliancelegal = () => {
  const legalDisclaimerScope = {
    title: "Legal Disclaimer & Scope of Services",
    icon: markIcon,
    items: [
      "Satoshi Drive is not a financial institution, securities dealer, or investment advisor.",
      "We do not provide crypto brokerage, custody services, or investment products.",
      "Our role is strictly limited to transaction facilitation, crypto verification, and the secure handling of seller payouts.",
      "Satoshi Drive reserves the right to decline or suspend any transaction that does not meet federal, provincial, or our internal compliance requirements."
    ]
  };

  const identificationVerificationPolicy = {
    title: "Identification & Verification Policy (KYC / AML / CDD)",
    icon: markIcon,
    items: [
      "Mandatory Government-Issued Photo ID — Both Buyer and Seller must present valid identification prior to any transaction.",
      "KYC (Know Your Client) Compliance — We collect and verify identity information in accordance with FINTRAC guidelines.",
      "AML (Anti-Money Laundering) & CDD (Customer Due Diligence) — We monitor for suspicious transactions, confirm the legitimacy of funds, and maintain transaction records as required by law.",
      "Transaction Record-Keeping — All records are retained securely in accordance with Canadian law and are available for regulatory review if required."
    ]
  };

  const transactionFacilitationHandling = {
    title: "Transaction Facilitation & Crypto Handling",
    icon: markIcon,
    items: [
      "All crypto fund verifications, conversions, and settlement services are processed exclusively through Satoshi Drive-Approved, FINTRAC-Registered Partners.",
      "Satoshi Drive does not custody, hold, or transfer client cryptocurrency — we act solely as a transaction facilitator.",
      "Seller payouts are arranged securely by Satoshi Drive partners, via the method selected by the client:",
      `Interac e-Transfer (EMT)`,
      "Bank Wire Transfer",
      "Certified Bank Draft",
      "Cash (Subject to applicable legal limits and AML reporting thresholds)"
    ]
  };

  const termsAndLiability = {
    title: "Terms of Service & Limitation of Liability",
    icon: markIcon,
    items: [
      "All transactions facilitated by Satoshi Drive are governed by our Terms of Service, which must be reviewed and agreed to prior to engagement.",
      "Satoshi Drive assumes no liability for the vehicle condition, transaction disputes between buyer and seller, or issues arising post-sale.",
      "Our liability is limited strictly to the facilitation of verified crypto transactions and secured seller payouts."
    ]
  };

  const dataPrivacyProtection = {
    title: "Data Privacy & Client Protection",
    icon: markIcon,
    items: [
      "All client data is managed in strict accordance with the Personal Information Protection and Electronic Documents Act (PIPEDA) and Ontario privacy legislation.",
      "Client information is used solely for the purpose of transaction facilitation, compliance, and internal record-keeping.",
      "We never share client information with third parties outside of our Satoshi Drive-approved partners, unless required by law."
    ]
  };

  const canadianComplianceCommitment = {
    title: "Proudly Canadian — Built on Compliance, Transparency & Trust",
    icon: capa,
    items: [
      "Operating from our headquarters at 200 Front Street West, Toronto, Ontario, we are proud to serve clients across Toronto, the GTA, and Canada through a growing network of exclusive Satoshi Drive-approved partner locations.",
      "Full compliance with all applicable laws",
      "Verified partners only — no exceptions",
      "Secure, transparent crypto transaction facilitation for every client"
    ]
  };


  return (
    <div className='pt-32 relative before:content-[] before:block before:w-[458px] before:h-[458px] before:bg-[#7cfefdb3] before:absolute before:top-[-100px] before:left-[-100px] before:rounded-full before:z-[-1] before:blur-[245.20001220703125px] bg-top bg-no-repeat pricig-bg-cover' style={{ backgroundImage: `url('${pricingbgtop}')` }}>
      <PagetitleSection
        title={"Our Regulatory Commitment — Built for Transparency, Security & Compliance"}
        paragraph={"At Satoshi Drive, we take legal and regulatory compliance seriously. Operating in Canada, we ensure every transaction we facilitate adheres strictly to both federal (FINTRAC, PIPEDA) and provincial (Ontario) regulations. We work exclusively with Satoshi Drive-Approved Partners — licensed, registered Money Services Businesses (MSBs), OTC desks, and financial intermediaries — all vetted under Canadian law to ensure full compliance for crypto fund verification, payment handling, and transaction execution."}
      />

      <div className='relative after:content-[] after:block after:w-[376px] after:h-[376px] after:bg-[#ca19ff66] after:absolute after:top-1/3 after:left-0 after:rounded-full after:z-[-1] after:blur-[245.20001220703125px]'>
        <div className='max-w-[1240px] gap-x-12 gap-y-12 mx-auto px-2 grid md:grid-cols-2 grid-cols-1 sm:px-4 py-8 '>
          <div className='space-y-6'>
            <InfoSection {...identificationVerificationPolicy} />
            <InfoSection {...legalDisclaimerScope} />
            <InfoSection {...dataPrivacyProtection} />
          </div>
          <div className='space-y-6'>
            
            <InfoSection {...transactionFacilitationHandling} />
            <InfoSection {...termsAndLiability} />
            <InfoSection {...canadianComplianceCommitment} />
          </div>
        </div>

        <div className='max-w-[1240px] text-center mx-auto px-2 py-8'>
          <Link to="/contact">
           <button className='btn-style'>Contact Us</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Compliancelegal;
