import React from 'react';
import { Linkedin, Instagram, Youtube, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 pb-16">
          {/* Brand Column */}
          <div className="md:col-span-4 space-y-6">
            <a href="#" className="inline-block">
              <img
                src="/assets/Mahaveer Files/mahanagar_footer_logo.png"
                alt="Mahanagar Constructions"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </a>
            <h3 className="font-inter font-extrabold text-2xl lg:text-3xl text-gray-900 leading-tight">
              Building Homes. <br />
              Creating Better Tomorrows.
            </h3>
            <p className="font-inter text-sm text-[#595F69] leading-relaxed max-w-sm">
              Delivering quality construction, genuine materials, transparent execution, and dependable support from planning to handover.
            </p>
          </div>

          {/* Links Column 1: Company */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-inter font-bold text-base text-gray-900">Company</h4>
            <ul className="space-y-3 font-inter text-sm text-[#595F69]">
              <li>
                <a href="#about" className="hover:text-brand-orange transition-colors">About Us</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-brand-orange transition-colors">Our Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-orange transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Our Services */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-inter font-bold text-base text-gray-900">Our Services</h4>
            <ul className="space-y-3 font-inter text-sm text-[#595F69]">
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">Residential Construction</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-orange transition-colors">Commercial Construction</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-brand-orange transition-colors">Property Buying</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-brand-orange transition-colors">Property Selling</a>
              </li>
            </ul>
          </div>

          {/* Social Links Column */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-inter font-bold text-base text-gray-900">Follow Us</h4>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F7EAD3] text-gray-900 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F7EAD3] text-gray-900 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F7EAD3] text-gray-900 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-[#F7EAD3] text-gray-900 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Orange Strip Banner */}
      <div className="bg-[#FF8D28] text-[#103820] py-4 px-6">
        <div className="max-w-[1312px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 font-inter text-xs md:text-sm font-medium">
          <p>© 2026 Mahanagar Properties & Constructions. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
            <span>|</span>
            <a href="#" className="hover:underline">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
