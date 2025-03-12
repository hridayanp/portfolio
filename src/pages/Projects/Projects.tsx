'use client';

import { PageTransition } from '@/components/Animations/pageTransition';
import { motion } from 'framer-motion';
import { ProjectCard } from './ProjectCard';
import ImageAbout from '@/assets/images/common/Hridayan Phukan.jpeg';

import Vayu from '@/assets/images/projects/vayu.png';
import Dicra from '@/assets/images/projects/dicra.png';

import { AnimatedGridPattern } from '@/components/magicui/animated-grid-pattern';
import { cn } from '@/lib/utils';
import { Dot, Link } from 'lucide-react';

// const projects = Array(6).fill({
//   image: (
//     <img
//       src={ImageAbout}
//       alt="Project"
//       className="w-full h-full object-cover rounded-lg"
//     />
//   ),
//   titleSection: <h3 className="text-2xl font-semibold">Minisocial</h3>,
//   contentSection: (
//     <p>
//       Minisocial is a fully managed platform that connects brands with
//       micro-influencers to produce user-generated content (UGC) on demand and at
//       scale. By collaborating with micro-influencers, minisocial enables brands
//       to showcase their products authentically, leveraging content from real
//       people across various marketing channels, including social media, email,
//       and websites.
//     </p>
//   ),
//   footerSection: <span>Explore</span>,
// });

const projects = [
  {
    id: 1,
    title: 'Vayu Open Air',
    organization: 'UNDP | Open Source',
    image: Vayu,
    description:
      'VAYU - OpenAir is a public repository for open-source software, algorithms, and hyperlocal air pollution data in Indian cities like Patna and Gurgaon. This initiative, backed by UNDP, GIZ, and citizen scientists, leverages IoT sensors, crowdsourced data, and AI/ML to model an ‘Open Digital Stack on Air Pollution.’ The goal is to create a scalable, open-source framework for cities worldwide to combat air pollution collaboratively.',
    stack: ['ReactJS', 'React-Query', 'Redux', 'PWA'],
    link: 'https://vayu.undp.org.in/',
  },
  {
    id: 2,
    title: 'DiCRA',
    image: Dicra,
    organization: 'UNDP | Nabard | Open Source',
    description:
      'DiCRA is a collaborative digital public good providing open access to key geospatial datasets for climate-resilient agriculture. Curated by data scientists and citizen scientists worldwide, it enables evidence-driven policymaking for sustainable food systems. Guided by digital public good principles, DiCRA promotes open access, open software, and open APIs. ',
    stack: ['ReactJS', 'React-Query', 'Redux', 'PWA'],
    link: 'https://dicra.nabard.org/',
  },
  {
    id: 3,
    title: 'Project Three',
    image: ImageAbout,
    organization: 'UNDP | Open Source',
    description: 'Short details about Project Three.',
    stack: ['ReactJS', 'React-Query', 'Redux', 'PWA'],
  },
  {
    id: 4,
    title: 'Project Four',
    image: ImageAbout,
    organization: 'UNDP | Open Source',
    description: 'A brief summary of Project Four.',
    stack: ['ReactJS', 'React-Query', 'Redux', 'PWA'],
  },
  {
    id: 5,
    title: 'Project Five',
    image: ImageAbout,
    organization: 'UNDP | Open Source',
    description: 'Some insight on Project Five.',
    stack: ['ReactJS', 'React-Query', 'Redux', 'PWA'],
  },
  {
    id: 6,
    title: 'Project Six',
    image: ImageAbout,
    organization: 'UNDP | Open Source',
    description: 'Details about Project Six.',
    stack: ['ReactJS', 'React-Query', 'Redux', 'PWA'],
  },
];

const formatStack = (stack: string[]) => (
  <div className="flex items-center gap-1 text-white italic">
    {stack.map((tech, index) => (
      <span key={tech} className="flex items-center">
        {tech}
        {index !== stack.length - 1 && <Dot className="ml-1 w-5 h-5" />}
      </span>
    ))}
  </div>
);

const projectsData = projects.map((project) => ({
  image: (
    <img
      src={project.image}
      alt={project.title}
      className="w-full h-full object-contain rounded-md"
    />
  ),
  titleSection: (
    <div className="flex justify-between items-center w-full">
      {/* Left Side: Title & Subtitle */}
      <div className="flex flex-col gap-1">
        <h3 className="text-2xl font-semibold">{project.title}</h3>
        <p className="italic text-sm text-white">{project.organization}</p>
      </div>

      {/* Right Side: View Project Link */}
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center text-blue-500 text-md font-medium hover:underline"
      >
        View Project <Link className="ml-1 w-4 h-4" />
      </a>
    </div>
  ),
  contentSection: (
    <p className="font-medium sm:text-[16px] lg:text-[16px] max-w-xl h-[250px] mt-4 leading-relaxed">
      {project.description}
    </p>
  ),
  footerSection: (
    <span className="text-sm mt-4 leading-relaxed">
      {formatStack(project?.stack)}
    </span>
  ),
}));

console.log(projectsData);

const Projects = () => {
  return (
    <div className="bg-[#0B1D29] min-h-screen pb-14">
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
          {projectsData.map((project, index) => (
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
