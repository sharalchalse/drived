'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Variants } from 'framer-motion';

export default function Gallery() {
  const images = [
    {
      id: 1,
      title: 'Lesson in Progress',
      description: 'One-on-one expert guidance in a modern dual-control car.',
      src: '/Learnerimage.png',
    },
    {
      id: 2,
      title: 'Highway Training',
      description: 'Mastering highway merging, lane changes, and safe speeds.',
      src: '/TrainingSession.png',
    },
    {
      id: 3,
      title: 'Parking Practice',
      description: 'Perfecting parallel parking, angle parking, and reverse stalls.',
      src: '/CarParking.png',
    },
    {
      id: 4,
      title: 'Urban Navigation',
      description: 'Navigating busy intersections, cyclists, and city streets.',
      src: '/Trainingsession2.png',
    },
    // {
    //   id: 5,
    //   title: 'City Driving',
    //   description: 'Mastering urban navigation, busy intersections, and lane control.',
    //   src: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?auto=format&fit=crop&w=800&q=80',
    // },
    // {
    //   id: 6,
    //   title: 'Weather Training',
    //   description: 'Developing safe driving techniques in rain, fog, and wet roads.',
    //   src: '/weatherTraining.png',
    // },
    // {
    //   id: 7,
    //   title: 'Confidence Building',
    //   description: 'Overcoming driving anxiety with patient, step-by-step guidance.',
    //   src: 'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?auto=format&fit=crop&w=800&q=80',
    // },
    // {
    //   id: 8,
    //   title: 'Road Test Ready',
    //   description: 'Pre-test warmups and mock exams to ensure a first-time pass.',
    //   src: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    // },
  ];

  const [selectedImage, setSelectedImage] = useState<typeof images[0] | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setSelectedImage(images[index]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.9,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Learning in Action</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See our students progressing through their driving journey
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {images.map((image, index) => (
            <motion.div
              key={image.id}
              variants={itemVariants}
              onClick={() => handleOpen(index)}
              className="group relative overflow-hidden rounded-xl aspect-square cursor-pointer bg-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-85 transition-all duration-300" />

                {/* Info Text in Bottom */}
                <div className="absolute bottom-0 inset-x-0 p-6 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    Click to View
                  </span>
                  <h3 className="text-white text-lg font-bold leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                    {image.title}
                  </h3>
                  <p className="text-gray-300 text-sm mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {image.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-lg cursor-pointer"
              aria-label="Close Lightbox"
            >
              <X size={24} />
            </button>

            {/* Left Navigation Arrow */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-lg cursor-pointer"
              aria-label="Previous Image"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Main Modal Content Card */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col md:flex-row aspect-auto md:h-[70vh]"
            >
              {/* Image Column */}
              <div className="relative w-full h-[50vh] md:h-full md:w-2/3 bg-black">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              {/* Detail Info Column */}
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-black text-white">
                <div className="space-y-4">
                  <div className="inline-flex px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                    Gallery {currentIndex + 1} of {images.length}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {selectedImage.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center text-zinc-500 text-sm">
                  <span>DriveEd Training Gallery</span>
                  <span className="text-yellow-400/80 font-medium">Confident & Safe</span>
                </div>
              </div>
            </motion.div>

            {/* Right Navigation Arrow */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-lg cursor-pointer"
              aria-label="Next Image"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

