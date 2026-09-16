import React from 'react';
import { servicesData } from '../../data/propertiesData';
import DriftWall from '../common/DriftWall';

const ServicesSection = () => {
  const driftItems = servicesData.map((service) => ({
    image: service.image,
    title: service.title,
    href: '#contact',
  }));

  return (
    <section id="services" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Section Header - Frame 9 */}
        <div className="max-w-[731px] mx-auto text-center mb-10 space-y-3">
          <span className="block font-kugile font-normal text-2xl leading-[40px] text-black">
            What we DO?
          </span>
          <h2 className="font-roboto font-normal text-2xl md:text-[32px] leading-[38px] text-black tracking-[0.02em]">
            Complete Construction Solutions Under One Roof
          </h2>
        </div>

        {/* 3D Interactive DriftWall Showcase */}
        <div className="w-full h-[500px] sm:h-[580px] rounded-3xl overflow-hidden shadow-lg bg-[#F6F6F8] border border-gray-200 relative">
          <DriftWall
            items={driftItems}
            columns={5}
            tileWidth={230}
            tileHeight={155}
            gap={20}
            speed={35}
            parallax={0.7}
            fade={0.3}
            dim={1.0}
            overlayColor="#F4F4F6"
            className="w-full h-full"
          />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
