'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import Image from 'next/image';

type Video = {
  id: number;
  title: string;
  description: string;
  /** YouTube video ID */
  youtubeId: string;
  /** Thumbnail – uses YouTube's auto-generated hqdefault if not overridden */
  thumbnail?: string;
};

const videos: Video[] = [
  {
    id: 1,
    title: 'First Lesson Walk-Through',
    description: 'See how we ease complete beginners into their very first drive in a safe, dual-control car.',
    youtubeId: 'YOUR_YOUTUBE_ID_1',
  },
  {
    id: 2,
    title: 'Highway Confidence',
    description: 'Watch a student conquer merging, lane changes and high-speed cruising on a real highway.',
    youtubeId: 'YOUR_YOUTUBE_ID_2',
  },
  {
    id: 3,
    title: 'Parking Masterclass',
    description: 'Step-by-step parallel, angle and reverse-bay parking — explained and demonstrated.',
    youtubeId: 'YOUR_YOUTUBE_ID_3',
  },
];

function getThumbnail(video: Video) {
  return video.thumbnail ?? `https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`;
}

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const handleOpen = (index: number) => {
    setCurrentIndex(index);
    setSelectedVideo(videos[index]);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(newIndex);
    setSelectedVideo(videos[newIndex]);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newIndex = (currentIndex + 1) % videos.length;
    setCurrentIndex(newIndex);
    setSelectedVideo(videos[newIndex]);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 },
    },
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring' as const, stiffness: 100, damping: 15 },
    },
  };

  return (
    <section className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-1.5 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-semibold uppercase tracking-widest mb-4">
            Watch &amp; Learn
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Driving in <span className="text-yellow-400">Motion</span>
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Real lessons, real students — watch the DriveEd experience come to life.
          </p>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              onClick={() => handleOpen(index)}
              className="group relative overflow-hidden rounded-xl cursor-pointer bg-zinc-900 shadow-md hover:shadow-2xl hover:shadow-yellow-400/10 transition-all duration-300 border border-zinc-800 hover:border-yellow-400/30"
            >
              {/* 16:9 aspect-ratio wrapper required by next/image fill */}
              <div className="relative w-full aspect-video">
                <Image
                  src={getThumbnail(video)}
                  alt={video.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-yellow-400/90 flex items-center justify-center shadow-lg shadow-yellow-400/30 transform scale-90 group-hover:scale-100 transition-transform duration-300">
                    <Play size={22} className="text-black fill-black ml-1" />
                  </div>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 inset-x-0 p-5 flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-yellow-400 text-xs font-bold uppercase tracking-wider mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                    Click to Play
                  </span>
                  <h3 className="text-white text-base font-bold leading-tight group-hover:text-yellow-400 transition-colors duration-300">
                    {video.title}
                  </h3>
                  <p className="text-zinc-400 text-sm mt-1 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ── Modal Player ── */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVideo(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            {/* Close */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-6 right-6 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-lg cursor-pointer"
              aria-label="Close Video Player"
            >
              <X size={24} />
            </button>

            {/* Prev */}
            <button
              onClick={handlePrev}
              className="absolute left-4 md:left-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-lg cursor-pointer"
              aria-label="Previous Video"
            >
              <ChevronLeft size={24} />
            </button>

            {/* Card */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl border border-zinc-800 flex flex-col md:flex-row md:h-[70vh]"
            >
              {/* Video embed */}
              <div className="relative w-full md:w-2/3 bg-black aspect-video md:aspect-auto md:h-full flex-shrink-0">
                <iframe
                  key={selectedVideo.youtubeId}
                  src={`https://www.youtube.com/embed/${selectedVideo.youtubeId}?autoplay=1&rel=0&modestbranding=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full min-h-[240px]"
                />
              </div>

              {/* Info panel */}
              <div className="w-full md:w-1/3 p-8 flex flex-col justify-between bg-gradient-to-br from-zinc-900 to-black text-white">
                <div className="space-y-4">
                  <div className="inline-flex px-3 py-1 bg-yellow-400/10 border border-yellow-400/20 rounded-full text-yellow-400 text-xs font-semibold uppercase tracking-wider">
                    Video {currentIndex + 1} of {videos.length}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight">
                    {selectedVideo.title}
                  </h3>
                  <p className="text-zinc-400 text-base leading-relaxed">
                    {selectedVideo.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-800 flex justify-between items-center text-zinc-500 text-sm">
                  <span>DriveEd Video Gallery</span>
                  <span className="text-yellow-400/80 font-medium">Confident &amp; Safe</span>
                </div>
              </div>
            </motion.div>

            {/* Next */}
            <button
              onClick={handleNext}
              className="absolute right-4 md:right-8 z-50 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full border border-white/20 hover:border-white/40 transition-all shadow-lg cursor-pointer"
              aria-label="Next Video"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
