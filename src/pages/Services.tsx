import React, { useState } from 'react';
import { Clock, Star } from 'lucide-react';
import { services } from '../data/services';
import Card from '../components/UI/Card';

const Services: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', name: 'All Services' },
    { id: 'facial', name: 'Facials' },
    { id: 'laser', name: 'Laser Treatments' },
    { id: 'treatment', name: 'Specialty Treatments' }
  ];

  const filteredServices = services.filter((service) => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory;
    const matchesSearch = service.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          service.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
       {/* Hero Section */}
       <section className="relative bg-gradient-to-br from-[#d2b9e3] via-[#b4a1d3] to-lavender-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8">
              Professional treatments designed to help you achieve your skin goals
            </p>
          </div>
        </div>
      </section>

      {/* Special Offers Banner */}
      <section className="bg-gradient-to-r from-[#6a4c69] to-[#a085b4] text-white py-8">
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

      {/* Search + Category Filters */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <input
            type="text"
            placeholder="Search services..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-md mx-auto block mb-6 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
          />
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-[#6a4c69] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#d2b9e3] hover:text-white'
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <Card key={service.id} hover className="overflow-hidden">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-gray-900 flex-1">
                    {service.name}
                  </h3>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-[#6a4c69]">${service.price}</div>
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      {service.duration} min
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <Star className="h-3 w-3 text-[#6a4c69] mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="text-sm text-[#a085b4] font-medium">
                  View availability on the <a href="/book" className="underline">booking page</a>
                </p>
              </div>
            </Card>
          ))}
          {filteredServices.length === 0 && (
            <p className="text-center col-span-full text-gray-500">No services found.</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Services;
