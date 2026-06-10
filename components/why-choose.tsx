'use client';

import { motion } from 'framer-motion';
import {
  Car,
  Clock,
  User,
  Trophy,
  Map,
  Smile,
} from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    {
      icon: Car,
      title: 'Learn in Your Own Car',
      description: 'Maximum comfort and familiarity with your vehicle controls',
    },
    {
      icon: Clock,
      title: 'Flexible Timings',
      description: 'Schedule lessons around your work, studies, and personal life',
    },
    {
      icon: User,
      title: 'Personalized Teaching',
      description: 'One-on-one instruction tailored to your learning style and pace',
    },
    {
      icon: Trophy,
      title: 'Confidence-Focused',
      description: 'Build genuine confidence with patient guidance and positive reinforcement',
    },
    {
      icon: Map,
      title: 'Real Road Experience',
      description: 'Learn on actual streets and highways with professional guidance',
    },
    {
      icon: Smile,
      title: 'Patient Instructors',
      description: 'Experienced teachers dedicated to your success and comfort',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="why-choose" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Why Choose DrivEd?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
 Defensive Driving is something that is not taught in most places and most people learn about it too late. Our focus at DrivEd is making you a Defensive Driver.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all group"
              >
                <div className="mb-4 inline-block p-3 bg-yellow-100 rounded-lg group-hover:bg-yellow-200 transition-colors">
                  <Icon className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-black mb-2">{reason.title}</h3>
                <p className="text-gray-600">{reason.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
