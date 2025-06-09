import React, { createContext, useContext, useState } from 'react';
import { Appointment, BookingFormData } from '../types';
import { services } from '../data/services';

interface BookingContextType {
  bookAppointment: (bookingData: BookingFormData) => Promise<boolean>;
  getAvailableSlots: (date: string) => string[];
  isLoading: boolean;
}

const BookingContext = createContext<BookingContextType | undefined>(undefined);

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (context === undefined) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};

export const BookingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const getAvailableSlots = (date: string): string[] => {
    // Generate available time slots from 9 AM to 8 PM
    const slots = [];
    for (let hour = 9; hour < 20; hour++) {
      slots.push(`${hour.toString().padStart(2, '0')}:00`);
      if (hour < 19) { // Don't add 30-minute slot for the last hour
        slots.push(`${hour.toString().padStart(2, '0')}:30`);
      }
    }
    
    // For demo purposes, randomly remove some slots to simulate bookings
    const availableSlots = slots.filter(() => Math.random() > 0.3);
    return availableSlots;
  };

  const bookAppointment = async (bookingData: BookingFormData): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const service = services.find(s => s.id === bookingData.serviceId);
    if (!service) {
      setIsLoading(false);
      return false;
    }

    // In a real app, this would save to a database
    const appointment: Appointment = {
      id: Date.now().toString(),
      clientId: 'guest',
      serviceId: bookingData.serviceId,
      serviceName: service.name,
      date: bookingData.date,
      time: bookingData.time,
      status: 'upcoming',
      price: service.price,
      notes: bookingData.notes
    };

    // Store in localStorage for demo purposes
    const existingBookings = JSON.parse(localStorage.getItem('lalalu_bookings') || '[]');
    existingBookings.push(appointment);
    localStorage.setItem('lalalu_bookings', JSON.stringify(existingBookings));

    setIsLoading(false);
    return true;
  };

  return (
    <BookingContext.Provider value={{ bookAppointment, getAvailableSlots, isLoading }}>
      {children}
    </BookingContext.Provider>
  );
};