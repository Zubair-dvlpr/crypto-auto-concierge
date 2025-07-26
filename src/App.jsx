import React from 'react';
import AuthProvider from './context/AuthContext'; // Ensure Correct Path
import ViewRoutes from './ViewRoutes';
import ScrollToTop from './Components/ScrollToTop';

const App = () => {
  return (
    <AuthProvider> {/* Ensure Provider Wraps Everything */}
      <ScrollToTop /> {/* add this here */}
      <ViewRoutes />
    </AuthProvider>
  );
};

export default App;
