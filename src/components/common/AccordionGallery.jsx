import React, { useState } from 'react';

const AccordionGallery = ({
  items = [],
  defaultIndex = 1,
  expandRatio = 0.52,
  trigger = 'hover'
}) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  const handleInteraction = (index) => {
    setActiveIndex(index);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  if (!items || items.length === 0) return null;

  return (
    <div className="relative w-full max-w-[1113px] mx-auto py-4">
      {/* Accordion Flex Container */}
      <div className="flex flex-col md:flex-row gap-4 h-[480px] w-full overflow-hidden rounded-2xl">
        {items.map((item, index) => {
          const isActive = index === activeIndex;

          return (
            <div
              key={item.id || index}
              onMouseEnter={() => trigger === 'hover' && handleInteraction(index)}
              onClick={() => trigger === 'click' && handleInteraction(index)}
              style={{
                flex: isActive ? `${expandRatio * 10}` : '1',
              }}
              className={`relative h-full overflow-hidden rounded-xl cursor-pointer transition-all duration-500 ease-in-out ${
                isActive ? 'shadow-2xl' : 'opacity-90 hover:opacity-100'
              }`}
            >
              {/* Card Image */}
              <img
                src={item.image}
                alt={item.title || item.label}
                className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
              />

              {/* Dark Overlay on Active Card */}
              <div
                className={`absolute inset-0 transition-opacity duration-500 flex flex-col items-center justify-center p-6 text-center text-white ${
                  isActive
                    ? 'bg-gradient-to-t from-black/80 via-black/50 to-black/30 opacity-100'
                    : 'bg-black/20 opacity-0 group-hover:opacity-40'
                }`}
              >
                {isActive && (
                  <div className="animate-fadeIn space-y-3 max-w-sm">
                    <span className="font-poppins text-xs md:text-sm text-gray-200 font-normal block">
                      {item.subtitle || item.label}
                    </span>
                    <h3 className="font-poppins font-bold text-2xl md:text-3xl text-white">
                      {item.price}
                    </h3>
                    <p className="font-poppins font-semibold text-3xl md:text-[36px] text-white leading-tight">
                      {item.specs}
                    </p>
                    <div className="pt-4">
                      <a
                        href={item.link || "#contact"}
                        className="inline-flex items-center justify-center bg-[#FF8D28] text-black font-poppins font-semibold px-8 py-3 rounded-md hover:bg-orange-500 transition-all shadow-md"
                        style={{
                          width: '150px',
                          height: '45px',
                          fontSize: '18px',
                          lineHeight: '27px',
                        }}
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AccordionGallery;
