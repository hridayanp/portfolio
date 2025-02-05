import { motion } from 'framer-motion';
import PhaseTwo from '@/assets/images/common/phase-2.png';

const About: React.FC = () => {
  return (
    <motion.section
      className="py-16 px-6 sm:px-12 lg:px-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      id="about"
    >
      <div className={`container mx-auto`}>
        {/* Left Section (Text Content) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 mt-0 ">
            About the Hackathon
          </h2>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            The Hyperlocal Pollution Mapping Hackathon is an innovative
            challenge to generate creative and impactful use cases for
            hyperlocal pollution data in Patna and Gurugram. This initiative is
            part of a larger project by UNDP India, supported by the GIZ/Lacuna
            Fund for Climate and Energy, which focuses on creating hyperlocal
            datasets on targeted point sources of air pollution and measuring
            emissions in these two highly polluted cities.
          </motion.p>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed text-left"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            The hackathon seeks to engage diverse participants, including
            university students, researchers, private sector professionals,
            startups, and environmental enthusiasts. By leveraging the power of
            collective intelligence and interdisciplinary collaboration, we aim
            to uncover novel approaches to understanding, modelling,
            visualising, and addressing urban air pollution challenges.{' '}
            {/* <a
              href="https://vayu.undp.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Learn more here.
            </a> */}
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={PhaseTwo}
            alt="UNDP India Project"
            className="w-full h-full object-contain pl-0 pr-0 pt-0 pb-0 md:pl-20 md:pr-10 md:pt-10 md:pb-10"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
