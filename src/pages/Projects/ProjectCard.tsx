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
    <MagicCard
      className={`w-full max-w-md p-4 ${className} rounded-lg h-[650px] flex flex-col`}
    >
      <div className="flex flex-col w-full h-full">
        {/* Top Section (Image with Lens Effect) */}
        <Lens zoomFactor={1.5} lensSize={100}>
          <div className="w-full h-full bg-gray-300 flex items-center justify-center overflow-hidden">
            {image || <span className="text-gray-500">Image Placeholder</span>}
          </div>
        </Lens>

        {/* Bottom Section (Title, Content, Footer) */}
        <div className="w-full flex flex-col flex-grow mt-4">
          {/* Title Section */}
          <div className="mb-2 text-white">{titleSection}</div>

          {/* Content Section */}
          <div className="mb-2 text-sm text-white flex-grow overflow-hidden">
            {contentSection}
          </div>

          {/* Footer Section */}
          <div className="mt-4 text-xs text-white">{footerSection}</div>
        </div>
      </div>
    </MagicCard>
  );
}
