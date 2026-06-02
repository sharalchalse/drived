'use client';

import { motion } from 'framer-motion';

export default function Timeline() {
  const steps = [
    {
      number: 1,
      title: 'Initial Assessment',
      description: 'We evaluate your current driving level and identify areas for improvement',
    },
    {
      number: 2,
      title: 'Personalized Plan',
      description: 'Create a customized learning roadmap based on your goals',
    },
    {
      number: 3,
      title: 'Foundation Building',
      description: 'Master vehicle controls, safety, and basic driving techniques',
    },
    {
      number: 4,
      title: 'Real-World Practice',
      description: 'Progress to actual roads with various traffic and weather conditions',
    },
    {
      number: 5,
      title: 'Advanced Techniques',
      description: 'Learn defensive driving and handle complex scenarios',
    },
    {
      number: 6,
      title: 'Road Test Ready',
      description: 'Final preparation and confidence boost before your test',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Your Learning Journey</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A structured path from beginner to confident driver
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line on desktop */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-yellow-400 to-yellow-200 top-0"></div>

          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className="flex-1">
                  <div className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-bold text-black mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="flex justify-center md:flex-col md:justify-center">
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
                      <span className="font-bold text-black text-lg">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Empty space for alignment */}
                <div className="flex-1 hidden md:block"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
