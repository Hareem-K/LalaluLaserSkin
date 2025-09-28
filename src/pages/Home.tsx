import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, Clock, Users, Award, ArrowRight } from 'lucide-react';
import Button from '../components/UI/Button';
import Card from '../components/UI/Card';
import { Helmet } from 'react-helmet-async';

/* ---- tiny reveal-on-scroll hook ---- */
const useReveal = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          io.unobserve(el); // reveal once
        }
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
};

/* ---- wrapper that applies the reveal animation ---- */
const RevealSection: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { ref, visible } = useReveal();
  return (
    <div
      ref={ref}
      className={`transition-all duration-[900ms] ease-out will-change-transform
        ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
    >
      {children}
    </div>
  );
};


const Home: React.FC = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Star className="h-8 w-8 text-[#6a4c69]" />,
      title: 'Premium Treatments',
      description: 'State-of-the-art equipment and professional-grade products for optimal results.'
    },
    {
      icon: <Clock className="h-8 w-8 text-[#6a4c69]" />,
      title: 'Flexible Hours',
      description: 'Open daily from 11 AM to 7 PM to accommodate your busy schedule.'
    },
    {
      icon: <Users className="h-8 w-8 text-[#6a4c69]" />,
      title: 'All Ages Welcome',
      description: 'Treatments suitable for teenagers to mature adults, customized for your needs.'
    },
    {
      icon: <Award className="h-8 w-8 text-[#6a4c69]" />,
      title: 'Expert Care',
      description: 'Professional aestheticians dedicated to helping you achieve your skin goals.'
    }
  ];

  const testimonials = [
    {
      name: 'Saima J.',
      text: 'Cozy place with exceptional service! Aasia explained every step of the process and did an excellent job with my face! My first ever hydra facial with her and she made me feel so comfortable. My skin feels rejuvenated. I have already booked my next appointment with her for Derma-skin Brasion followed by hydra facial.',
      rating: 5
    },
    {
      name: 'Tabbasum A.',
      text: 'Best esthetian in NW. Aasia is full of knowledge with experience of 4+ years. She have best knowledge about microneedling. I used to go to her past 1 year.',
      rating: 5
    },
    {
      name: 'Hareem K.',
      text: 'I’ve had a few microneedling sessions here and I can honestly say I see such a big difference in my skin. My pigmentation has noticeably faded, my texture feels smoother, and my overall complexion just looks healthier and more even. I’m so happy with the results and excited to continue seeing improvements with every treatment!',
      rating: 5

    }
  ];

  return (
    <>
      <Helmet>
        <title>Calgary Skin Care & Laser Clinic | Lalalu Skin & Laser</title>
        <meta
          name="description"
          content="HydraFacials, microneedling (RF), laser skin treatments, and premium facials in Calgary. Book online at Lalalu Skin & Laser."
        />
        <link rel="canonical" href="https://lalaluskinlaser.com/" />
        <meta name="robots" content="index,follow" />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Lalalu Skin & Laser" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:title" content="Calgary Skin Care & Laser Clinic | Lalalu Skin & Laser" />
        <meta property="og:description" content="HydraFacials, microneedling (RF), laser skin treatments, and premium facials in Calgary. Book online at Lalalu Skin & Laser." />
        <meta property="og:url" content="https://lalaluskinlaser.com/" />
        <meta property="og:image" content="https://lalaluskinlaser.com/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Lalalu Skin & Laser — Calgary" />
        <meta property="og:image:secure_url" content="https://lalaluskinlaser.com/og-image.jpg" />

        {/* Twitter card */}
        <meta name="twitter:card" content="summary_large_image" />

        {/* Hreflang */}
        <link rel="alternate" href="https://lalaluskinlaser.com/" hrefLang="en-CA" />
        <link rel="alternate" href="https://lalaluskinlaser.com/" hrefLang="x-default" />

        {/* Organization JSON-LD */}
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Lalalu Skin & Laser",
          "url": "https://lalaluskinlaser.com/",
          "logo": "https://lalaluskinlaser.com/logo.png"
        })}</script>
      </Helmet>


      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-[#6a4c69] via-[#b085b9] to-[#e4d2ec] bg-[length:200%_200%] bg-[position:0%_50%] bg-no-repeat py-32 overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg')] bg-cover bg-center opacity-10"></div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 animate-fade-in">
              Relax, Rejuvenate, <span className="text-white">Renew</span>
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-slide-up">
              Experience professional skin care and laser treatments in a luxurious, relaxing environment designed for your ultimate wellness journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Link to="/book">
                <Button
                  size="lg"
                  className="px-8 py-3.5 text-lg w-full sm:w-auto"
                >
                  <span className="inline-flex items-center">
                    Book Your Treatment
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </Button>
              </Link>
              <Link to="/services">
                <Button
                  variant="outlineWhite" 
                  size="lg"
                  className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-[#6a4c66] w-full sm:w-auto"
                >
                  View Services
                </Button>
              </Link>
            </div>
          </div>
        </section>


        {/* Special Offers */}
        <section className="py-16 bg-gradient-to-r from-[#6a4c69] to-[#a085b4] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Limited Time Offers</h2>
              <p className="text-xl opacity-90">Take advantage of these exclusive deals</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">BOGO 20% Off</h3>
                <p className="mb-4">Buy one service, get the second 20% off</p>
                <div className="text-2xl font-bold">All Services</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">B2GO 50% Off</h3>
                <p className="mb-4">Buy two services, get the third 50% off</p>
                <div className="text-2xl font-bold">All Services</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">B3GO Free</h3>
                <p className="mb-4">Buy three services, get the fourth one free</p>
                <div className="text-2xl font-bold">All Services</div>
              </Card>
              <Card className="bg-white/10 backdrop-blur-sm border border-white/20 text-white p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Free Add-On</h3>
                <p className="mb-4">Complimentary Dermaplaning or Face Cupping add-on</p>
                <div className="text-2xl font-bold">With Any Facial</div>
              </Card>
            </div>
          </div>
        </section>

        {/* Features */}
        <RevealSection>
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
        </RevealSection>

        {/* Popular Services */}
        <RevealSection>
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
                    src="https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg" 
                    alt="Microneedling" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Morpheus8 Microneedling</h3>
                    <p className="text-gray-600 mb-4">Tighten skin and smooth texture with RF-powered microneedling.</p>
                    <div className="flex justify-between items-center">
                      <Link to="/book">
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
                
                <Card hover className="overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3985327/pexels-photo-3985327.jpeg" 
                    alt="Microdermabrasion" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Microdermabrasion</h3>
                    <p className="text-gray-600 mb-4">Gentle exfoliation for smoother, more radiant skin.</p>
                    <div className="flex justify-between items-center">
                      <Link to="/book">
                        <Button size="sm">Book Now</Button>
                      </Link>
                    </div>
                  </div>
                </Card>
                
                <Card hover className="overflow-hidden">
                  <img 
                    src="https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg" 
                    alt="Hydrafacial" 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">HydraFacial</h3>
                    <p className="text-gray-600 mb-4">Deeply cleanses, exfoliate, and hydrates in one gentle treatment.</p>
                    <div className="flex justify-between items-center">
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
                    <span className="inline-flex items-center">
                      View All Services
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </RevealSection>

        {/* Testimonials */}
        <RevealSection>
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
        </RevealSection>

        {/* Circadia Feature — photo background + overlay + logo + product shot */}
        <RevealSection>
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="relative overflow-hidden rounded-3xl">
                {/* Background image with brand gradient overlay */}
                <div
                  className="absolute inset-0 bg-center bg-cover"
                  style={{
                    backgroundImage: "url('/Circadia/PreProFacial10.jpg')", // use any hero-y Circadia photo here
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0F1E3D]/85 via-[#2E3F73]/70 to-[#6a4c69]/60" />

                {/* Content */}
                <div className="relative grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 md:p-12">
                  {/* Left: logo + copy */}
                  <div className="text-white">
                    <img
                      src="/Circadia/circadia-logo-white.png"
                      alt="Circadia Professional Skincare"
                      className="h-10 md:h-12 mb-4 drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]"
                      loading="lazy"
                    />
                    <h3 className="text-2xl md:text-3xl font-bold">We partner with Circadia®</h3>
                    <p className="text-white/90 mt-3 max-w-xl">
                      Clinical, professional-only formulations rooted in chronobiology, designed to respect the skin barrier 
                      while delivering visible, lasting results.
                    </p>
                    <ul className="mt-5 space-y-2">
                      <li className="flex items-start">
                        <span className="mt-0.5 mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">✓</span>
                        Science-backed ingredients
                      </li>
                      <li className="flex items-start">
                        <span className="mt-0.5 mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">✓</span>
                        Barrier-friendly, gentle actives
                      </li>
                      <li className="flex items-start">
                        <span className="mt-0.5 mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/15">✓</span>
                        Professional-only protocols & home-care
                      </li>
                    </ul>

                    <div className="mt-6">
                      <Link to="/products">
                        <Button size="lg" className="bg-white !text-[#0F1E3D] hover:bg-gray-100">
                          Learn about Circadia
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Right: foreground product photo on glassy card */}
                  <div className="flex justify-center md:justify-end">
                    <Card className="bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl p-3 md:p-4 max-w-md w-full">
                      <img
                        src="/Circadia/products-1.jpg" // swap to your favorite product lineup image
                        alt="Circadia products"
                        loading="lazy"
                        className="w-full h-64 md:h-80 object-cover rounded-xl"
                      />
                      {/* <div className="mt-3 grid grid-cols-3 gap-2">
                        <img src="/Circadia/products-1.jpg" className="h-20 w-full object-cover rounded-lg" alt="" />
                        <img src="/Circadia/products-2.jpg" className="h-20 w-full object-cover rounded-lg" alt="" />
                        <img src="/Circadia/products-4.jpg" className="h-20 w-full object-cover rounded-lg" alt="" />
                      </div> */}
                    
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </RevealSection>


        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-[#6a4c69] to-[#a085b4] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Skin?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Book your appointment today and experience the difference professional care makes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book">
              <Button
                size="lg"
                className="px-8 py-3.5 w-full sm:w-auto"
              >
                <span className="inline-flex items-center">
                  Book Appointment
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>


              </Link>
              <Link to="/contact">
                <Button
                  variant="outlineWhite"
                  size="lg"
                  className="px-8 py-3 text-lg border-white text-white hover:bg-white hover:text-[#6a4c66] w-full sm:w-auto"
                >
                  Contact Us
                </Button>
              </Link>

            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;