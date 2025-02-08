import { motion } from 'framer-motion';
import { BoxReveal } from '@/components/ui/box-reveal';
import { Particles } from '@/components/ui/particles'; // Import Particles component
import { PageTransition } from '@/components/Animations/pageTransition';
import { OrbitingCircles } from '@/components/ui/orbiting-circles';
import { skillIcons } from '@/components/Icons/Icons';

const Landing = () => {
  return (
    <div className="overflow-x-hidden thin-scrollbar">
      <section
        id="home"
        className="relative overflow-hidden h-screen min-h-screen w-full flex bg-[#0B1D29] px-10"
      >
        <PageTransition />
        {/* Particles Background */}
        <Particles
          className="absolute top-0 left-0 w-full h-full"
          quantity={150} // Increased particle quantity for more density
          staticity={30} // Faster interaction with mouse movement
          ease={50} // Faster easing of particles movement
          size={0.8} // Increased size of particles for more visibility
          refresh={true} // Make particles refresh for interactivity
          color="#fff" // Custom color for particles
          vx={0.2} // Added horizontal velocity for movement
          vy={0.4} // Added vertical velocity for movement
        />

        {/* Left Text Section */}
        <motion.div
          className="w-1/2 flex flex-col justify-center items-start text-left text-white px-6 sm:px-12 lg:px-16 relative z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <BoxReveal width="100%" boxColor="#0652DD" duration={1}>
            <h1 className="text-6xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              Turning Vision Into Reality With Code.
            </h1>
          </BoxReveal>

          <BoxReveal width="100%" boxColor="#0652DD" duration={1}>
            <p className="font-medium sm:text-[16px] lg:text-[16px] max-w-xl mt-8">
              As a skilled full-stack developer, I am passionate about building
              scalable and efficient web applications. With a strong foundation
              in backend and cloud technologies, I thrive on solving complex
              problems and creating seamless digital experiences.
            </p>
          </BoxReveal>
        </motion.div>

        {/* Right Image Section (Fixed Height to Prevent Overflow) */}
        <div className="w-1/2 flex justify-center items-center overflow-hidden relative z-10">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-transparent">
            <div className="text-center">
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-100 bg-clip-text text-transparent dark:from-white dark:to-black text-[58px] font-semibold leading-none">
                4+
              </span>
              <br />
              <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-200 bg-clip-text text-transparent dark:from-white dark:to-black text-[34px] font-semibold leading-none">
                years of experience
              </span>
            </div>

            <OrbitingCircles iconSize={30} radius={100} color="#fff">
              {skillIcons.frontend.map((icon) => icon)}
            </OrbitingCircles>

            <OrbitingCircles iconSize={30} radius={150} reverse speed={1}>
              {skillIcons.backend.map((icon) => icon)}
            </OrbitingCircles>

            <OrbitingCircles iconSize={30} radius={200}>
              {skillIcons.database.map((icon) => icon)}
            </OrbitingCircles>

            <OrbitingCircles iconSize={30} radius={250} reverse speed={1}>
              {skillIcons.devops.map((icon) => icon)}
            </OrbitingCircles>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;
