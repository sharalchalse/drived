"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

export default function About() {
  const points = [
    "Personalized one-on-one lessons tailored to your learning pace",
    "Learn in your own car for maximum comfort and familiarity",
    "Professional, patient instructors focused on confidence building",
    "Flexible scheduling that works around your busy life",
    "Real-world road experience with expert guidance and feedback",
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About DrivEd
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We believe learning to drive should be stress-free, personalized, and focused on building genuine confidence behind the wheel.DrivEd which stands for Driving Education is for learning to drive in a scientific/structured way. 
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-black mb-8">
              Why Choose DrivEd?
            </h3>
            <ul className="space-y-4">
              {points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 items-start"
                >
                  <CheckCircle
                    className="text-yellow-400 flex-shrink-0 mt-1"
                    size={24}
                  />
                  <span className="text-gray-700">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-xl shadow-lg"
          >
            <div className="mb-6">
              <h4 className="text-2xl font-bold text-black mb-2">
                Meet Our Founder
              </h4>
              <p className="text-gray-600">
                With over 15 years of professional driving experience and a
                passion for teaching, our founder Snehal Chaudhari started DrivEd with a simple
                mission: to make driving education accessible and
                anxiety-free,with a strong emphasis on defensive driving and road safety.
              </p>
            </div>
            <div className="flex  justify-center">
              <div className="relative w-70 h-72 rounded-xl overflow-hidden shadow-lg">
                <Image
                  src="/founder.jpeg"
                  alt="DrivEd Founder"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
