import React, { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';
import LoadingSpinner from '../components/UI/LoadingSpinner';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  useEffect(() => {
      // Scroll to the top when the component mounts
      window.scrollTo(0, 0);
  }, []);
    
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
  
    try {
      await emailjs.send(
        "service_sjg74w8",      // e.g., "service_123abc"
        "template_i6r469s",     // e.g., "template_456xyz"
        formData,               // your form values: name, email, etc.
        "jTgMDDl0Gh9lXuOh5"       // e.g., "KjdfNjsn73kd" from EmailJS
      );
  
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email failed:', error);
      alert('Failed to send message. Please try again later.');
    }
  
    setIsSubmitting(false);
  };
  

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-[#6a4c69]" />,
      title: 'Visit Us',
      details: ['Nolan Hill', 'NW Calgary, AB']
    },
    {
      icon: <Phone className="h-6 w-6 text-[#6a4c69]" />,
      title: 'Call Us',
      details: ['(403) 607-1443', 'Available during business hours']
    },
    {
      icon: <Mail className="h-6 w-6 text-[#6a4c69]" />,
      title: 'Email Us',
      details: ['info@lalaluskinlaser.com', 'We respond within 24 hours']
    },
    {
      icon: <Clock className="h-6 w-6 text-[#6a4c69]" />,
      title: 'Hours',
      details: ['Monday - Sunday', '9:00 AM - 8:00 PM']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#6a4c69] via-[#a085b4] to-[#d2b9e3] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-white-600 max-w-3xl mx-auto">
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
                        <LoadingSpinner size="sm" className="mr-2" />
                        Sending Message...
                      </>
                    ) : (
                      <span className="inline-flex items-center">
                        Send Message
                        <Send className="ml-2 h-5 w-5" />
                      </span>

                    )}
                  </Button>
                </form>
              )}
            </Card>

            {/* Map Placeholder */}
            <Card className="p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Us</h2>

            {/* Google Maps Embed Centered on Nolan Hill */}
            <div className="rounded-lg h-96 mb-6 overflow-hidden">
              <iframe
                title="Lalalu Location - Nolan Hill"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10064.744506698475!2d-114.169!3d51.175!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537170a319b0ee25%3A0x37ce6c7371e17c86!2sNolan%20Hill%2C%20Calgary%2C%20AB!5e0!3m2!1sen!2sca!4v1721598800000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              ></iframe>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Parking</h3>
                <p className="text-gray-600">Free parking available on the street.</p>
              </div>
              <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Home Based Business</h3>
                  <p className="text-gray-600">The exact address will be shared after your appointment is confirmed.</p>
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
                 Yes! Treatments are customized for your unique skin type and concerns to 
                 ensure the best possible care and results.
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