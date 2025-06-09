import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Star, ArrowRight } from 'lucide-react';
import { services } from '../data/services';
import Card from '../components/UI/Card';
import Button from '../components/UI/Button';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'facial', name: 'Facials' },
    { id: 'laser', name: 'Laser Treatments' },
    { id: 'treatment', name: 'Specialty Treatments' }
  ];

  const filteredServices = selectedCategory === 'all' 
    ? services 
    : services.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-lavender-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-purple-600">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional treatments designed to help you achieve your skin goals
            </p>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-gradient-to-r from-purple-600 to-lavender-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="font-semibold">🎉 BOGO 50% Off</p>
              <p className="text-sm opacity-90">Buy one service, get second 50% off</p>
            </div>
            <div>
              <p className="font-semibold">✨ Add Dermaplaning</p>
              <p className="text-sm opacity-90">To any facial for just $40</p>
            </div>
            <div>
              <p className="font-semibold">💫 Combo Deal</p>
              <p className="text-sm opacity-90">Combine two services for extra $60</p>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-purple-100 hover:text-purple-600'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <Card key={service.id} hover className="overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-gray-900 flex-1">
                      {service.name}
                    </h3>
                    <div className="text-right ml-4">
                      <div className="text-2xl font-bold text-purple-600">
                        ${service.price}
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        {service.duration} min
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4">
                    {service.description}
                  </p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-600">
                          <Star className="h-3 w-3 text-purple-600 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={`/book?service=${service.id}`} className="block">
                    <Button className="w-full">
                      Book This Service
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-On Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enhance Your Treatment
            </h2>
            <p className="text-xl text-gray-600">
              Add these services to maximize your results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Add Dermaplaning
              </h3>
              <p className="text-gray-600 mb-4">
                Enhance any facial with gentle exfoliation that removes dead skin cells and peach fuzz
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">
                Only $40
              </div>
              <p className="text-sm text-gray-500">
                When added to any facial service
              </p>
            </Card>
            
            <Card className="p-6 text-center">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Combine Two Services
              </h3>
              <p className="text-gray-600 mb-4">
                Mix and match any two services in one appointment for comprehensive care
              </p>
              <div className="text-2xl font-bold text-purple-600 mb-4">
                Extra $60
              </div>
              <p className="text-sm text-gray-500">
                Additional fee for combining services
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-lavender-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Book Your Treatment?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your service and schedule your appointment today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto">
                Have Questions?
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;