import React, { useState } from 'react';
import { propertiesData } from '../../data/propertiesData';
import PropertyCard from './PropertyCard';

const PropertiesSection = () => {
  const [activeTab, setActiveTab] = useState('All');

  const tabs = ['All', 'Plots', 'Villas', 'Apartments', 'Commercial'];

  const filteredProperties = propertiesData.filter((item) => {
    if (activeTab === 'All') return true;
    return item.category === activeTab;
  });

  return (
    <section id="properties" className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[731px] mx-auto text-center mb-10 space-y-3">
          <span className="block font-kugile text-2xl text-black">
            Properties Section
          </span>
          <h2 className="font-roboto font-normal text-2xl md:text-3xl lg:text-[32px] text-black tracking-wide">
            Find the Right Property With Confidence
          </h2>
        </div>

        {/* Filter Pills Bar */}
        <div className="flex justify-center mb-14 px-2">
          <div className="inline-flex items-center justify-center gap-1.5 sm:gap-3 bg-[#F6F6F6] rounded-full p-1.5 sm:p-2 border border-gray-200/50 shadow-inner max-w-full overflow-x-auto no-scrollbar">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`font-roboto text-sm sm:text-base px-5 sm:px-7 py-2 sm:py-2.5 rounded-full transition-all duration-200 shrink-0 select-none ${
                  activeTab === tab
                    ? 'bg-[#FF8D28] text-white shadow-md font-semibold scale-[1.02]'
                    : 'bg-white text-[#14181B] hover:bg-gray-50 shadow-sm'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Property Grid */}
        <div className="max-w-[1245px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, idx) => (
            <PropertyCard
              key={property.id}
              property={property}
              isHighlighted={idx === 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertiesSection;
