import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Insights', href: '#why-us' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Navigation Links Left */}
        <nav className="hidden md:flex items-center gap-8 font-roboto text-sm font-medium text-[#2D2D2D]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-brand-orange transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Logo Center */}
        <div className="flex items-center">
          <a
            href="#"
            className="inline-block font-medium text-[#AC5504] tracking-normal"
            style={{
              width: '127px',
              height: '13px',
              fontFamily: "'Cardo', 'Cordo', serif",
              fontStyle: 'normal',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '13px',
              color: '#AC5504',
            }}
          >
            MAHANAGAR
          </a>
        </div>

        {/* Contact Info Right */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="tel:+919885921560"
            className="flex items-center gap-2 font-roboto text-base text-black hover:text-brand-orange transition-colors"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>+91 - 98859 21560</span>
          </a>
          <a
            href="#contact"
            className="bg-[#FF8D28] text-black font-roboto font-medium px-6 py-2.5 rounded-full hover:bg-orange-600 hover:text-white transition-all duration-200 shadow-sm hover:shadow"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-gray-700 hover:text-brand-orange focus:outline-none"
          aria-label="Toggle Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 px-6 py-4 shadow-lg flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="font-roboto text-base font-medium text-[#2D2D2D] hover:text-brand-orange"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="tel:+919885921560"
              className="flex items-center gap-2 font-roboto text-base text-black"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>+91 - 98859 21560</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="bg-[#FF8D28] text-center text-black font-roboto font-medium px-6 py-2.5 rounded-full"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
