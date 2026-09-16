import React from 'react';
import { Home, Gem, Settings, Clock, MapPin, Users, CheckCircle2, Play } from 'lucide-react';

const DreamHomeBanner = () => {
  const badges = [
    { id: 1, label: 'Personalized Designs', icon: Home },
    { id: 2, label: 'Genuine Materials', icon: Gem },
    { id: 3, label: 'Expert Execution', icon: Settings },
    { id: 4, label: 'On-Time Delivery', icon: Clock },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12 flex flex-col items-center">
        {/* Main Background Container: Width 1245px, Height 622px */}
        <div
          className="relative w-full max-w-[1245px] rounded-3xl overflow-hidden shadow-2xl flex flex-col items-center pt-[71px] px-6 text-center"
          style={{ minHeight: '622px' }}
        >
          {/* Background Image 2 with exact linear gradient overlay (rgba(0,0,0,0.2)) */}
          <img
            src="/assets/Mahaveer Files/image 2.png"
            alt="Build your Dream Home - Mahanagar Properties"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))' }}
          />

          {/* Heading: Build your Dream Home (396px x 42px, Roboto 500, 36px, #FFFFFF) */}
          <h2
            className="relative z-10 font-roboto font-medium text-white text-center mb-4"
            style={{
              fontSize: '36px',
              lineHeight: '42px',
              letterSpacing: '0.02em',
              maxWidth: '396px',
            }}
          >
            Build your Dream Home
          </h2>

          {/* Subtitle: Poppins 400, 18px, line-height 30px, letter-spacing 1px, max-width 919px */}
          <p
            className="relative z-10 font-poppins font-normal text-white text-center leading-relaxed mb-8 max-w-[919px]"
            style={{
              fontSize: '18px',
              lineHeight: '30px',
              letterSpacing: '1px',
            }}
          >
            You have the land. We bring the planning, expertise, quality materials and transparent execution needed to transform it into a home you’ll be proud of.
          </p>

          {/* 4 Circular Feature Badges Row */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4 max-w-[480px] mb-8">
            {badges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div key={badge.id} className="flex flex-col items-center w-[108px] text-center">
                  <div className="w-[66px] h-[66px] rounded-full bg-[#F5ECE1] flex items-center justify-center mb-2 shadow-md hover:scale-105 transition-transform">
                    <Icon className="w-7 h-7 text-[#9D5C26]" strokeWidth={2.1} />
                  </div>
                  <span
                    className="font-jakarta font-semibold text-white text-center"
                    style={{ fontSize: '13px', lineHeight: '16px' }}
                  >
                    {badge.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* CTA Buttons Row (Width 394px, Height 56px, Gap 28px) */}
          <div className="relative z-10 flex items-center justify-center gap-7 pb-24 md:pb-28">
            {/* Primary CTA: Build With Us */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-[#FF8D28] text-black font-jakarta font-semibold rounded-xl hover:bg-orange-500 transition-all shadow-lg"
              style={{
                width: '169px',
                height: '56px',
                fontSize: '16px',
                lineHeight: '24px',
                letterSpacing: '0.4px',
                boxShadow: '0px 4px 16px rgba(157, 92, 38, 0.28)',
              }}
            >
              Build With Us
            </a>

            {/* Secondary CTA: Watch Our Videos */}
            <a
              href="#services"
              className="inline-flex items-center gap-3.5 group hover:opacity-90 transition-opacity"
            >
              <div
                className="w-[48px] h-[48px] rounded-full bg-white border border-[#E3DDD4] flex items-center justify-center shadow-sm"
              >
                <Play className="w-4 h-4 text-[#1A1A1A] fill-[#1A1A1A] ml-0.5" />
              </div>
              <span
                className="font-jakarta font-semibold text-white"
                style={{ fontSize: '15.5px', lineHeight: '23px' }}
              >
                Watch Our Videos
              </span>
            </a>
          </div>

          {/* Floating Bottom Card INSIDE Main Container (Width 1120px, Height 98px, Top 484px in 622px container) */}
          <div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 w-[92%] max-w-[1120px] rounded-[20px] bg-white/95 backdrop-blur-md border border-[#DAEADB] px-6 md:px-12 py-4 shadow-xl"
            style={{ minHeight: '98px' }}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-[#E2ECDE]">
              {/* Item 1: Location */}
              <div className="flex items-center gap-4 pr-4 py-2 md:py-0">
                <div className="w-[48px] h-[48px] rounded-full border border-[#C4D5B1] flex items-center justify-center text-[#00985B] shrink-0">
                  <MapPin className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-jakarta font-bold text-[#1A1A1A]" style={{ fontSize: '17px', lineHeight: '21px' }}>
                    Hyderabad
                  </span>
                  <span className="font-jakarta font-medium text-[#4A554B]" style={{ fontSize: '14px', lineHeight: '18px' }}>
                    &amp; Surroundings
                  </span>
                </div>
              </div>

              {/* Item 2: Trusted Families */}
              <div className="flex items-center gap-4 pt-3 md:pt-0 md:pl-8 pr-4 py-2 md:py-0">
                <div className="w-[48px] h-[48px] rounded-full flex items-center justify-center text-[#00985B] shrink-0">
                  <Users className="w-8 h-8" strokeWidth={2.2} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-jakarta font-bold text-[#1A1A1A]" style={{ fontSize: '16.5px', lineHeight: '21px' }}>
                    Trusted by
                  </span>
                  <span className="font-jakarta font-medium text-[#4A554B]" style={{ fontSize: '14px', lineHeight: '18px' }}>
                    Happy Families
                  </span>
                </div>
              </div>

              {/* Item 3: Quality & Commitment */}
              <div className="flex items-center gap-4 pt-3 md:pt-0 md:pl-8 py-2 md:py-0">
                <div className="w-[48px] h-[48px] rounded-full border border-[#C4D5B1] flex items-center justify-center text-[#00985B] shrink-0">
                  <CheckCircle2 className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-jakarta font-bold text-[#1A1A1A]" style={{ fontSize: '16px', lineHeight: '20px' }}>
                    Quality. Commitment. Trust.
                  </span>
                  <span className="font-jakarta font-semibold text-[#6A7363] uppercase tracking-[2.2px]" style={{ fontSize: '11px', lineHeight: '14px' }}>
                    MAHANAGAR CONSTRUCTIONS
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

export default DreamHomeBanner;
