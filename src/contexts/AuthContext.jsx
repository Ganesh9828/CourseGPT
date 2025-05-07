
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Check if user is logged in from localStorage on load
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // In a real application, this would communicate with MongoDB
  const login = async (email, password) => {
    // Simulate API call to MongoDB
    try {
      // This is a mock response - in real app, would verify with backend
      if (email && password) {
        const userObject = {
          id: 'user123',
          name: 'Test User',
          email: email,
          role: 'user'
        };
        
        // Store user in localStorage
        localStorage.setItem('user', JSON.stringify(userObject));
        setCurrentUser(userObject);
        return userObject;
      } else {
        throw new Error('Invalid credentials');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  };

  const signup = async (name, email, password) => {
    // Simulate API call to MongoDB to create user
    try {
      // This is a mock - in real app would create user in MongoDB
      if (name && email && password) {
        const userObject = {
          id: 'new-user-' + Date.now(),
          name: name,
          email: email,
          role: 'user'
        };
        
        // Store user in localStorage
        localStorage.setItem('user', JSON.stringify(userObject));
        setCurrentUser(userObject);
        return userObject;
      } else {
        throw new Error('Invalid user data');
      }
    } catch (error) {
      console.error('Signup error:', error);
      throw error;
    }
  };

  const logout = () => {
    localStorage.removeItem('user');
    setCurrentUser(null);
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    isAuthenticated: !!currentUser
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
