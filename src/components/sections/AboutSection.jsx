import React from 'react';
import { Home, Layers, Building } from 'lucide-react';

const AboutSection = () => {
  const valueProps = [
    {
      id: 1,
      title: 'Genuine Quality',
      desc: 'Quality-focused construction with attention to every detail.',
      gradient: true,
      icon: Home,
    },
    {
      id: 2,
      title: 'Genuine Materials',
      desc: 'Reliable materials selected for durability and performance.',
      gradient: false,
      icon: Layers,
    },
    {
      id: 3,
      title: 'Transparent Execution',
      desc: 'Clear communication, planning and execution throughout the project.',
      gradient: false,
      icon: Building,
    },
  ];

  return (
    <section id="about" className="pt-6 pb-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header Block - Frame 11 & Frame 10 */}
        <div className="max-w-[758px] mx-auto text-center mb-14 space-y-4">
          <span className="block font-kugile font-normal text-2xl leading-[40px] text-black">
            About us
          </span>
          <h2 className="font-roboto font-normal text-2xl md:text-[32px] leading-[38px] text-black tracking-[0.02em]">
            Your GENUINE Partner in Construction &amp; Properties
          </h2>
          <p className="font-roboto font-normal text-base leading-[19px] text-black tracking-[0.02em] max-w-[758px] mx-auto pt-1">
            At Mahanagar Properties &amp; Constructions, we help you turn your vision into reality with quality construction, genuine materials, transparent execution and dependable support—from planning to completion.
          </p>
        </div>

        {/* 3 Value Cards Grid - Group 1 (Rectangle 15, 16, 17: 400.59px x 287px) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-[24px] max-w-[1245px] mx-auto">
          {valueProps.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className={`rounded-[5px] min-h-[287px] p-8 flex flex-col items-center text-center justify-center transition-all duration-300 transform hover:-translate-y-1 shadow-sm hover:shadow-md ${
                  card.gradient
                    ? 'bg-gradient-to-br from-[#FF8D28] via-[#8c480d] to-black text-white'
                    : 'bg-[#F1F1F1] text-black'
                }`}
                style={
                  card.gradient
                    ? { background: 'linear-gradient(124.64deg, #FF8D28 0%, #000000 186%)' }
                    : {}
                }
              >
                {/* Circle Icon Badge (73.79px x 64px) */}
                <div
                  className={`w-[74px] h-[64px] rounded-full flex items-center justify-center mb-5 ${
                    card.gradient ? 'bg-white text-[#FF8D28]' : 'bg-[#FF8D28] text-white'
                  }`}
                >
                  <Icon className="w-8 h-8 stroke-[1.8]" />
                </div>

                <h3
                  className={`font-poppins font-semibold text-[24px] leading-[36px] mb-2 ${
                    card.gradient ? 'text-white' : 'text-[#FF8D28]'
                  }`}
                >
                  {card.title}
                </h3>
                <p
                  className={`font-poppins font-normal text-[14px] leading-[21px] max-w-[300px] ${
                    card.gradient ? 'text-white' : 'text-black'
                  }`}
                >
                  {card.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
