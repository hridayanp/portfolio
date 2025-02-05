import { motion } from 'framer-motion';
import clearskyBg from '@/assets/images/logo/dev-logo-1.jpg';
import { BoxReveal } from '@/components/ui/box-reveal';
import { Particles } from '@/components/ui/particles'; // Import Particles component
import { PageTransition } from '@/components/Animations/pageTransition';

const Home = () => {
  return (
    <section
      id="home"
      className="relative overflow-hidden h-screen min-h-screen w-full flex bg-[#0f2756] px-10"
    >
      <PageTransition />
      {/* Particles Background */}
      <Particles
        className="absolute top-0 left-0 w-full h-full"
        quantity={500} // Increased particle quantity for more density
        staticity={30} // Faster interaction with mouse movement
        ease={50} // Faster easing of particles movement
        size={0.6} // Increased size of particles for more visibility
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
            scalable and efficient web applications. With a strong foundation in
            backend and cloud technologies, I thrive on solving complex problems
            and creating seamless digital experiences.
          </p>
        </BoxReveal>
      </motion.div>

      {/* Right Image Section (Fixed Height to Prevent Overflow) */}
      <div className="w-1/2 flex justify-center items-center overflow-hidden relative z-10">
        <div className="relative w-[40%] h-[40%] flex justify-center items-center">
          <motion.div
            className="w-full h-full bg-cover bg-center rounded-lg shadow-lg"
            style={{
              backgroundImage: `url(${clearskyBg})`,
              padding: '10px',
            }}
            animate={{ y: [-10, 0] }} // Less vertical movement to prevent overflow
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Home;
