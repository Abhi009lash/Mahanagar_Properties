import React, { useState } from 'react';
import { Play, X } from 'lucide-react';

const InsightsSection = () => {
  const [playingId, setPlayingId] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const insights = [
    {
      id: 1,
      title: 'Structural Integrity & Quality Verification Walkthrough',
      subtitle: 'Watch how Mahanagar enforces 100+ quality checks during site execution.',
      tag: 'Construction Process',
      youtubeId: 'T0Vlmd4zy0c',
      image: 'https://img.youtube.com/vi/T0Vlmd4zy0c/hqdefault.jpg',
    },
    {
      id: 2,
      title: 'Transparent Project Planning & Timeline Guarantee',
      subtitle: 'Inside look into our customer dashboard & direct site monitoring.',
      tag: 'Customer Experience',
      youtubeId: 'jQIfI3KGzdY',
      image: 'https://img.youtube.com/vi/jQIfI3KGzdY/hqdefault.jpg',
    },
  ];

  const handlePlayClick = (e, item) => {
    e.stopPropagation();
    setPlayingId(item.id);
  };

  return (
    <section id="why-us" className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 md:px-12">
        {/* Header - Frame 21 */}
        <div className="max-w-[731px] mx-auto text-center mb-14 space-y-3">
          <span className="block font-kugile font-normal text-2xl leading-[40px] text-black">
            Insights
          </span>
          <h2 className="font-roboto font-normal text-2xl md:text-[32px] leading-[38px] text-black tracking-[0.02em]">
            See What We’re Doing
          </h2>
        </div>

        {/* Frame 24: 2 Showcase Cards (601px width each, 334px height) */}
        <div className="max-w-[1245px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-[35px]">
          {insights.map((item) => {
            const isPlaying = playingId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => !isPlaying && setPlayingId(item.id)}
                className="group relative w-full min-h-[334px] sm:min-h-[360px] rounded-2xl overflow-hidden shadow-lg border border-gray-100 flex flex-col justify-end p-8 text-white cursor-pointer bg-black"
              >
                {/* Inline YouTube Player */}
                {isPlaying ? (
                  <div className="absolute inset-0 z-30 w-full h-full bg-black rounded-2xl overflow-hidden">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPlayingId(null);
                      }}
                      className="absolute top-3 right-3 z-40 bg-black/70 hover:bg-brand-orange text-white p-2 rounded-full backdrop-blur-md transition-colors shadow-md"
                      aria-label="Close Video"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${item.youtubeId}?autoplay=1&rel=0`}
                      title={item.title}
                      className="w-full h-full border-0 rounded-2xl"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <>
                    {/* Background Image */}
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 group-hover:from-black/95 transition-all" />

                    {/* Tag & Play Icon Row */}
                    <div className="relative z-10 flex items-center justify-between mb-auto pt-2">
                      <span className="bg-[#FF8D28] text-white font-jakarta font-semibold text-xs px-3.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                        {item.tag}
                      </span>
                      <button
                        onClick={(e) => handlePlayClick(e, item)}
                        className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover:bg-[#FF8D28] group-hover:border-[#FF8D28] transition-all transform group-hover:scale-110 shadow-lg focus:outline-none"
                        aria-label={`Play ${item.title}`}
                      >
                        <Play className="w-5 h-5 fill-current ml-0.5" />
                      </button>
                    </div>

                    {/* Text Info */}
                    <div className="relative z-10 space-y-2">
                      <h3 className="font-jakarta font-bold text-xl md:text-2xl leading-tight text-white group-hover:text-brand-orange transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-jakarta font-normal text-sm text-gray-200 line-clamp-2">
                        {item.subtitle}
                      </p>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
