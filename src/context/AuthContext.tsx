import React, { createContext, useContext, useState, useEffect } from 'react';
import { Client } from '../types';

interface AuthContextType {
  client: Client | null;
  login: (email: string, password: string) => Promise<boolean>;
  register: (firstName: string, lastName: string, email: string, phone: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [client, setClient] = useState<Client | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored client data on app load
    const storedClient = localStorage.getItem('lalalu_client');
    if (storedClient) {
      setClient(JSON.parse(storedClient));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call - In production, this would be a real authentication
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // For demo purposes, accept any email/password combination
    const mockClient: Client = {
      id: '1',
      email,
      firstName: 'Jane',
      lastName: 'Doe',
      phone: '(555) 123-4567',
      appointments: [
        {
          id: '1',
          clientId: '1',
          serviceId: 'hydrofacial',
          serviceName: 'Hydrofacial with Face Cupping',
          date: '2024-01-15',
          time: '10:00',
          status: 'upcoming',
          price: 147
        },
        {
          id: '2',
          clientId: '1',
          serviceId: 'classic-facial',
          serviceName: 'Classic Facial',
          date: '2023-12-20',
          time: '14:00',
          status: 'completed',
          price: 77
        }
      ]
    };

    setClient(mockClient);
    localStorage.setItem('lalalu_client', JSON.stringify(mockClient));
    setIsLoading(false);
    return true;
  };

  const register = async (firstName: string, lastName: string, email: string, phone: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const newClient: Client = {
      id: Date.now().toString(),
      email,
      firstName,
      lastName,
      phone,
      appointments: []
    };

    setClient(newClient);
    localStorage.setItem('lalalu_client', JSON.stringify(newClient));
    setIsLoading(false);
    return true;
  };

  const logout = () => {
    setClient(null);
    localStorage.removeItem('lalalu_client');
  };

  return (
    <AuthContext.Provider value={{ client, login, register, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};