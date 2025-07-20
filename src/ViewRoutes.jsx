import React, { useContext } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext } from './context/AuthContext';
import DefaultLayout from './Layout/DefaultLayout';
import Home from './pages/Home';
const PrivateRoute = ({ children }) => {
  const { user, } = useContext(AuthContext);
  return user ? children : <Navigate to="/login" />;
};

const ViewRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
      <Route path="*" element={"error page"} />
    </Routes>
  );
};

export default ViewRoutes;
