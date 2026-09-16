import React from 'react';

const WhyBuildSection = () => {
  const steps = [
    {
      num: '01',
      title: 'Genuine Commitment',
      desc: 'We focus on trust and long-term relationships.',
    },
    {
      num: '02',
      title: 'Quality First',
      desc: 'Quality is considered throughout planning and construction.',
    },
    {
      num: '03',
      title: 'Transparent Communication',
      desc: 'Stay informed about your project at every stage.',
    },
    {
      num: '04',
      title: 'Complete Support',
      desc: 'From planning and approvals to construction and handover.',
    },
  ];

  return (
    <section id="why-us" className="py-24 bg-white border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="max-w-[1228px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Title Column */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="font-jakarta font-bold text-4xl md:text-5xl lg:text-[54px] leading-[1.15] text-[#161616] tracking-tight">
              Why Build With Mahanagar?
            </h2>
            <p className="font-jakarta text-lg text-[#55524E]">
              A human-centered process
            </p>
          </div>

          {/* Right 4 Step Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.num}
                className={`relative pr-4 flex flex-col justify-between min-h-[218px] ${
                  index !== steps.length - 1 ? 'border-r-0 lg:border-r border-black/5' : ''
                }`}
              >
                <div>
                  <span className="font-jakarta font-light text-4xl lg:text-[46px] text-brand-orange leading-none block mb-3">
                    {step.num}
                  </span>
                  {/* Dashed connector line */}
                  <div className="w-8 h-[1px] border-b border-dashed border-brand-orange mb-4" />
                  <h3 className="font-jakarta font-semibold text-base text-[#161616] mb-2 leading-snug">
                    {step.title}
                  </h3>
                </div>
                <p className="font-jakarta text-xs text-[#55524E] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuildSection;
