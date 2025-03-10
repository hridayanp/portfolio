'use client';

import { Lens } from '@/components/magicui/lens';
import { MagicCard } from '@/components/magicui/magic-card';
import React from 'react';

interface ProjectCardProps {
  image?: React.ReactNode;
  titleSection: React.ReactNode;
  contentSection: React.ReactNode;
  footerSection: React.ReactNode;
  className?: string;
}

export function ProjectCard({
  image,
  titleSection,
  contentSection,
  footerSection,
  className,
}: ProjectCardProps) {
  return (
    <MagicCard className={`w-full max-w-md p-4 ${className} rounded-lg`}>
      <div className="flex flex-col w-full ">
        {/* Top Section (Image with Lens Effect) */}
        <Lens zoomFactor={1.5} lensSize={100}>
          <div className="w-full h-80 bg-gray-300 flex items-center justify-center rounded-md overflow-hidden">
            {image || <span className="text-gray-500">Image Placeholder</span>}
          </div>
        </Lens>

        {/* Bottom Section (Title, Content, Footer) */}
        <div className="w-full flex flex-col mt-4">
          {/* Title Section */}
          <div className="mb-2 text-white">{titleSection}</div>

          {/* Content Section */}
          <div className="mb-2 text-sm text-white">{contentSection}</div>

          {/* Footer Section */}
          <div className="mt-4 text-xs text-white">{footerSection}</div>
        </div>
      </div>
    </MagicCard>
  );
}

/**
 * const projects = [
  {
    image: (
      <img
        src="https://via.placeholder.com/600x300"
        alt="Project 1"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    titleSection: <h3 className="text-2xl font-semibold">Project One</h3>,
    contentSection: <p>This is a description for Project One.</p>,
    footerSection: <span>More details</span>,
  },
  {
    image: (
      <img
        src="https://via.placeholder.com/300x200"
        alt="Project 2"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    titleSection: <h3 className="text-xl font-semibold">Project Two</h3>,
    contentSection: <p>Brief overview of Project Two.</p>,
    footerSection: <span>View more</span>,
  },
  {
    image: (
      <img
        src="https://via.placeholder.com/300x200"
        alt="Project 3"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    titleSection: <h3 className="text-xl font-semibold">Project Three</h3>,
    contentSection: <p>Short details about Project Three.</p>,
    footerSection: <span>See project</span>,
  },
  {
    image: (
      <img
        src="https://via.placeholder.com/300x200"
        alt="Project 4"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    titleSection: <h3 className="text-xl font-semibold">Project Four</h3>,
    contentSection: <p>A brief summary of Project Four.</p>,
    footerSection: <span>More info</span>,
  },
  {
    image: (
      <img
        src="https://via.placeholder.com/300x200"
        alt="Project 5"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    titleSection: <h3 className="text-xl font-semibold">Project Five</h3>,
    contentSection: <p>Some insight on Project Five.</p>,
    footerSection: <span>Explore</span>,
  },
  {
    image: (
      <img
        src="https://via.placeholder.com/300x200"
        alt="Project 6"
        className="w-full h-full object-cover rounded-lg"
      />
    ),
    titleSection: <h3 className="text-xl font-semibold">Project Six</h3>,
    contentSection: <p>Details about Project Six.</p>,
    footerSection: <span>Discover</span>,
  },
];
 * 
 */
