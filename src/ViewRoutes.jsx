import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import DefaultLayout from './Layout/DefaultLayout';
import Home from './pages/Home';
import Pricing from './pages/pricing/Index';
import About from './pages/about/Index';
import Blog from './pages/blog/Index';
import Contact from './pages/contact/Index';
import Services from './pages/services/Index';
import TransactionForm from './pages/transaction/Index';
import InvestorPartnerships from './pages/InvestorPartnerships/Index';
import Compliancelegal from './pages/compliance&legal/Index';
import Termsofservice from './pages/termsofservice/Index';
import Privacypolicy from './pages/privacypolicy/Index';
import Saller from './pages/Saller/Index';
import Buyer from './pages/buyer/Index';
import PartnershipForm from './pages/partnershipForm/Index';
const PrivateRoute = ({ children }) => {
  const { user, } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="/pricing" element={<DefaultLayout><Pricing /></DefaultLayout>} />
      <Route path="/services" element={<DefaultLayout><Services /></DefaultLayout>} />
      <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
      <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
      <Route path="/blog" element={<DefaultLayout><Blog /></DefaultLayout>} />
      <Route path="/transaction" element={<DefaultLayout><TransactionForm /></DefaultLayout>} />
      <Route path="/partnership-form" element={<DefaultLayout><PartnershipForm /></DefaultLayout>} />
      <Route path="/investorpartnerships" element={<DefaultLayout><InvestorPartnerships /></DefaultLayout>} />
      <Route path="/compliance" element={<DefaultLayout><Compliancelegal /></DefaultLayout>} />
      <Route path="/termsofservice" element={<DefaultLayout><Termsofservice /></DefaultLayout>} />
      <Route path="/privacypolicy" element={<DefaultLayout><Privacypolicy /></DefaultLayout>} />
      <Route path="/saller" element={<DefaultLayout><Saller /></DefaultLayout>} />
      <Route path="/buyer" element={<DefaultLayout><Buyer /></DefaultLayout>} />
      <Route path="*" element={"error page"} />
    </Routes>
  );
};

export default ViewRoutes;
