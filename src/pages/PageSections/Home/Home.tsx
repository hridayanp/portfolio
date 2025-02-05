import { motion } from 'framer-motion';
import clearskyBg from '@/assets/images/common/bg-3.jpg';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import undpLogo from '@/assets/images/partners/undp.svg';
import gizLogo from '@/assets/images/partners/giz.svg';
import lacunaLogo from '@/assets/images/partners/lacuna-white.svg';
const Home = () => {
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLScweM50TptaixU-AdKux_BGdIwpu993IQhl2wczzxxg9jiu7Q/viewform?usp=preview',
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <section
      id="home"
      className="relative h-screen w-full flex flex-col justify-between bg-fixed bg-center bg-cover sm:bg-cover sm:bg-no-repeat"
      style={{
        backgroundImage: `url(${clearskyBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none"></div>

      {/* Main Content */}
      <motion.div
        className="relative top-[5%] z-10 flex-1 flex items-center justify-left text-center text-white px-4 sm:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        transition={{ duration: 0.8 }}
      >
        {/* <div className="flex flex-col items-center justify-left space-y-4 max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
            <div
              className="flex justify-center gap-4 md:gap-[12rem] p-4 h-[100px] md:h-[190px]"
              style={{ marginBottom: '50px' }}
            >
              <img
                src={gizLogo}
                alt="Like 1"
                className="w-1/3 sm:w-1/2 md:w-1/3 object-contain"
              />
              <img
                src={lacunaLogo}
                alt="Like 2"
                className="w-1/3 sm:w-1/2 md:w-1/3 object-contain"
              />
              <img
                src={undpLogo}
                alt="Like 3"
                className="w-1/3 sm:w-1/2 md:w-1/3 object-contain"
              />
            </div>
            ClearSky Hackathon
          </h1>
          <p className="font-medium sm:text-lg lg:text-xl max-w-xl mx-auto">
            Decoding Air Quality in Patna and Gurugram
          </p>
          <p></p>
          <p></p>
          <Button
            variant="outline"
            className={` text-[#222222] rounded-full border-none h-[50px] text-[16px] sm:w-1/2 sm:text-[18px] 
              ${isHovered ? 'shadow-lg bg-white' : 'shadow-md'} 
              transition-shadow duration-200`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleButtonClick}
          >
            Register
          </Button>
        </div> */}

        <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Images Section */}
          <div className="flex justify-evenly w-full gap-6 py-6 flex-wrap">
            <img
              src={gizLogo}
              alt="Like 1"
              className="h-[150px] w-auto object-contain"
            />
            <img
              src={lacunaLogo}
              alt="Like 2"
              className="h-[150px] w-auto object-contain"
            />
            <img
              src={undpLogo}
              alt="Like 3"
              className="h-[150px] w-auto object-contain"
            />
          </div>

          {/* Text & Button Section */}
          <div className="flex flex-col items-center text-center gap-4">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-semibold leading-tight">
              ClearSky Hackathon
            </h1>
            <p className="font-medium sm:text-lg lg:text-xl max-w-xl">
              Decoding Air Quality in Patna and Gurugram
            </p>

            {/* Register Button */}
            <Button
              variant="outline"
              className={`mt-7 text-[#222222] rounded-full border-none h-[50px] text-[16px] sm:w-1/2 sm:text-[18px] 
      ${isHovered ? 'shadow-lg bg-white' : 'shadow-md'} 
      transition-shadow duration-200`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onClick={handleButtonClick}
            >
              Register
            </Button>
          </div>
        </div>
      </motion.div>

      {/* Conference Details */}
      {/* <div
        className="relative w-full py-6 text-white text-center z-20"
        style={{ backgroundColor: '#3D944E' }}
      >
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-8 px-4 sm:px-8">
          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold">Next Conference</h3>
            <p className="mt-1 text-base sm:text-lg">Biggest Conference</p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold">
              Registration Open Date
            </h3>
            <p className="mt-1 text-base sm:text-lg">September 17th, 2014</p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold">Location</h3>
            <p className="mt-1 text-base sm:text-lg">
              Oxford Street, London, UK
            </p>
          </div>

          <div className="flex-1">
            <h3 className="text-lg sm:text-xl font-bold">Time</h3>
            <p className="mt-1 text-base sm:text-lg">09:45 AM - 10:15 PM</p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Home;

// in collaboration with experts, students, and
//             enthusiasts to explore creative uses of hyperlocal pollution data
//             and drive positive environmental change.
