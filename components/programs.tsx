'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

export default function Programs() {
  const programs = [
    {
      name: 'Hurdle Mastery Program',
      tag: 'Quick Confidence Builder',
      duration: '5 Sessions',
      featured: false,
      features: [
        'Basic vehicle controls and safety',
        'City driving basics',
        'Traffic handling',
        'Parking techniques',
        'Defensive driving intro',
        'Road test preparation',
        'Confidence building exercises',
      ],
    },
    {
      name: 'Complete DrivEd Learning Program',
      tag: 'Most Popular',
      duration: '12 Sessions',
      featured: true,
      features: [
        'Comprehensive vehicle mastery',
        'Urban and highway driving',
        'Advanced traffic scenarios',
        'Parking and maneuvering',
        'Defensive driving techniques',
        'Winter/adverse weather driving',
        'Road test strategies',
        'Confidence and anxiety management',
      ],
    },
  ];

  return (
    <section id="programs" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Our Programs</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the program that fits your needs and driving goals
          </p>
        </motion.div>

        {/* Constraining the grid to max-w-4xl makes the cards centered and perfectly proportioned on desktop */}
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 lg:gap-10">
          {programs.map((program, index) => (
            <motion.div
              key={program.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`rounded-2xl p-6 md:p-8 relative overflow-hidden transition-all hover:shadow-2xl flex flex-col justify-between ${
                program.featured
                  ? 'bg-gradient-to-br from-yellow-50 to-white border-2 border-yellow-400 shadow-xl md:scale-105'
                  : 'bg-white border-2 border-gray-200 shadow-sm'
              }`}
            >
              <div>
                {program.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-semibold shadow-sm">
                      {program.tag}
                    </span>
                  </div>
                )}

                {!program.featured && (
                  <div className="mb-4">
                    <span className="bg-gray-100 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      {program.tag}
                    </span>
                  </div>
                )}

                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4 pr-12">{program.name}</h3>

                {/* Styled session duration badge (price removed) */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-yellow-600 bg-yellow-400/10 uppercase tracking-widest border border-yellow-400/20 px-3 py-1.5 rounded-lg shadow-sm">
                    {program.duration}
                  </span>
                </div>

                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-black text-xs uppercase tracking-wider opacity-60">Includes:</h4>
                  {program.features.map((feature, featureIndex) => (
                    <motion.div
                      key={feature}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: featureIndex * 0.05 }}
                      viewport={{ once: true }}
                      className="flex gap-3 items-start"
                    >
                      <Check className="text-yellow-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              <button
                className={`w-full py-3.5 rounded-xl font-bold transition-all hover:shadow-lg ${
                  program.featured
                    ? 'bg-yellow-400 text-black hover:bg-yellow-500 hover:shadow-yellow-400/20'
                    : 'bg-black text-white hover:bg-gray-800 hover:shadow-black/20'
                }`}
              >
                Choose This Program
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

