import React from 'react';
import { Bed, Bath, Globe, MapPin, CheckCircle } from 'lucide-react';

const PropertyCard = ({ property, isHighlighted }) => {
  return (
    <div
      className={`relative rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-1 ${
        isHighlighted
          ? 'bg-gradient-to-br from-[#FF8D28] via-[#984900] to-black text-white shadow-card'
          : 'bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Property Image Container */}
      <div className="relative h-64 overflow-hidden bg-gray-100">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 bg-[#FF0000] text-white font-poppins text-xs font-medium px-3 py-1 rounded">
          {property.type}
        </div>
      </div>

      {/* Property Body Details */}
      <div className="p-6 flex flex-col items-center text-center">
        <h3
          className={`font-poppins font-semibold text-2xl mb-1 ${
            isHighlighted ? 'text-white' : 'text-gray-900'
          }`}
        >
          {property.price}
        </h3>
        <p
          className={`font-poppins text-sm mb-2 flex items-center justify-center gap-1 ${
            isHighlighted ? 'text-white/90' : 'text-gray-600'
          }`}
        >
          <MapPin className="w-3.5 h-3.5 text-brand-orange inline" />
          {property.location}
        </p>

        {/* Specs Grid Icons */}
        <div className="w-full pt-4 mt-2 border-t border-gray-100/20 grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Bed className={`w-4 h-4 ${isHighlighted ? 'text-white' : 'text-black'}`} />
              <span className={`font-poppins font-semibold text-sm ${isHighlighted ? 'text-white' : 'text-black'}`}>
                {property.bhk}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Bath className={`w-4 h-4 ${isHighlighted ? 'text-white' : 'text-black'}`} />
              <span className={`font-poppins font-semibold text-sm ${isHighlighted ? 'text-white' : 'text-black'}`}>
                {property.bathrooms}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <Globe className={`w-4 h-4 ${isHighlighted ? 'text-white' : 'text-black'}`} />
              <span className={`font-poppins font-semibold text-sm ${isHighlighted ? 'text-white' : 'text-black'}`}>
                {property.area}
              </span>
            </div>
            <span className={`font-poppins text-[11px] ${isHighlighted ? 'text-white/80' : 'text-gray-500'}`}>
              {property.proximity}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
