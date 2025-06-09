import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import { services } from '../data/services';
import { useBooking } from '../context/BookingContext';
import { BookingFormData } from '../types';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const BookNow: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { bookAppointment, getAvailableSlots, isLoading } = useBooking();
  
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedTime, setSelectedTime] = useState<string>('');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);
  const [isBookingComplete, setIsBookingComplete] = useState(false);
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    notes: ''
  });

  // Pre-select service if provided in URL
  useEffect(() => {
    const serviceParam = searchParams.get('service');
    if (serviceParam && services.find(s => s.id === serviceParam)) {
      setSelectedService(serviceParam);
      setStep(2);
    }
  }, [searchParams]);

  // Update available slots when date changes
  useEffect(() => {
    if (selectedDate) {
      const slots = getAvailableSlots(selectedDate);
      setAvailableSlots(slots);
      setSelectedTime(''); // Reset selected time
    }
  }, [selectedDate, getAvailableSlots]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedService(serviceId);
    setStep(2);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setStep(3);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setStep(4);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const bookingData: BookingFormData = {
      serviceId: selectedService,
      date: selectedDate,
      time: selectedTime,
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
      notes: formData.notes
    };

    const success = await bookAppointment(bookingData);
    if (success) {
      setIsBookingComplete(true);
      setStep(5);
    }
  };

  const generateDateOptions = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'long', 
          month: 'long', 
          day: 'numeric' 
        })
      });
    }
    
    return dates;
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const dateOptions = generateDateOptions();

  if (isBookingComplete) {
    return (
      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-8 w-8 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Booking Confirmed!
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              Thank you for booking with Lalalu Skin & Laser. We've sent a confirmation email with all the details.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-semibold text-gray-900 mb-4">Appointment Details:</h3>
              <div className="space-y-2">
                <p><strong>Service:</strong> {selectedServiceData?.name}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric',
                  year: 'numeric'
                })}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Duration:</strong> {selectedServiceData?.duration} minutes</p>
                <p><strong>Price:</strong> ${selectedServiceData?.price}</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => navigate('/')}>
                Return Home
              </Button>
              <Button variant="outline" onClick={() => navigate('/services')}>
                View More Services
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-lavender-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Book Your Appointment
            </h1>
            <p className="text-xl opacity-90">
              Follow these simple steps to schedule your treatment
            </p>
          </div>
          
          {/* Progress Steps */}
          <div className="flex justify-center mt-8">
            <div className="flex items-center space-x-4">
              {[1, 2, 3, 4].map((stepNumber) => (
                <React.Fragment key={stepNumber}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= stepNumber 
                      ? 'bg-white text-purple-600' 
                      : 'bg-white/20 text-white'
                  }`}>
                    {stepNumber}
                  </div>
                  {stepNumber < 4 && (
                    <div className={`w-8 h-0.5 ${
                      step > stepNumber ? 'bg-white' : 'bg-white/20'
                    }`} />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Step 1: Select Service */}
        {step === 1 && (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm mr-3">1</span>
              Select Your Service
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.id}
                  onClick={() => handleServiceSelect(service.id)}
                  className="border-2 border-gray-200 rounded-lg p-4 cursor-pointer hover:border-purple-600 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-gray-900">{service.name}</h3>
                    <span className="text-lg font-bold text-purple-600">${service.price}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-2">{service.description}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    {service.duration} minutes
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Step 2: Select Date */}
        {step === 2 && selectedServiceData && (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm mr-3">2</span>
              Select Date
            </h2>
            
            <div className="mb-6 p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-1">Selected Service:</h3>
              <p className="text-purple-800">{selectedServiceData.name} - ${selectedServiceData.price}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dateOptions.map((date) => (
                <button
                  key={date.value}
                  onClick={() => handleDateSelect(date.value)}
                  className="p-4 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-md transition-all duration-200 text-left"
                >
                  <div className="flex items-center">
                    <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                    <span className="font-medium">{date.label}</span>
                  </div>
                </button>
              ))}
            </div>
          </Card>
        )}

        {/* Step 3: Select Time */}
        {step === 3 && selectedServiceData && (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm mr-3">3</span>
              Select Time
            </h2>
            
            <div className="mb-6 p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-1">Selected:</h3>
              <p className="text-purple-800">
                {selectedServiceData.name} on {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
            </div>
            
            {availableSlots.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {availableSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => handleTimeSelect(time)}
                    className="p-3 border-2 border-gray-200 rounded-lg hover:border-purple-600 hover:shadow-md transition-all duration-200 text-center"
                  >
                    <div className="flex items-center justify-center">
                      <Clock className="h-4 w-4 text-purple-600 mr-1" />
                      <span className="font-medium">{time}</span>
                    </div>
                  </button>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-600">No available slots for this date. Please select another date.</p>
                <Button 
                  variant="outline" 
                  onClick={() => setStep(2)}
                  className="mt-4"
                >
                  Choose Different Date
                </Button>
              </div>
            )}
          </Card>
        )}

        {/* Step 4: Contact Information */}
        {step === 4 && selectedServiceData && (
          <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm mr-3">4</span>
              Your Information
            </h2>
            
            <div className="mb-6 p-4 bg-purple-50 rounded-lg">
              <h3 className="font-semibold text-purple-900 mb-2">Appointment Summary:</h3>
              <div className="text-purple-800 space-y-1">
                <p><strong>Service:</strong> {selectedServiceData.name}</p>
                <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  month: 'long', 
                  day: 'numeric' 
                })}</p>
                <p><strong>Time:</strong> {selectedTime}</p>
                <p><strong>Duration:</strong> {selectedServiceData.duration} minutes</p>
                <p><strong>Price:</strong> ${selectedServiceData.price}</p>
              </div>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-1" />
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-1" />
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-1" />
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 inline mr-1" />
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                  <MessageSquare className="h-4 w-4 inline mr-1" />
                  Special Notes (Optional)
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Any special requests or information we should know..."
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setStep(3)}
                  className="w-full sm:w-auto"
                >
                  Back to Time Selection
                </Button>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full sm:flex-1"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <LoadingSpinner size="sm\" className="mr-2" />
                      Booking Appointment...
                    </>
                  ) : (
                    'Confirm Booking'
                  )}
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </div>
  );
};

export default BookNow;