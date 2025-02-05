import { motion } from 'framer-motion';
import ContactUsBg from '@/assets/images/common/contact-us.jpg';
import UNDP from '@/assets/images/common/undp-white.svg';
import VayuWhite from '@/assets/images/common/vayu-white.svg';

const ContactUs = () => {
  return (
    <section
      id="contact"
      className="w-screen min-h-screen flex flex-col items-center justify-center py-8 relative z-10 sm:bg-contain sm:bg-no-repeat"
      style={{
        backgroundImage: `url(${ContactUsBg})`,
        backgroundAttachment: 'fixed', // Keep background fixed during scroll
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      {/* Overlay for dimming */}
      <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none"></div>

      {/* Contact Content */}
      <div className="container px-4 sm:px-8 lg:px-20 py-8 flex-grow relative z-20 flex flex-col items-center justify-center mb-28">
        <div className="max-w-5xl mx-auto text-center">
          {/* Contact Heading */}
          <motion.h2
            className="text-2xl sm:text-3xl lg:text-5xl font-semibold text-white mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Contact Us
          </motion.h2>

          {/* Contact Details */}
          <motion.div
            className="text-base sm:text-lg text-white font-medium leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            {/* <p>Arun Kumar Yadav </p>
            <p>Project Coordinator </p>

            <p>Action for Climate Change and Environment</p>
            <p>UNDP Accelerator Labs - India</p>
            <p>Parvathy Krishnan</p>
            <p>Data Science Lead, UNDP India</p>
            <p>
              Email:{' '}
              <a
                href="mailto:arun.yadav@undp.org"
                className="text-blue-300 underline hover:text-blue-500"
              >
                arun.yadav@undp.org
              </a>
            </p>
             */}
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 p-6">
              <div className="text-center">
                <h2 className="font-bold text-lg">Arun Kumar Yadav</h2>
                <p>Project Coordinator </p>
                <p>Action for Climate Change and Environment, UNDP India</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:arun.yadav@undp.org"
                    className="text-blue-300 underline hover:text-blue-500"
                  >
                    arun.yadav@undp.org
                  </a>
                </p>
              </div>

              <div className="w-full h-px bg-gray-400 md:w-px md:h-16"></div>

              <div className="text-center">
                <h2 className="font-bold text-lg">Parvathy Krishnan</h2>
                <p>Data Science Lead</p>
                <p>Action for Climate Change and Environment, UNDP India</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:parvathy.krishnan@undp.org"
                    className="text-blue-300 underline hover:text-blue-500"
                  >
                    parvathy.krishnan@undp.org
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-primary text-white py-6 px-4 sm:px-8 absolute bottom-0">
        <div className="container flex flex-col sm:flex-row items-center justify-between mx-auto">
          {/* Logo on the left */}
          <div className="flex items-center gap-2 justify-center sm:justify-start w-full sm:w-auto mb-4 sm:mb-0">
            <img src={UNDP} alt="logo" className="h-12 w-10" />
            <img src={VayuWhite} alt="logo" className="h-7 mt-5" />
          </div>

          {/* Footer Text */}
          <div className="flex flex-col items-center sm:items-end text-center sm:text-right w-full sm:w-auto">
            <span>
              <span className="font-medium text-lg">&copy;</span> UNDP India,
              2025 - All Rights Reserved
            </span>
            <span>
              Developed and Maintained by{' '}
              <a
                href="https://misteo.co/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 underline hover:text-blue-500"
              >
                mistEO
              </a>
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContactUs;
