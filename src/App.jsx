import React from 'react';
import AuthProvider from './context/AuthContext'; // Ensure Correct Path
import ViewRoutes from './ViewRoutes';

const App = () => {
  return (
    <AuthProvider> {/* Ensure Provider Wraps Everything */}
        <ViewRoutes />
    </AuthProvider>
  );
};

export default App;
