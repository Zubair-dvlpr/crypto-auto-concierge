import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [credits, setCredits] = useState();
  const [user, setUser] = useState(() => {
    // Initialize from localStorage on first load
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });
  const [loading, setLoading] = useState(true);
  const [animation, setAnimation] = useState(false);

  // Load user from localStorage when the app is reloaded
 

  // // ✅ Updated Fake Users Database with fname & sname
  // const [usersDB, setUsersDB] = useState([
  //   { id: 1, fname: "Admin", sname: "User", email: "test@gmail.com", password: "1" },
  //   { id: 2, fname: "John", sname: "Doe", email: "user@example.com", password: "user123" }
  // ]);
  // console.log(usersDB);



 // Re-run when the user is set or updated


  // Fetch user data after user is set



  






  const [projects, setProjects] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  
  return (
    <AuthContext.Provider value={{ user, credits,  loading,  animation, setAnimation, projects, setProjects, selectedProject, setSelectedProject }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;