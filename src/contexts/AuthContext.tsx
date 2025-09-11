import React, { createContext, useContext, useState, useEffect } from "react";

interface User {
  id: string;
  email: string;
  accountType: "regular" | "enterprise";
  businessName?: string;
  businessAddress?: string;
  walletAddress?: string;
  createdAt: Date;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (data: SignupData) => Promise<void>;
  logout: () => void;
  connectWallet: (address: string) => void;
}

interface SignupData {
  email: string;
  password: string;
  accountType: "regular" | "enterprise";
  businessName?: string;
  businessAddress?: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const storedUser = localStorage.getItem("allegra_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string) => {
    // Mock login - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const mockUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      accountType: "regular",
      walletAddress: "0x" + Math.random().toString(36).substr(2, 10),
      createdAt: new Date(),
    };
    
    setUser(mockUser);
    localStorage.setItem("allegra_user", JSON.stringify(mockUser));
  };

  const signup = async (data: SignupData) => {
    // Mock signup - in production, this would call an API
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email: data.email,
      accountType: data.accountType,
      businessName: data.businessName,
      businessAddress: data.businessAddress,
      createdAt: new Date(),
    };
    
    setUser(newUser);
    localStorage.setItem("allegra_user", JSON.stringify(newUser));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("allegra_user");
  };

  const connectWallet = (address: string) => {
    if (user) {
      const updatedUser = { ...user, walletAddress: address };
      setUser(updatedUser);
      localStorage.setItem("allegra_user", JSON.stringify(updatedUser));
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout, connectWallet }}>
      {children}
    </AuthContext.Provider>
  );
};