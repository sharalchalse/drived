'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

const whatsappNumber = '+918450950190'; // Replace with your actual WhatsApp number
const whatsappMessage = 'Hi This is a test message from -sharal! I would like to know more about DriveEd driving lessons.';
const whatsappLink = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
  whatsappMessage
)}`;

export default function Hero() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="text-5xl md:text-7xl font-bold text-black">Drive</span>
            <span className="text-5xl md:text-7xl font-bold text-yellow-400">Ed</span>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-black mb-6"
        >
          Learn Driving the Right Way.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Get personalized driving lessons in your own car with patient, professional instructors. Build confidence on real roads with flexible scheduling tailored to your pace.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
       <motion.a
        href={whatsappLink}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
      ></motion.a>
          <button  className="bg-yellow-400 text-black px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all hover:shadow-lg flex items-center gap-2 w-full sm:w-auto">
            Book a Session
            <ArrowRight size={20} />
          </button>
          <button className="border-2 border-black text-black px-8 py-4 rounded-lg font-semibold hover:bg-black hover:text-white transition-all w-full sm:w-auto">
            View Programs
          </button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-8 justify-center items-center text-gray-600"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-black">500+</div>
            <p className="text-sm">Students Trained</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">98%</div>
            <p className="text-sm">Pass Rate</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-black">5★</div>
            <p className="text-sm">Average Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
