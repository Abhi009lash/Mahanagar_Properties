import React from 'react';
import ClickSpark from '../common/ClickSpark';

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-0 bg-white overflow-hidden">
      <ClickSpark sparkColor="#FF8D28" sparkCount={10} sparkRadius={20}>
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex flex-col items-center">
          {/* Headline Box: z-0 so tree branches can overlap on top */}
          <div className="relative z-0 w-full max-w-[946px] h-[212px] text-center flex flex-col justify-center items-center">
            <h1
              className="font-kugile font-normal text-center text-black"
              style={{
                fontSize: 'clamp(32px, 5.5vw, 64px)',
                lineHeight: '110%',
                letterSpacing: '0%',
                width: '100%',
                maxWidth: '946px',
                minHeight: '160px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <span>Building Your Dreams</span>
              <span>With Genuine Commitment.</span>
            </h1>
          </div>

          {/* Image Box: z-20 so tree layer is UPON the text */}
          <div className="relative z-20 pointer-events-none w-full max-w-[1260px] flex justify-center -mt-12 sm:-mt-20 lg:-mt-[106px]">
            <div
              className="relative w-full overflow-hidden flex justify-center items-center"
              style={{
                width: '100%',
                maxWidth: '1260px',
                maxHeight: '980px',
              }}
            >
              <img
                src="/assets/Mahaveer Files/ChatGPT Image Sep 16, 2026, 03_44_37 PM.png"
                alt="Modern Luxury Floating Villa - Mahanagar Properties"
                className="w-full h-auto object-contain max-h-[980px] mx-auto transform hover:scale-[1.01] transition-transform duration-700"
              />
              {/* Exact Figma Linear Gradient Overlay (69.59% to 97.39% #FFFFFF) */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0) 69.59%, #FFFFFF 97.39%)',
                }}
              />
            </div>
          </div>
        </div>
      </ClickSpark>
    </section>
  );
};

export default HeroSection;
