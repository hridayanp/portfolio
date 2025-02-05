import { motion } from 'framer-motion';

const OpenSourceRequirements = () => {
  return (
    <motion.section
      className="py-16 pb-8 px-6 sm:px-12 lg:px-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      id="open-source"
    >
      <div
        className={`container mx-auto flex flex-col md:flex-row gap-12 justify-left`}
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
            Intellectual Property and Open-Source Requirements
          </h2>

          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            All solutions developed during the ClearSky Hackathon will be the
            intellectual property of UNDP and must be released as open-source
            software under the MIT License or similar open-source license as
            specified by UNDP. This requirement ensures that:
          </motion.p>

          <motion.ul
            className="text-[18px] font-medium mb-5 leading-relaxed list-disc ml-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <li>
              All code, documentation, and related materials will be publicly
              accessible
            </li>
            <li>
              Solutions can be freely used, modified, and distributed by UNDP
              and other stakeholders
            </li>
            <li>
              Innovations can benefit the broader community working on air
              quality challenges
            </li>
            <li>Future improvements and adaptations are possible</li>
          </motion.ul>

          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Participants must:
          </motion.p>

          <motion.ul
            className="text-[18px] font-medium mb-5 leading-relaxed list-disc ml-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <li>Upload all code to public GitHub repositories</li>
            <li>Include appropriate open-source license files</li>
            <li>Properly document their solutions</li>
            <li>Transfer all intellectual property rights to UNDP</li>
            <li>
              Ensure no proprietary or closed-source components are used without
              explicit permission
            </li>
          </motion.ul>

          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            This approach aligns with UNDP's commitment to open innovation and
            sustainable development through shared knowledge and resources.
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        {/* Add your image section if needed */}
      </div>
    </motion.section>
  );
};

export default OpenSourceRequirements;
