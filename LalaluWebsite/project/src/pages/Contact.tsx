import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: 'Visit Us',
      details: ['123 Beauty Lane', 'Wellness City, WC 12345']
    },
    {
      icon: <Phone className="h-6 w-6 text-purple-600" />,
      title: 'Call Us',
      details: ['(555) 123-4567', 'Available during business hours']
    },
    {
      icon: <Mail className="h-6 w-6 text-purple-600" />,
      title: 'Email Us',
      details: ['info@lalaluskin.com', 'We respond within 24 hours']
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: 'Hours',
      details: ['Monday - Sunday', '9:00 AM - 8:00 PM']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-lavender-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact <span className="text-purple-600">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              We'd love to hear from you. Get in touch with any questions or to schedule your appointment.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600">
                    {detail}
                  </p>
                ))}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
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
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="booking">Booking Question</option>
                        <option value="services">Service Information</option>
                        <option value="pricing">Pricing Question</option>
                        <option value="general">General Inquiry</option>
                        <option value="feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors resize-none"
                      placeholder="Tell us how we can help you..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <LoadingSpinner size="sm\" className="mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </Button>
                </form>
              )}
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Find Us
              </h2>
              <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center mb-6">
                <div className="text-center text-gray-500">
                  <MapPin className="h-12 w-12 mx-auto mb-2" />
                  <p>Interactive Map</p>
                  <p className="text-sm">123 Beauty Lane, Wellness City</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                  <p className="text-gray-600">Free parking available in our lot and on the street.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Public Transportation</h3>
                  <p className="text-gray-600">Conveniently located near bus stops and metro stations.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Accessibility</h3>
                  <p className="text-gray-600">Our facility is fully wheelchair accessible.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Quick answers to common questions
            </p>
          </div>
          
          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Do I need to book in advance?
              </h3>
              <p className="text-gray-600">
                Yes, we recommend booking in advance to secure your preferred time slot. 
                You can book online or call us directly.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What should I expect during my first visit?
              </h3>
              <p className="text-gray-600">
                During your first visit, we'll conduct a skin consultation to understand 
                your concerns and goals, then recommend the best treatment plan for you.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Are your treatments suitable for all skin types?
              </h3>
              <p className="text-gray-600">
                Yes! We customize all treatments based on your individual skin type and concerns. 
                Our experienced aestheticians will ensure you receive the most appropriate care.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                What is your cancellation policy?
              </h3>
              <p className="text-gray-600">
                We require 24-hour notice for cancellations. Late cancellations or no-shows 
                may be subject to a fee.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;