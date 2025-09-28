import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Desktop hover/focus states
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isConcernsOpen, setIsConcernsOpen] = useState(false);

  // Mobile accordions
  const [isAboutOpenMobile, setIsAboutOpenMobile] = useState(false);
  const [isConcernsOpenMobile, setIsConcernsOpenMobile] = useState(false);

  const location = useLocation();


  const concerns = [
    { name: 'Acne', href: '/concerns/acne' },
    { name: 'Brightness & Dullness', href: '/concerns/brightness' },
    { name: 'Pigmentation', href: '/concerns/pigmentation' },
    { name: 'Sensitivity & Redness', href: '/concerns/sensitivity' },
    { name: 'Aging (Lines & Firmness)', href: '/concerns/aging' },
    { name: 'Dryness & Dehydration', href: '/concerns/dryness' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Row */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/logo.png"
              alt="Lalalu Skin & Laser"
              className="h-[5rem] w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {/* Home */}
            <Link
              to="/"
              className={`${
                isActive('/')
                  ? 'text-[#6a4c69] border-b-2 border-[#6a4c69]'
                  : 'text-gray-700 hover:text-[#6a4c69]'
              } pb-1 transition-colors font-medium`}
            >
              Home
            </Link>

            {/* About (desktop dropdown) */}
            <div
              className="relative"
              onMouseEnter={() => setIsAboutOpen(true)}
              onMouseLeave={() => setIsAboutOpen(false)}
            >
              <Link
                to="/about"
                className={`${
                  isActive('/about')
                    ? 'text-[#6a4c69] border-b-2 border-[#6a4c69]'
                    : 'text-gray-700 hover:text-[#6a4c69]'
                } pb-1 transition-colors font-medium flex items-center gap-1`}
                aria-haspopup="true"
                aria-expanded={isAboutOpen}
              >
                About <ChevronDown className="h-4 w-4" />
              </Link>

              {isAboutOpen && (
                <div className="absolute left-0 top-full w-56 rounded-lg bg-white shadow-xl border border-gray-100 py-2 z-50">
                  <Link
                    to="/about"
                    className={`block px-4 py-2 text-sm ${
                      isActive('/about')
                        ? 'text-[#6a4c69] bg-[#f6f0fa]'
                        : 'text-gray-700 hover:bg-[#f6f0fa] hover:text-[#6a4c69]'
                    }`}
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/products"
                    className={`block px-4 py-2 text-sm ${
                      isActive('/products')
                        ? 'text-[#6a4c69] bg-[#f6f0fa]'
                        : 'text-gray-700 hover:bg-[#f6f0fa] hover:text-[#6a4c69]'
                    }`}
                    onClick={() => setIsAboutOpen(false)}
                  >
                    Products
                  </Link>
                </div>
              )}
            </div>

            {/* Services */}
            <Link
              to="/services"
              className={`${
                isActive('/services')
                  ? 'text-[#6a4c69] border-b-2 border-[#6a4c69]'
                  : 'text-gray-700 hover:text-[#6a4c69]'
              } pb-1 transition-colors font-medium`}
            >
              Services
            </Link>

            {/* Skin Concerns dropdown (desktop) */}
            <div
              className="relative"
              onMouseEnter={() => setIsConcernsOpen(true)}
              onMouseLeave={() => setIsConcernsOpen(false)}
            >
              <button
                className={`flex items-center gap-1 pb-1 font-medium transition-colors ${
                  location.pathname.startsWith('/concerns')
                    ? 'text-[#6a4c69] border-b-2 border-[#6a4c69]'
                    : 'text-gray-700 hover:text-[#6a4c69]'
                }`}
                aria-haspopup="true"
                aria-expanded={isConcernsOpen}
              >
                Skin Concerns <ChevronDown className="h-4 w-4" />
              </button>

              {isConcernsOpen && (
                <div className="absolute left-0 top-full w-64 rounded-lg bg-white shadow-xl border border-gray-100 py-2 z-50">
                  {concerns.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f6f0fa] hover:text-[#6a4c69]"
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Contact */}
            <Link
              to="/contact"
              className={`${
                isActive('/contact')
                  ? 'text-[#6a4c69] border-b-2 border-[#6a4c69]'
                  : 'text-gray-700 hover:text-[#6a4c69]'
              } pb-1 transition-colors font-medium`}
            >
              Contact
            </Link>

            {/* Book Now */}
            <Link
              to="/book"
              className="font-medium bg-[#6a4c69] text-white px-6 py-2 rounded-full hover:bg-[#a085b4] transition-colors border-0"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-top border-gray-200">
            <div className="flex flex-col space-y-2">
              {/* Home */}
              <Link
                to="/"
                className={`${
                  isActive('/')
                    ? 'text-[#6a4c69] bg-[#f6f0fa]'
                    : 'text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa]'
                } px-4 py-2 rounded-md font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>

              {/* About (mobile accordion) */}
              <button
                className="flex items-center justify-between px-4 py-2 rounded-md text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa] font-medium"
                onClick={() => setIsAboutOpenMobile(!isAboutOpenMobile)}
                aria-expanded={isAboutOpenMobile}
              >
                <span>About</span>
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    isAboutOpenMobile ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isAboutOpenMobile && (
                <div className="ml-2 flex flex-col space-y-1">
                  <Link
                    to="/about"
                    className="px-4 py-2 text-sm rounded-md text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa]"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpenMobile(false);
                    }}
                  >
                    Our Story
                  </Link>
                  <Link
                    to="/products"
                    className="px-4 py-2 text-sm rounded-md text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa]"
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsAboutOpenMobile(false);
                    }}
                  >
                    Products
                  </Link>
                </div>
              )}

              {/* Services */}
              <Link
                to="/services"
                className={`${
                  isActive('/services')
                    ? 'text-[#6a4c69] bg-[#f6f0fa]'
                    : 'text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa]'
                } px-4 py-2 rounded-md font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>

              {/* Skin Concerns (mobile accordion) */}
              <button
                className="flex items-center justify-between px-4 py-2 rounded-md text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa] font-medium"
                onClick={() => setIsConcernsOpenMobile(!isConcernsOpenMobile)}
                aria-expanded={isConcernsOpenMobile}
              >
                <span>Skin Concerns</span>
                <ChevronDown
                  className={`h-4 w-4 transform transition-transform ${
                    isConcernsOpenMobile ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {isConcernsOpenMobile && (
                <div className="ml-2 flex flex-col space-y-1">
                  {concerns.map((c) => (
                    <Link
                      key={c.href}
                      to={c.href}
                      className="px-4 py-2 text-sm rounded-md text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa]"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsConcernsOpenMobile(false);
                      }}
                    >
                      {c.name}
                    </Link>
                  ))}
                </div>
              )}

              {/* Contact */}
              <Link
                to="/contact"
                className={`${
                  isActive('/contact')
                    ? 'text-[#6a4c69] bg-[#f6f0fa]'
                    : 'text-gray-700 hover:text-[#6a4c69] hover:bg-[#f6f0fa]'
                } px-4 py-2 rounded-md font-medium transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>

              {/* Book Now */}
              <Link
                to="/book"
                className="px-4 py-2 rounded-md font-medium bg-[#6a4c69] text-white hover:bg-[#a085b4] transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
