import { motion } from 'framer-motion';
// import bg from '@/assets/images/common/post-event.jpg';

const PostEvent = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      id="post-event"
      className="w-screen flex flex-col items-center justify-center py-0 px-16 relative z-10 sm:bg-contain sm:bg-no-repeat"
      style={{
        // backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed', // Keep background fixed during scroll
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-white bg-opacity-70 pointer-events-none"></div>

      <div
        className={`container mx-auto flex flex-col md:flex-row gap-12 text-justify z-20`}
      >
        {/* Left Section (Text Content) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-black mb-4 mt-0">
            Post-Event Follow-up
          </h2>

          <motion.p
            className="text-[18px] text-black font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            After the conclusion of the hackathon, we will:
          </motion.p>

          <motion.ul
            className="text-[18px] text-black font-medium mb-5 leading-relaxed list-disc ml-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <li>
              <strong>Publish a comprehensive report:</strong> Summarising the
              top use cases, innovative approaches, and key insights generated
              during the hackathon. This report will be shared with relevant
              stakeholders, including government agencies, environmental
              organisations, and urban planners.
            </li>
            <li>
              <strong>
                Explore opportunities to implement or further develop promising
                solutions:
              </strong>{' '}
              This may involve connecting winning teams with relevant UNDP
              projects or partner organisations working on air quality
              initiatives in Patna, Gurugram, or other Indian cities.
            </li>
            <li>
              <strong>
                Conduct a thorough evaluation of the hackathon process:
              </strong>{' '}
              Gathering feedback from participants, mentors, and judges. This
              information will be used to refine and improve future iterations
              of the challenge.
            </li>
            <li>
              <strong>
                Maintain engagement with the participant community:
              </strong>{' '}
              Through follow-up communications, sharing updates on the impact of
              their work, and providing information on future opportunities for
              collaboration or participation in UNDP initiatives.
            </li>
            <li>
              <strong>Develop case studies:</strong> Based on the most
              innovative or impactful projects, showcasing how data-driven
              approaches can contribute to addressing urban environmental
              challenges.
            </li>
          </motion.ul>

          <motion.p
            className="text-[18px] text-black font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            By following through with these post-event activities, we aim to
            ensure that the hackathon's impact extends beyond the event itself,
            contributing to ongoing efforts to improve air quality and urban
            liveability in Indian cities.
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        {/* Add your image section if needed */}
      </div>
    </motion.section>
  );
};

export default PostEvent;
