import { motion } from 'framer-motion';

const OutreachStrategy = () => {
  return (
    <motion.section
      className="py-16 pb-8 px-16 sm:px-12 lg:px-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      id="outreach"
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row gap-12 text-justify`}
      >
        {/* Left Section (Text Content) */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 mt-0">
            Outreach Strategy
          </h2>

          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            To ensure broad participation and diversity of ideas, we will
            implement a comprehensive outreach strategy:
          </motion.p>

          <motion.ul
            className="text-[18px] font-medium mb-5 leading-relaxed list-disc ml-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <li>
              <strong>Social Media Campaign:</strong> UNDP India will promote
              the hackathon on Twitter, LinkedIn, and Facebook. A dedicated
              hashtag will track engagement and create buzz. Regular posts will
              highlight the challenge, showcase mentors, and provide updates
              throughout the event, ensuring continuous engagement with
              potential participants and the wider public interested in air
              quality issues.
            </li>
            <li>
              <strong>Partner Networks:</strong> We will collaborate with our
              extensive network of partners to amplify our reach. This includes
              engaging with computer science, environmental science, and urban
              planning departments of major universities in India and
              internationally. Partnerships with startup incubators and
              accelerators will help involve young entrepreneurs. At the same
              time, collaborations with NGOs and think tanks working on air
              quality issues will bring in domain expertise and additional
              participants.
            </li>
            <li>
              <strong>Tech Community Platforms:</strong> To reach tech-savvy
              participants, we will create engaging posts on platforms like
              GitHub, Kaggle, and DevPost. We will engage with local tech meetup
              groups in major Indian cities through platforms like Meetup.com to
              tap into existing tech communities.
            </li>
            <li>
              <strong>Email Marketing:</strong> Targeted email campaigns will be
              developed to reach various groups, including past participants of
              UNDP events and challenges, subscribers to relevant UNDP and
              partner organisation newsletters, faculty and student groups at
              target universities, and members of professional associations in
              relevant fields. These emails will be tailored to highlight
              aspects of the hackathon most relevant to each group, ensuring
              maximum engagement and participation.
            </li>
            <li>
              <strong>Press and Media Outreach:</strong> We will engage with
              local and national media outlets to feature stories about the
              hackathon, its objectives, and its potential impact on addressing
              air pollution in Indian cities. This will include press releases,
              interviews with organisers and mentors, and potentially inviting
              media to cover the event. By highlighting the importance of the
              challenge and its innovative approach, we aim to attract wider
              attention and participation from diverse sectors of society.
            </li>
          </motion.ul>

          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            By implementing this multi-faceted outreach strategy, we aim to
            attract diverse participants and generate significant buzz around
            the hackathon and its important environmental objectives.
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        {/* Add your image section if needed */}
      </div>
    </motion.section>
  );
};

export default OutreachStrategy;
