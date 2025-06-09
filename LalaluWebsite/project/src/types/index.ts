export interface Service {
  id: string;
  name: string;
  price: number;
  duration: number;
  description: string;
  category: 'facial' | 'laser' | 'treatment';
  benefits: string[];
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