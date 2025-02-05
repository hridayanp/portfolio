import { motion } from 'framer-motion';
// import DataImage from '@/assets/images/common/eval.jpg';

const DataAccess: React.FC = () => {
  return (
    <motion.section
      className="py-16 px-6 sm:px-12 lg:px-20 bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false }}
      transition={{ duration: 0.8 }}
      id="data-access"
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
            Data Access
          </h2>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            The UNDP India project has collected extensive hyperlocal data on
            air pollution and GHG emissions in Patna and Gurugram. This includes
            data from a network of sensors across both cities: 20 dynamic
            sensors and 30 static sensors (the number of real-time sensors may
            vary). These sensors collect information on pollutants and
            environmental parameters, including PM2.5, PM10, NO2, CO, CO2, CH4,
            temperature, and relative humidity.
          </motion.p>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Dynamic sensors are distributed to 20 trained citizen scientists in
            each city. These citizen scientists move randomly throughout the
            urban area, equipped with air quality monitors. The GPS location and
            sensor data are continuously transmitted and updated in real-time on
            the UNDP server.{' '}
            <a
              href="https://vayu.undp.org.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800"
            >
              Learn here more.
            </a>
          </motion.p>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            The project has also gathered data on specific emission sources,
            including industrial pollution, solid waste burning, vehicular
            pollution, and construction and demolition sites. This data includes
            geocoordinates, photographs, and ambient sensor readings.
          </motion.p>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Participants will have access to this rich dataset, allowing them to
            develop innovative solutions for mapping and addressing air
            pollution in Patna and Gurugram. We encourage participants to
            explore and combine the data with other open-source datasets to
            enhance their analyses and use cases.
          </motion.p>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            To ensure that all participants have equal access to the necessary
            data for their projects, we will provide comprehensive resources and
            support:
          </motion.p>
          <motion.ul
            className="text-[18px] font-medium mb-5 leading-relaxed list-disc ml-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            <li>
              <strong>API Documentation:</strong> Detailed API documentation
              will be provided, outlining how to access and query the hyperlocal
              pollution data collected as part of the UNDP India project - VAYU.
              This documentation will include authentication procedures,
              available endpoints, query parameters, and example requests and
              responses. We will ensure that the API is robust enough to handle
              concurrent requests from multiple participants throughout the
              hackathon period.
            </li>
            <li>
              <strong>Additional Datasets:</strong> While the primary focus is
              on the hyperlocal pollution data, we recognise the value of
              integrating multiple data sources for more comprehensive analyses.
              Participants will be encouraged to utilise additional open-source
              datasets to enhance their use cases. We will provide a curated
              reference list of relevant open datasets, including:
              <ul className="list-disc list-inside ml-6">
                <li>Historical weather data</li>
                <li>Satellite imagery and remote sensing data</li>
                <li>Traffic and transportation data</li>
                <li>Land use and urban planning information</li>
                <li>Demographic and socioeconomic data</li>
              </ul>
            </li>
          </motion.ul>
          <motion.p
            className="text-[18px] font-medium mb-5 leading-relaxed"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.8 }}
          >
            Guidelines for data usage, including any limitations or
            considerations for combining datasets, will be provided to ensure
            that participants can make the most of these resources while
            adhering to data privacy and ethical concerns.
          </motion.p>
        </motion.div>

        {/* Right Section (Image) */}
        {/* <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
        >
          <motion.img
            src={DataImage}
            alt="Data Access"
            className="w-full h-full object-contain"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}
          />
        </motion.div> */}
      </div>
    </motion.section>
  );
};

export default DataAccess;
