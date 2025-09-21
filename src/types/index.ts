export type ServiceTier = {
  name: string;
  price: number;
  originalPrice?: number; // optional: supports crossed-out sales per tier
  description?: string; // will show in service detail page
};

export interface Service {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  duration: number;
  description: string;
  category: 'facial' | 'laser' | 'treatment' | 'slimming';
  benefits: string[];
  tiers?: ServiceTier[];
}

export interface Appointment {
  id: string;
  clientId: string;
  serviceId: string;
  serviceName: string;
  date: string;
  time: string;
  status: 'upcoming' | 'completed' | 'cancelled';
  price: number;
  notes?: string;
}

export interface Client {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  appointments: Appointment[];
}

export interface BookingFormData {
  serviceId: string;
  date: string;
  time: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  notes?: string;
}