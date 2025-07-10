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
            className="sticky top-20 w-full mx-auto bg-gradient-to-br from-gray-900 to-blue-900 rounded-3xl p-10 my-16 border border-gray-700 shadow-xl flex flex-col lg:flex-row gap-10 z-10"
            initial={{ scale: 1, opacity: 1, y: 40 }}
            whileInView={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
        >
            <div className="flex-1 min-w-0 md:pr-10">
                <h1 className="text-2xl font-bold mb-3 text-blue-300">{subtitle}</h1>
                <h2 className="text-xl font-semibold mb-4 text-white">{title}</h2>
                <p className="text-md text-gray-300 mb-8">{description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {features.map((feature, index) => (
                        <div key={index} className='hidden md:block'>
                            <h3 className="text-md font-semibold text-blue-200 mb-2">{feature.title}</h3>
                            <ul className="list-disc list-inside text-gray-300">
                                {feature.items.map((item, idx) => (
                                    <li key={idx} className="mb-1 text-sm">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center mt-10 md:mt-0">
                <div className="w-80 h-80 rounded-full overflow-hidden shadow-xl border-4 border-gray-700 flex items-center justify-center bg-gray-800">
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
