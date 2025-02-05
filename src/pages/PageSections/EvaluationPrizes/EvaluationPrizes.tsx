import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import bg from '@/assets/images/common/eval.jpg';

const EvaluationAndPrizes = () => {
  return (
    <section
      id="evaluation-prizes"
      className="w-screen min-h-screen flex flex-col items-center justify-left py-8 relative z-10 sm:bg-contain sm:bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed', // Keep background fixed during scroll
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70 pointer-events-none"></div>

      <div className="container lg:px-20 relative z-20">
        <div className="max-w-7xl mx-auto text-center mt-16">
          {/* Heading */}
          <motion.h2
            className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white mb-4 mt-0"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Evaluation
          </motion.h2>
          <motion.p
            className="text-lg text-white font-medium mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            The evaluation process and prizes are designed to ensure a fair
            assessment of innovative and impactful solutions.
          </motion.p>
        </div>

        {/* Cards for Evaluation */}
        <div className="flex flex-col sm:flex-row sm:justify-left gap-6">
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
                    Phase 1 : Evaluation & Weightage
                  </span>
                  <span className="block text-md font-medium text-gray-600">
                    Initial Submissions
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6 flex-grow">
                <CardDescription>
                  <ul className="text-[18px] leading-relaxed font-medium list-disc ml-6 text-black">
                    <li>
                      <strong>Problem Understanding (25%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>Clear articulation of the challenge</li>
                        <li>Relevance to local context</li>
                        <li>Understanding of air quality issues</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Technical Approach (25%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>Feasibility of proposed solution</li>
                        <li>Innovation in methodology</li>
                        <li>Appropriate use of data and technology</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Impact Potential (25%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>Practical applicability</li>
                        <li>Scalability</li>
                        <li>Sustainability</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Team Capability (25%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>Technical expertise</li>
                        <li>Related experience</li>
                        <li>Diverse skill sets</li>
                      </ul>
                    </li>
                  </ul>
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
                    Phase 2 : Evaluation & Weightage
                  </span>
                  <span className="block text-md font-medium text-gray-600">
                    Finalist Submissions
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6 flex-grow">
                <CardDescription>
                  <ul className="text-[18px] leading-relaxed font-medium list-disc ml-6 text-black">
                    <li>
                      <strong>Innovation and Creativity (25%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>Originality of the approach or solution</li>
                        <li>Creative use of data and technologies</li>
                        <li>Novel insights or perspectives on the problem</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Technical Implementation (25%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>Quality and efficiency of the code</li>
                        <li>Appropriateness of chosen methodologies</li>
                        <li>Scalability and robustness of the solution</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Potential Impact and Scalability (20%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>
                          Relevance to real-world air pollution challenges in
                          Patna and Gurugram
                        </li>
                        <li>
                          Potential for practical implementation or policy
                          influence
                        </li>
                        <li>
                          Scalability to other urban contexts or environmental
                          issues
                        </li>
                      </ul>
                    </li>
                    <li>
                      <strong>
                        Use of Provided and Additional Datasets (15%) :
                      </strong>
                      <ul className="list-disc ml-6">
                        <li>
                          Effective utilization of the hyperlocal pollution data
                        </li>
                        <li>
                          Creative integration of additional open-source
                          datasets
                        </li>
                        <li>Data processing and fusion techniques</li>
                      </ul>
                    </li>
                    <li>
                      <strong>Presentation and Documentation (15%) :</strong>
                      <ul className="list-disc ml-6">
                        <li>
                          Clarity and effectiveness of the project presentation
                        </li>
                        <li>Quality and comprehensiveness of documentation</li>
                        <li>Visualization and communication of results</li>
                      </ul>
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Prizes Section */}
        {/* <div className="mt-12">
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
                  <span className="block text-xl mb-2">Prizes</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <CardDescription>
                  <ul className="text-[18px] leading-relaxed font-medium list-disc ml-6 text-black">
                    <li>
                      <strong>First Place:</strong> ₹1,00,000 (One Lakh Rupees),
                      opportunity to present at a UNDP event, and support for
                      journal or conference submission.
                    </li>
                    <li>
                      <strong>Second Place:</strong> ₹50,000 and an opportunity
                      to present at a UNDP event.
                    </li>
                    <li>
                      <strong>Finalists:</strong> Certificates and potential
                      collaboration opportunities with UNDP and partners.
                    </li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
};

export default EvaluationAndPrizes;
