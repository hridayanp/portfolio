// import { pageTransition } from '@/components/Animations/pageTransition';

import { PageTransition } from '@/components/Animations/pageTransition';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="bg-[#f8f8f8]">
      <PageTransition />
      {/* Title Slide In Animation */}
      <motion.h2
        className="text-4xl font-bold text-center mt-10"
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        Let me tell you a bit more about me
      </motion.h2>

      {/* Intro Text Slide In Animation */}
      <motion.p
        className="text-xl text-center mt-4 px-6"
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        A brief intro.
      </motion.p>

      {/* First Paragraph: Introduction */}
      <div className="mt-10 px-6 text-lg">
        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Hi, I'm Hridayan Phukan! 👋 I am a passionate Full-stack Developer
          with a focus on building efficient and scalable applications. My
          expertise lies in frontend technologies like React and React Native,
          with hands-on experience in backend systems, cloud technologies, and
          data management.
        </motion.p>

        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          You can connect with me here:
        </motion.p>
        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          📞 <strong>Phone:</strong> +91-8486426746 📧 <strong>Email:</strong>{' '}
          hridayanphukan123@gmail.com 🔗 <strong>LinkedIn:</strong>{' '}
          [linkedin.com/in/hridayan-phukan](https://linkedin.com/in/hridayan-phukan)
        </motion.p>
      </div>

      {/* Second Paragraph: Technical Expertise */}
      <div className="mt-10 px-6 text-lg">
        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          As a Full-stack Developer, I specialize in building high-performing
          applications that are both scalable and efficient. I have hands-on
          experience with a broad set of technologies, including JavaScript,
          TypeScript, ReactJS, React Native, NodeJS, and cloud platforms like
          AWS and Azure. Additionally, I am skilled in data management tools and
          DevOps practices, ensuring that applications are secure, maintainable,
          and easy to scale.
        </motion.p>

        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          One of my key contributions to open-source has been to the UNDP’s
          various projects. I helped develop tools and dashboards for climate
          resilience, air quality monitoring, and data-driven decision-making in
          agriculture. These projects have allowed me to work on real-time data
          processing and API optimizations, improving performance by over 40%.
        </motion.p>
      </div>

      {/* Third Paragraph: Conclusion & Call to Action */}
      <div className="mt-10 px-6 text-lg">
        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          My professional journey has been incredibly rewarding, and I am eager
          to take on new challenges and contribute to projects that have a
          meaningful impact. Whether you need a developer for your next project,
          or you’re looking to collaborate on an open-source initiative, feel
          free to reach out. I look forward to working together and bringing
          innovative solutions to life.
        </motion.p>

        <motion.p
          initial={{ x: '-100%' }}
          animate={{ x: '0%' }}
          exit={{ x: '100%' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          Thanks for visiting my portfolio! 🌟
        </motion.p>
      </div>

      {/* Signature */}
      <motion.p
        className="mt-6 text-right font-semibold"
        initial={{ x: '-100%' }}
        animate={{ x: '0%' }}
        exit={{ x: '100%' }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      >
        — Hridayan Phukan
      </motion.p>
    </div>
  );
};

export default About;
