import { PageTransition } from '@/components/Animations/pageTransition';
import { BoxReveal } from '@/components/ui/box-reveal';
import { motion } from 'framer-motion';
import ImageAbout from '@/assets/images/common/Hridayan Phukan.jpeg';
import { SparklesText } from '@/components/magicui/sparkles-text';

export const About = () => {
  const sparkleColors = [
    { first: '#A07CFE', second: '#FE8FB5' }, // Purple & Pink
    { first: '#FFD700', second: '#FFA500' }, // Gold & Orange
    { first: '#00D4FF', second: '#007BFF' }, // Cyan & Blue
    { first: '#FF5F6D', second: '#FFC371' }, // Red & Peach
    { first: '#6AFFB0', second: '#28C76F' }, // Green & Mint
  ];

  return (
    <div className="bg-[#f8f8f8]">
      <PageTransition />
      <div className="flex flex-col lg:flex-row items-center px-6 sm:px-12 lg:px-8 py-10 bg-[#0B1D29] w-full min-h-screen">
        {/* Left Side: Biography */}
        <motion.div
          className="lg:w-1/2 w-full flex flex-col justify-start items-start text-left text-white px-6 sm:px-12 lg:px-16 relative z-10"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <BoxReveal width="100%" boxColor="#0652DD" duration={0.8}>
            <h2 className="text-3xl font-bold mb-4 my-8">
              Let me tell you a bit more about me
            </h2>
          </BoxReveal>

          <BoxReveal width="100%" boxColor="#0652DD" duration={0.8}>
            <p className="text-md mb-4 font-medium leading-relaxed">
              Hi, I'm Hridayan Phukan! 👋 I am a passionate Full-stack Developer
              focusing on building efficient and scalable applications. I
              specialize in frontend technologies like React, React Native, and
              SwiftUI, and I have hands-on experience in backend systems, cloud
              technologies, and data management.
            </p>
          </BoxReveal>

          <BoxReveal width="100%" boxColor="#0652DD" duration={0.8}>
            <p className="text-md mb-4 font-medium leading-relaxed">
              One of my key contributions to open-source has been to the UNDP’s
              various projects. I helped develop tools and dashboards for
              climate resilience, air quality monitoring, and data-driven
              decision-making in agriculture. These projects have allowed me to
              work on real-time data processing and API optimizations, improving
              performance by over 40%.
            </p>
          </BoxReveal>

          <BoxReveal width="100%" boxColor="#0652DD" duration={0.8}>
            <p className="text-md mb-4 font-medium leading-relaxed">
              My professional journey has been incredibly rewarding, and I am
              eager to take on new challenges and contribute to projects that
              have a meaningful impact. Whether you need a developer for your
              next project, or you’re looking to collaborate on an open-source
              initiative, feel free to reach out. I look forward to working
              together and bringing innovative solutions to life.
            </p>
          </BoxReveal>

          <BoxReveal width="100%" boxColor="#0652DD" duration={0.8}>
            <motion.p
              className="text-right font-semibold"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.8 }}
            >
              — Hridayan Phukan
            </motion.p>
          </BoxReveal>
        </motion.div>

        {/* Right Side: Image */}
        <div className="lg:w-1/2 w-full flex justify-center relative mt-10 lg:mt-0">
          <div className="w-72 h-72 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-lg relative">
            <img
              src={ImageAbout} // Replace with your image URL
              alt="Hridayan Phukan"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Remote Since Tag */}
          <div className="absolute h-30 w-44 bottom-[-10%] left-1/2 transform -translate-x-1/2 bg-[#3A98B9] text-white p-4 rounded-lg shadow-md flex flex-col items-center justify-center gap-3">
            <p className="text-[20px] font-medium leading-none text-center">
              Remote Since
            </p>
            <SparklesText
              text="2021"
              sparklesCount={5}
              colors={sparkleColors[3]}
              className="text-[30px] font-normal leading-none text-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

// const workExpItems = [
//   {
//     id: 1,
//     content: (
//       <div className="py-16 flex items-center">
//         <div className="flex-1 ml-20">
//           <p className="font-medium">
//             <strong>mistEO Pvt. Ltd.</strong> Mar, 2023 – Aug, 2024
//             <br />
//             <strong>Frontend Developer</strong>
//             <br />
//             <ul className="list-none pl-1">
//               <li className="flex items-start">
//                 <span className="mr-2">-</span>
//                 Initiated a groundbreaking collaboration with UNDP, driving
//                 climate-resilient agriculture goals by launching an innovative
//                 digital product. Enabled open access to critical geospatial
//                 datasets, resulting in a 25% increase in data accessibility.
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2">-</span>
//                 Directed the development of a real-time map portal for
//                 multiple states, transforming data visualization through
//                 innovative presentation techniques. Achieved a 50% increase in
//                 user engagement and reduced data analysis time by 30% through
//                 interactive filters and visualizations.
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2">-</span>
//                 Guided frontend development for a climate intelligence portal,
//                 emphasizing an intuitive climate control interface,
//                 contributing to a 20% improvement in user experience.
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     content: (
//       <div className="py-16 flex items-center">
//         <div className="flex-1 ml-20">
//           <p className="font-medium">
//             <strong>Accubits Technologies Pvt. Ltd.</strong> Sept, 2021 – Feb,
//             2023
//             <br />
//             <strong>Software Engineer</strong>
//             <br />
//             <ul className="list-none pl-1">
//               <li className="flex items-start">
//                 <span className="mr-2">-</span>
//                 Engineered high-performing React and Redux front-end
//                 solutions, optimizing system performance and elevating user
//                 satisfaction by 20%.
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2">-</span>
//                 Revamped UI components, increasing user engagement by 15% and
//                 delivering an exceptional experience.
//               </li>
//               <li className="flex items-start">
//                 <span className="mr-2">-</span>
//                 Collaborated cross-functionally, consistently surpassing
//                 project deadlines by 25%, ensuring on-time delivery of
//                 high-quality solutions.
//               </li>
//             </ul>
//           </p>
//         </div>
//       </div>
//     ),
//   },
// ];

// const eduItems = [
//   {
//     id: 1,
//     content: (
//       <div className="py-16 ml-20">
//         <strong>Sikkim Manipal Institute of Technology</strong> Jul, 2021
//         <br />
//         <strong>
//           Bachelor of Technology, Computer Science and Engineering
//         </strong>
//         <ul className="list-none pl-6 mt-4">
//           <li className="flex items-start">
//             <span className="mr-2">-</span> Relevant Courses: Data Structures,
//             Software Engineering, Design and Analysis of Algorithms, Operating
//             Systems, Blockchain and Smart Contracts theory.
//           </li>
//         </ul>
//       </div>
//     ),
//   },
//   {
//     id: 2,
//     content: (
//       <div className="py-16 ml-20">
//         <strong>Indian Institute of Technology, Patna</strong>
//         <br />
//         <strong>MTECH in Cloud Computing</strong>
//         <ul className="list-none pl-6 mt-4">
//           <li className="flex items-start">
//             <span className="mr-2">-</span> Relevant Courses: Advanced Cloud
//             Computing, Cloud Architecture, Parallel Algorithms, Cloud Security
//           </li>
//         </ul>
//       </div>
//     ),
//   },
// ];

{
  /* Scrollable Content Section */
}
{
  /* <div className="px-6 sm:px-12 lg:px-16 py-10">
        <div className="w-full h-screen flex flex-col justify-center items-center">
          <h2 className="text-3xl font-bold mb-6">Work Experience</h2>
          <div className="w-[75%] mx-auto flex justify-center items-center h-full">
            <ScrollableList items={workExpItems} />
          </div>
        </div>

        <div className="w-full h-screen flex flex-col justify-center items-center mt-16">
          <h2 className="text-3xl font-bold mb-6">Education</h2>
          <div className="w-[75%] mx-auto flex justify-center items-center h-full">
            <ScrollableList items={eduItems} />
          </div>
        </div>
      </div> */
}
