import React from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import bg from '@/assets/images/common/bg-2.png';

import TA1 from '@/assets/images/common/ta-1.png';

import TA2 from '@/assets/images/common/ta-2.png';

import TA3 from '@/assets/images/common/ta-3.png';

const Features: React.FC = () => {
  const themes = [
    {
      title: 'Predictive Modeling of Air Quality',
      description:
        'This theme challenges participants to develop advanced predictive models for air quality in Patna and Gurugram. Participants are encouraged to explore machine learning techniques, time series analysis, and spatial interpolation methods to forecast air quality parameters. The models should aim to provide accurate short-term and long-term predictions, which could be valuable for public health advisories and urban planning.',
      image: TA1, // Add a dummy image URL here
    },
    {
      title: 'Source Attribution and Emission Hotspots',
      description:
        'Under this theme, participants will work on identifying and characterising the primary sources of air pollution in the target cities. This may involve developing algorithms to analyse the hyperlocal data and additional datasets to pinpoint emission hotspots, understand the contribution of different sectors (e.g., transportation, industry, construction), and track the temporal and spatial variations in pollution sources. The goal is to provide insights that can inform targeted intervention strategies.',
      image: TA2, // Add a dummy image URL here
    },
    {
      title: 'Impact Assessment and Mitigation Strategies',
      description:
        'This theme focuses on assessing the impact of air pollution on various aspects of urban life and developing data-driven mitigation strategies. Participants are encouraged to explore the relationships between air quality and factors such as public health, economic productivity, and quality of life. Based on their analysis, they should propose innovative mitigation strategies in the Indian scenario, ranging from localised interventions to city-wide policy recommendations.',
      image: TA3, // Add a dummy image URL here
    },
  ];

  return (
    <section
      id="features"
      className="w-screen min-h-screen flex flex-col items-center justify-left py-8 relative z-10 sm:bg-contain sm:bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundAttachment: 'fixed', // Keep background fixed during scroll
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 pointer-events-none"></div>

      <div className="container mx-auto px-6 lg:px-20 relative z-20">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 sm:mb-6 text-white mt-0"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          Thematic Areas
        </motion.h2>
        <motion.p
          className="text-white text-lg font-medium leading-6 text-center mb-8 sm:mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          The hackathon will focus on three key thematic areas, each addressing
          critical aspects of urban air pollution. Participants are welcome to
          focus on one theme or develop solutions integrating multiple thematic
          areas. The key is to leverage the provided hyperlocal data creatively
          and effectively to address real- world air pollution challenges in
          Patna and Gurugram.
        </motion.p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6">
          {themes.map((theme, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.2, delay: index * 0.2 }} // Stagger the appearance of cards
            >
              <Card className="min-h-[490px] transition duration-300 ease-in-out transform hover:bg-gray-100 hover:scale-105">
                <CardHeader className="text-center">
                  <CardTitle className="font-semibold">{theme.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col items-center">
                  {' '}
                  {/* This centers the content */}
                  <img
                    src={theme.image}
                    alt={theme.title}
                    className="mb-4 h-24 w-24 text-center hover:bg-gray-100 hover:shadow-md rounded-lg transition-all duration-200"
                  />
                  <CardDescription className="text-md font-medium justify-left">
                    {theme.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
