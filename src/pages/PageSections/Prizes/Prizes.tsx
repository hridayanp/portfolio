import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import bg from '@/assets/images/common/eval.jpg';

const Prizes = () => {
  return (
    <section
      id="evaluation-prizes"
      className="w-screen flex flex-col items-center justify-left py-0 pb-14 relative z-10 sm:bg-contain sm:bg-no-repeat"
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
            Prizes
          </motion.h2>
          <motion.p
            className="text-lg text-white font-medium mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            To recognise outstanding contributions and incentivise high-quality
            submissions, we will offer a compelling prize structure.
            Additionally, all finalists will receive certificates of recognition
            and will be considered for potential internship or collaboration
            opportunities with UNDP India and partner organisations.
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
                  <span className="block text-xl mb-2">First Place</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6 flex-grow">
                <CardDescription>
                  <ul className="text-[18px] leading-relaxed font-medium list-disc ml-6 text-black">
                    <li>
                      Cash prize of{' '}
                      <span className="font-semibold">
                        ₹1,00,000 (One Lakh Rupees)
                      </span>
                    </li>
                    <li>
                      Opportunity to present the project at a UNDP India event
                    </li>
                    <li>
                      Support to submit as a research product to a journal or
                      conference
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
                  <span className="block text-xl mb-2">Second Place</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col gap-6 flex-grow">
                <CardDescription>
                  <ul className="text-[18px] leading-relaxed font-medium list-disc ml-6 text-black">
                    <li>
                      Cash prize of{' '}
                      <span className="font-semibold">
                        ₹50,000 (Fifty Thousand Rupees)
                      </span>
                    </li>
                    <li>
                      Opportunity to present the project at a UNDP India event
                    </li>
                    <li>Feature in UNDP India&apos;s digital publications</li>
                  </ul>
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
