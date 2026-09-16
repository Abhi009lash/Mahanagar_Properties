import React from 'react';
import { Phone, Calendar, Handshake, ShieldCheck, Building2, Clock, MapPin } from 'lucide-react';

const ReadyToBuildCTA = () => {
  const pillars = [
    {
      id: 1,
      title: 'Genuine Commitment',
      icon: Handshake,
      className: 'pr-2 sm:pr-4',
    },
    {
      id: 2,
      title: 'Transparent Process',
      icon: ShieldCheck,
      className: 'px-2 sm:px-4 border-l border-[#D1D5DB]',
    },
    {
      id: 3,
      title: 'Quality Construction',
      icon: Building2,
      className: 'px-2 sm:px-4 border-l border-[#D1D5DB]',
    },
    {
      id: 4,
      title: 'On-Time Delivery',
      icon: Clock,
      className: 'pl-2 sm:pl-4 border-l border-[#D1D5DB]',
    },
  ];

  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Frame 20 Container */}
        <div className="relative w-full max-w-[1246px] mx-auto min-h-[674px] rounded-[24px] overflow-hidden bg-white shadow-2xl border border-gray-100 flex flex-col items-center">
          
          {/* Frame 23: Main Content Auto Layout */}
          <div className="relative z-10 w-full max-w-[873px] mx-auto pt-[42px] px-4 flex flex-col items-center gap-[32px] text-center">
            
            {/* Ready to Build Your Dream? */}
            <h2 className="w-full font-jakarta font-black text-[36px] sm:text-[52px] md:text-[68px] leading-[1.05] tracking-[-1.7px] text-[#14181B]">
              Ready to Build <span className="text-[#FF8D28]">Your Dream?</span>
            </h2>

            {/* Frame 22: Trust Pillars + Interactive CTAs + Location bar */}
            <div className="w-full max-w-[617.94px] flex flex-col items-center gap-[24px]">
              
              {/* 4 Trust Pillars / Core Features */}
              <div className="flex flex-row items-center justify-center gap-[12px] sm:gap-[24px] h-[88px]">
                {pillars.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.id}
                      className={`flex flex-col items-center justify-between h-[88px] ${item.className}`}
                    >
                      {/* Background + Border + Shadow */}
                      <div className="w-[48px] h-[48px] rounded-full bg-[#E3F4E8] border border-[#A2D8B4] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] flex items-center justify-center flex-shrink-0">
                        <Icon className="w-[24px] h-[24px] text-[#11492B] stroke-[1.75]" />
                      </div>
                      {/* Text */}
                      <span className="font-jakarta font-semibold text-[12px] leading-[16px] text-[#070707] text-center max-w-[90px]">
                        {item.title}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Frame 21: Interactive CTAs & Location Bar */}
              <div className="w-full flex flex-col items-center gap-[18px]">
                
                {/* Interactive CTAs */}
                <div className="flex flex-wrap items-center justify-center gap-[16px] min-h-[60px]">
                  
                  {/* Link - Call Now Primary Solid Pill Button */}
                  <a
                    href="tel:+919885921560"
                    className="flex flex-row items-center px-[28px] py-[14px] gap-[12px] bg-[#FF8D28] hover:bg-[#e87a17] text-white rounded-full shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] transition-all transform hover:-translate-y-0.5"
                  >
                    <Phone className="w-[20px] h-[20px] fill-current flex-shrink-0" />
                    <span className="font-jakarta font-bold text-[16px] leading-[24px] tracking-[-0.4px] text-white whitespace-nowrap">
                      Call Now
                    </span>
                    <span className="font-acme font-normal text-[24px] leading-[32px] tracking-[0.6px] text-white whitespace-nowrap">
                      98859 21560
                    </span>
                  </a>

                  {/* Link - Get a Free Consultation Outline Pill Button */}
                  <a
                    href="#contact"
                    className="flex flex-row items-center px-[24px] py-[14px] gap-[10px] bg-white/80 hover:bg-white text-[#111827] rounded-full border border-[#1B5B38] shadow-[0px_1px_2px_rgba(0,0,0,0.05)] backdrop-blur-[2px] transition-all"
                  >
                    <Calendar className="w-[20px] h-[20px] text-[#1F2937] flex-shrink-0" />
                    <span className="font-jakarta font-bold text-[16px] leading-[24px] text-[#111827] whitespace-nowrap">
                      Get a Free Consultation
                    </span>
                  </a>
                </div>

                {/* Location Info & Center Tracked Tagline */}
                <div className="flex flex-wrap items-center justify-center sm:justify-between gap-[12px] sm:gap-[24px] w-full max-w-[617.94px] pt-1">
                  
                  {/* Location Info */}
                  <div className="flex flex-row items-center gap-[6px]">
                    <MapPin className="w-[16px] h-[16px] text-[#3A3A3A] flex-shrink-0" />
                    <span className="font-jakarta font-semibold text-[14px] leading-[20px] text-[#3A3A3A]">
                      Hyderabad &amp; Surroundings
                    </span>
                  </div>

                  {/* Center Tracked Tagline */}
                  <div className="flex flex-row items-center gap-[12px]">
                    <div className="w-[64px] h-[1px] bg-[#D1D5DB] hidden sm:block" />
                    <span className="font-jakarta font-semibold text-[10px] leading-[20px] tracking-[2.4px] uppercase text-[#3A3A3A]">
                      MAHANAGAR PROPERTIES &amp; CONSTRUCTIONS
                    </span>
                  </div>
                </div>

              </div>

            </div>

          </div>

          {/* Building Skyline Cutout Image (Image 20) */}
          <div className="relative w-full mt-auto flex justify-center">
            <img
              src="/assets/Mahaveer Files/image 20.png"
              alt="Mahanagar Properties Skyline"
              className="w-full h-auto object-contain object-bottom select-none max-h-[440px]"
            />

            {/* Bottom Dark Gradient for crisp text readability */}
            <div className="absolute inset-x-0 bottom-0 h-[90px] bg-gradient-to-t from-black/70 via-black/25 to-transparent pointer-events-none" />

            {/* Bottom Overlay Container - Left Logo & Right Angled Ribbon */}
            <div className="absolute bottom-0 left-0 right-0 h-[64px] flex items-end justify-between px-4 sm:px-8 pb-3 pointer-events-none z-10">
              
              {/* Bottom Left Logo Overlay */}
              <div className="flex flex-col gap-0.5 pointer-events-auto">
                <div className="flex items-center gap-3">
                  <span className="font-montserrat font-extrabold text-[16px] sm:text-[20px] leading-[28px] tracking-[4.4px] uppercase text-white drop-shadow-lg">
                    MAHANAGAR
                  </span>
                  <div className="w-[80px] sm:w-[144px] h-[1.5px] bg-white/70 hidden sm:block" />
                </div>
                <span className="font-montserrat font-semibold text-[9px] sm:text-[11px] leading-[16px] tracking-[2.64px] uppercase text-gray-200 drop-shadow-md">
                  PROPERTIES &amp; CONSTRUCTIONS
                </span>
              </div>

              {/* Bottom Right Green Ribbon */}
              <div
                className="bg-[#0A3520] h-[48px] sm:h-[54px] px-6 sm:px-10 flex items-center shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.2)] pointer-events-auto"
                style={{ clipPath: 'polygon(24px 0, 100% 0, 100% 100%, 0% 100%)' }}
              >
                <div className="flex items-center gap-3 text-white">
                  <span className="font-jakarta font-extrabold text-[11px] sm:text-[13px] leading-[16px] tracking-[2.34px] uppercase">
                    TRUSTED
                  </span>
                  <span className="text-white/40 text-[13px] font-normal">|</span>
                  <span className="font-jakarta font-extrabold text-[11px] sm:text-[13px] leading-[16px] tracking-[2.34px] uppercase">
                    TRANSPARENT
                  </span>
                  <span className="text-white/40 text-[13px] font-normal">|</span>
                  <span className="font-jakarta font-extrabold text-[11px] sm:text-[13px] leading-[16px] tracking-[2.34px] uppercase">
                    GENUINE
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ReadyToBuildCTA;
