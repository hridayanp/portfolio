'use client';

import { PageTransition } from '@/components/Animations/pageTransition';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import ImageAbout from '@/assets/images/common/Hridayan Phukan.jpeg';

import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';

const projects = Array(6).fill({
  image: (
    <img
      src={ImageAbout}
      alt="Project"
      className="w-full h-full object-cover rounded-lg"
    />
  ),
  titleSection: <h3 className="text-2xl font-semibold">Minisocial</h3>,
  contentSection: (
    <p>
      Minisocial is a fully managed platform that connects brands with
      micro-influencers to produce user-generated content (UGC) on demand and at
      scale. By collaborating with micro-influencers, minisocial enables brands
      to showcase their products authentically, leveraging content from real
      people across various marketing channels, including social media, email,
      and websites.
    </p>
  ),
  footerSection: <span>Explore</span>,
});

const Projects = () => {
  return (
    <div className="bg-[#0B1D29] min-h-screen">
      <PageTransition />

      {/* Animated Background */}
      <AnimatedGridPattern
        numSquares={30}
        maxOpacity={0.1}
        duration={3}
        repeatDelay={1}
        className={cn(
          'absolute inset-0 w-full h-full',
          '[mask-image:radial-gradient(900px_circle_at_center,white,transparent)]'
        )}
      />

      {/* Page Title */}
      <div className="w-full flex flex-col items-center gap-4 text-center px-8 pt-28">
        <h1 className="text-4xl font-bold text-white">Featured Work</h1>
        <span className="w-full md:w-3/5 text-[15px] italic flex justify-center text-white">
          I design and build digital products that are both beautiful and
          robust.
        </span>
      </div>

      {/* Grid for Projects - Centered */}
      <div className="flex justify-center px-8 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="w-full max-w-[800px] mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <ProjectCard
                image={project.image}
                titleSection={project.titleSection}
                contentSection={project.contentSection}
                footerSection={project.footerSection}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
