import React from 'react';
import { motion } from 'framer-motion';

interface Feature {
  title: string;
  items: string[];
}

interface CardData {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  image: string;
}

export const cardsData: CardData[] = [
  {
    title: "Accurate Radiology Reporting",
    subtitle: "Imaging in Clinical Trial",
    description: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.",
    features: [
      { title: "Breast Ultrasound", items: ["A wide array of benefits", "Certified Radiologists"] },
      { title: "Advancing Medical", items: ["Personalized Patient Care", "Cutting-edge Technology"] },
    ],
    image: "https://imagon.themeht.com/wp-content/uploads/2024/12/step-img1.jpg",
  },
  {
    title: "Accurate Radiology Reporting",
    subtitle: "Accurate Radiology Reporting",
    description: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.",
    features: [
      { title: "Breast Ultrasound", items: ["A wide array of benefits", "Certified Radiologists"] },
      { title: "Advancing Medical", items: ["Personalized Patient Care", "Cutting-edge Technology"] },
    ],
    image: "https://imagon.themeht.com/wp-content/uploads/2024/12/step-img2.jpg",
  },
  {
    title: "Advance Technology",
    subtitle: "Advance Technology",
    description: "Vestibulum morbi blandit cursus risus. Augue neque gravida in fermentum et sollicitudin ac orci phasellus.",
    features: [
      { title: "Breast Ultrasound", items: ["A wide array of benefits", "Certified Radiologists"] },
      { title: "Advancing Medical", items: ["Personalized Patient Care", "Cutting-edge Technology"] },
    ],
    image: "https://imagon.themeht.com/wp-content/uploads/2024/12/step-img3.jpg",
  },
];

interface AboutSectionTwoProps {
  title: string;
  subtitle: string;
  description: string;
  features: Feature[];
  image: string;
}

export const AboutSectionTwo: React.FC<AboutSectionTwoProps> = ({
  title,
  subtitle,
  description,
  features,
  image
}) => {
  return (
    <motion.div
      className=" sticky top-20  w-full mx-auto rounded-3xl p-10  border border-gray-700 flex flex-col lg:flex-row gap-10 z-10 bg-gray-500/30 backdrop-blur-lg border-white/20 shadow-2xl"
      initial={{ scale: 1, opacity: 1, y: 40 }}
      whileInView={{ scale: 1, opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {/* Decorative blurred circles */}
      {/* <div className="hidden lg:block absolute -top-16 -left-16 w-72 h-72 bg-pink-400/30 rounded-full blur-sm pointer-events-none select-none z-0"></div>
      <div className="hidden lg:block absolute -bottom-20 right-0  xl:-right-20 w-72 h-72 bg-blue-400/30 rounded-full blur-sm pointer-events-none select-none z-0"></div> */}

      {/* Main content */}
      <div className="flex-1 min-w-0 md:pr-10 bg-white backdrop-blur-md rounded-2xl border border-white/20 p-6 shadow-lg z-10">
        <h1 className="text-2xl font-bold mb-3 text-blue-500">{subtitle}</h1>
        <h2 className="hidden md:block text-xl font-semibold mb-4 text-white">{title}</h2>
        <p className="text-md text-gray-500 mb-8">{description}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <div key={index} className='hidden md:block bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 p-4 shadow'>
              <h3 className="text-md font-semibold text-blue-400 mb-2">{feature.title}</h3>
              <ul className="list-disc list-inside text-gray-500">
                {feature.items.map((item, idx) => (
                  <li key={idx} className="mb-1 text-xs">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center mt-10 md:mt-0 z-10">
        <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-white/30 flex items-center justify-center bg-white/10 backdrop-blur-lg">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </motion.div>
  );
};
