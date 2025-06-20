import React from 'react';
import { MapPin, Phone, Clock, Mail, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#6a4c69] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <img 
              src="/Adobe Express - file.png" 
              alt="Lalalu Skin & Laser" 
              className="h-16 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-gray-300 mb-4 max-w-md">
              Your destination for professional skin care and laser treatments. 
              We provide a relaxing environment where you can rejuvenate and renew your skin.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300">
                  183 Nolancrest Heights NW<br />
                  Calgary, Alberta, T3R 0T3
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">(403) 607-1443</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-purple-400 flex-shrink-0" />
                <span className="text-gray-300">info@lalaluskin.com</span>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Hours</h3>
            <div className="flex items-start space-x-3">
              <Clock className="h-5 w-5 text-purple-400 mt-0.5 flex-shrink-0" />
              <div className="text-gray-300">
                <p>Monday - Sunday</p>
                <p className="font-medium">9:00 AM - 8:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* Special Offers */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="bg-gradient-to-r from-[#d2b9e3] to-[#b7a0c7] rounded-lg p-6 text-center">
            <h3 className="text-xl font-bold mb-2">Special Offers</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-semibold">Buy One Get One 50% Off</p>
                <p>On all services</p>
              </div>
              <div>
                <p className="font-semibold">Add Dermaplaning</p>
                <p>To any facial for just $40</p>
              </div>
              <div>
                <p className="font-semibold">Combine Two Services</p>
                <p>For an extra $60</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-grey-300">
          <p>&copy; 2025 Lalalu Skin & Laser. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;