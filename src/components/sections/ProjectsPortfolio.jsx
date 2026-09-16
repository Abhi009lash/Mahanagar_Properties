import React from 'react';
import { portfolioProjects } from '../../data/propertiesData';
import AccordionGallery from '../common/AccordionGallery';

const ProjectsPortfolio = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-[731px] mx-auto text-center mb-12 space-y-3">
          <span className="block font-kugile text-2xl text-black">
            Projects / Portfolio
          </span>
          <h2 className="font-roboto font-normal text-2xl md:text-3xl lg:text-[32px] text-black tracking-wide">
            Built With Purpose. Built With Trust.
          </h2>
        </div>

        {/* Interactive Accordion Gallery */}
        <AccordionGallery
          items={portfolioProjects}
          defaultIndex={1}
          expandRatio={0.52}
          trigger="hover"
        />
      </div>
    </section>
  );
};

export default ProjectsPortfolio;
