import { motion } from 'framer-motion';
import GizLogo from '@/assets/images/partners/giz.svg';
import ArshedLogo from '@/assets/images/partners/arshed.svg';
import BiharLogo from '@/assets/images/partners/bihar.svg';
import daLogo from '@/assets/images/partners/da-logo.svg';
import gmdaLogo from '@/assets/images/partners/gmda.svg';
import lacunaLogo from '@/assets/images/partners/lacuna-logo.svg';
import misteoLogo from '@/assets/images/partners/misteo.svg';
import stsglobal from '@/assets/images/partners/stsglobal.svg';
// import undpLogo from '@/assets/images/partners/undp.svg';

const partnersData = [
  {
    id: 1,
    name: 'GIZ',
    logo: GizLogo,
  },
  {
    id: 2,
    name: 'Lacuna',
    logo: lacunaLogo,
  },
  {
    id: 3,
    name: 'Bihar',
    logo: BiharLogo,
  },
  {
    id: 4,
    name: 'GMDA',
    logo: gmdaLogo,
  },
  {
    id: 5,
    name: 'Misteo',
    logo: misteoLogo,
  },
  {
    id: 6,
    name: 'Arshed',
    logo: ArshedLogo,
  },
  {
    id: 7,
    name: 'STSGlobal',
    logo: stsglobal,
  },

  {
    id: 8,
    name: 'DA',
    logo: daLogo,
  },

  // {
  //   id: 9,
  //   name: 'UNDP',
  //   logo: undpLogo,
  // },
];

const Partners = () => {
  return (
    <motion.section
      className="py-0 pb-16 px-6 sm:px-12 lg:px-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      id="partners"
    >
      <div className="container mx-auto">
        {/* Section Title */}
        <motion.h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-8 text-center "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Our Partners
        </motion.h2>

        {/* Partner Logos Grid */}
        <motion.div
          // className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-screen-lg mx-auto"
          // initial={{ opacity: 0, y: 50 }}
          // whileInView={{ opacity: 1, y: 0 }}
          // viewport={{ once: false }}
          // transition={{ duration: 0.8 }}

          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full max-w-screen-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          {partnersData.map((partner) => (
            <motion.div
              key={partner.id}
              className="flex justify-center items-center p-4 bg-white rounded-lg"
              style={{ backfaceVisibility: 'hidden' }}
              whileHover={{
                scale: 1.01, // Scale up slightly on hover
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Add shadow
              }}
              // transition={{ duration: 0.1 }}
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="max-w-full max-h-32 object-contain"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Partners;
