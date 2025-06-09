import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';

const Home: React.FC = () => {
  const features = [
    {
      icon: <Star className="h-8 w-8 text-purple-600" />,
      title: 'Premium Treatments',
      description: 'State-of-the-art equipment and professional-grade products for optimal results.'
    },
    {
      icon: <Clock className="h-8 w-8 text-purple-600" />,
      title: 'Flexible Hours',
      description: 'Open daily from 9 AM to 8 PM to accommodate your busy schedule.'
    },
    {
      icon: <Users className="h-8 w-8 text-purple-600" />,
      title: 'All Ages Welcome',
      description: 'Treatments suitable for teenagers to mature adults, customized for your needs.'
    },
    {
      icon: <Award className="h-8 w-8 text-purple-600" />,
      title: 'Expert Care',
      description: 'Professional aestheticians dedicated to helping you achieve your skin goals.'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      text: 'The Hydrofacial was amazing! My skin has never looked better. The staff is so professional and welcoming.',
      rating: 5
    },
    {
      name: 'Emily R.',
      text: 'I love coming here for my monthly facials. The atmosphere is so relaxing and the results are incredible.',
      rating: 5
    },
    {
      name: 'Jessica L.',
      text: 'The microneedling treatment exceeded my expectations. My skin texture has improved dramatically!',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-50 via-white to-lavender-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Sparkles className="h-12 w-12 text-purple-600 animate-float" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Relax, Rejuvenate, <span className="text-purple-600">Renew</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto animate-slide-up">
              Experience professional skin care and laser treatments in a luxurious, 
              relaxing environment designed for your ultimate wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/book">
                <Button size="lg" className="w-full sm:w-auto">
                  Book Your Treatment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-lavender-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Limited Time Offers</h2>
            <p className="text-xl opacity-90">Take advantage of these exclusive deals</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">BOGO 50% Off</h3>
              <p className="mb-4">Buy one service, get the second 50% off</p>
              <div className="text-2xl font-bold">All Services</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Add Dermaplaning</h3>
              <p className="mb-4">To any facial treatment</p>
              <div className="text-2xl font-bold">Only $40</div>
            </Card>
            <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-6 text-center">
              <h3 className="text-xl font-bold mb-2">Combo Deal</h3>
              <p className="mb-4">Combine any two services</p>
              <div className="text-2xl font-bold">Extra $60</div>
            </Card>
          </div>
          <div className="text-center mt-8">
            <p className="text-lg opacity-90">🎁 Free gift for first 200 customers with every service!</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Lalalu?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional care in a welcoming environment
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Popular Treatments
            </h2>
            <p className="text-xl text-gray-600">
              Our most loved services for radiant, healthy skin
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card hover className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg" 
                alt="Hydrofacial" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Hydrofacial with Face Cupping</h3>
                <p className="text-gray-600 mb-4">Deep hydration and lymphatic drainage for instant results</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">$147</span>
                  <Link to="/book">
                    <Button size="sm">Book Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
            
            <Card hover className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg" 
                alt="Microneedling" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Microneedling (Morpheus 8)</h3>
                <p className="text-gray-600 mb-4">Advanced RF microneedling for skin tightening and rejuvenation</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">$197</span>
                  <Link to="/book">
                    <Button size="sm">Book Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
            
            <Card hover className="overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg" 
                alt="BB Glow" 
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">BB Glow Treatment</h3>
                <p className="text-gray-600 mb-4">Semi-permanent makeup for flawless, glowing skin</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-purple-600">$97</span>
                  <Link to="/book">
                    <Button size="sm">Book Now</Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Real experiences from our valued clients
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-lavender-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Skin?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment today and experience the difference professional care makes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/book">
              <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 w-full sm:w-auto">
                Book Appointment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;