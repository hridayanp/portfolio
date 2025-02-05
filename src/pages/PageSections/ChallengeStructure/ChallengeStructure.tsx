import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import bg from '@/assets/images/common/challenge.jpg';

// import PhaseOne from '@/assets/images/common/phase-1.png';
// import PhaseTwo from '@/assets/images/common/phase-2-eval.png';

const ChallengeStructure = () => {
  return (
    <section
      id="challenge-structure"
      className="w-screen min-h-screen flex flex-col items-center justify-left py-8 relative z-10 sm:bg-contain sm:bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed', // Keep background fixed during scroll
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

      <div className="container lg:px-20 z-20">
        <div className="max-w-7xl mx-auto text-center mt-8">
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Trigger on every scroll into view
            transition={{ duration: 0.8 }}
          >
            Challenge Structure
          </motion.h2>
          <motion.p
            className="text-lg text-white font-medium mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }} // Trigger on every scroll into view
            transition={{ duration: 0.8 }}
          >
            The hackathon is structured as a multi-phase challenge designed to
            encourage innovative ideas and in-depth development of solutions.
          </motion.p>
        </div>

        {/* Cards */}
        <div className="flex flex-col sm:flex-row sm:justify-left gap-6 mb-8">
          {/* Phase 1 Card */}
          <motion.div
            className="w-full sm:w-1/2 flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader className="p-6 bg-[#aedda9] rounded-lg">
                <CardTitle className="text-center font-bold text-gray-800">
                  <span className="block text-xl mb-2">
                    Phase 1 - Open Submission
                  </span>
                  <span className="block text-md font-medium text-gray-600">
                    January 31 – February 17
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6 flex-grow">
                <CardDescription>
                  <p className="text-[18px] leading-relaxed text-black font-medium">
                    During this initial phase, we invite registrations from all
                    interested participants. Individuals or teams will submit
                    their ideas for utilizing the provided air quality data and
                    any additional data sources they propose to incorporate.
                    Submissions will be made through an online Google form,
                    where participants will outline their concept, methodology,
                    and potential impact. No code or detailed implementation is
                    required at this stage.
                  </p>
                  <p className="mt-4 text-[18px] leading-relaxed text-black font-medium">
                    Following the submission deadline, our panel of experts will
                    evaluate all submissions based on creativity, feasibility,
                    and potential impact. The top 5 teams will be selected as
                    finalists and announced on{' '}
                    <span className="font-semibold">February 21</span>.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>

          {/* Phase 2 Card */}
          <motion.div
            className="w-full sm:w-1/2 flex-shrink-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader className="p-6 bg-[#aedda9] rounded-lg">
                <CardTitle className="text-center font-bold text-gray-800">
                  <span className="block text-xl mb-2">
                    Phase 2 - Finalist Selection
                  </span>
                  <span className="block text-md font-medium text-gray-600">
                    February 22 – March 10
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6 flex-grow">
                <CardDescription>
                  <p className="text-[18px] leading-relaxed text-black font-medium">
                    The finalists will receive exclusive mentorship for two
                    weeks, starting from{' '}
                    <span className="font-semibold">February 22</span>. During
                    this period, teams will develop their ideas into concrete
                    implementations, including code and detailed documentation.
                    The five finalist teams will present their completed
                    projects to a jury online. This will be an opportunity for
                    teams to showcase their work, explain their methodologies,
                    and demonstrate the potential impact of their solutions.
                    After the presentations, the jury will select{' '}
                    <span className="font-semibold">2 winners</span>.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-left gap-6">
          {/* Submission Requirements Section */}
          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <Card className="h-full">
              <CardHeader className="p-6 bg-[#aedda9] rounded-lg">
                <CardTitle className="text-center font-bold text-gray-800">
                  <span className="block text-xl mb-2">
                    Submission Requirements for Phase 2
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6 flex-grow">
                <CardDescription>
                  <p className="text-[18px] leading-relaxed font-medium text-black">
                    To ensure a fair and comprehensive evaluation of all
                    projects, the finalists will be required to submit the
                    following:
                  </p>
                  <ul className="text-[18px] leading-relaxed font-medium list-disc ml-6 text-black">
                    <li>
                      <strong>GitHub Repository:</strong> All code,
                      documentation, and related files must be uploaded to a
                      public GitHub repository. This should include:
                      <ul className="list-disc ml-6">
                        <li>Well-commented source code</li>
                        <li>
                          A comprehensive README file explaining the project
                          structure, setup instructions, and how to run the code
                        </li>
                        <li>
                          Any additional documentation, such as methodology
                          explanations or data processing steps
                        </li>
                        <li>
                          Notebooks or scripts used for data analysis and
                          visualisation
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>Project Presentation:</strong> Teams must prepare
                      a brief presentation (e.g., PowerPoint, Google Slides)
                      that outlines:
                      <ul className="list-disc ml-6">
                        <li>
                          The problem statement and objectives of their use case
                        </li>
                        <li>Methodology and technical approach</li>
                        <li>Key findings and insights</li>
                        <li>
                          Potential impact and applications of their solution
                        </li>
                        <li>Future work or areas for expansion</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Demo or Visualizations:</strong> Participants
                      should provide a tangible demonstration of their results.
                      This could be in the form of:
                      <ul className="list-disc ml-6">
                        <li>An interactive web application or dashboard</li>
                        <li>A video walkthrough of their solution</li>
                        <li>
                          Static visualisations with accompanying explanations
                        </li>
                        <li>
                          Any other creative format that effectively
                          communicates the functionality and impact of their
                          work
                        </li>
                      </ul>
                    </li>
                  </ul>
                  <p className="text-[18px] leading-relaxed font-medium text-black mt-4">
                    An online form will facilitate the submission process.
                  </p>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ChallengeStructure;
