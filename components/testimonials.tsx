'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Ambika Pandey',
      role: 'New Driver',
      quote:
        'Legit one of the best driving instructors I’ve come across. He has genuinely taught me the basics of a bike, be it riding or the engineering behind it - purely because of his passion for the field. He takes the time to explain why things work the way they do, which made learning interesting rather than overwhelming. Not once did he mansplain anything to me, nor did he ever make me feel like a fool for not knowing something - literally every question I asked was met with patience and respect.',
      rating: 5,
    },
    {
      name: 'Eswar Murty',
      role: 'Student',
      quote:
        'I had a great learning experience with Snehal on my car, He explains concepts, corrects mistakes and ensures you understand and most importantly he built my confidence on the road, especially in real traffic and other situations. He is very supportive. I would highly recommend him to anyone looking for a skilled and professional driving instructor.',
      rating: 5,
    },
    {
      name: 'Arati Kulkarni',
      role: 'Student',
      quote:
        'I had a great learning experience with Snehal! He was extremely calm, patient, and thorough throughout the entire process. Always on time and very professional. He took the time to explain every detail — from the ins and outs of the car to handling complex driving situations confidently. His focus and clear explanations made me feel comfortable and well-prepared for real-world driving. Highly recommend Snehal if you’re looking for a reliable and experienced instructor!',
      rating: 5,
    },
    {
      name: 'Ajinkya Gaikwad',
      role: 'Student',
      quote:'I found Snehal through Google for personal driving coaching, and it turned out to be the best decision. He is extremely professional and always punctual. Within just 2–3 sessions, he helped me build confidence behind the wheel. After completing all the sessions, I started driving in my neighbourhood, and now I comfortably use my car for daily commuting as well as long drives.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">What Our Students Say</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real feedback from students who transformed their confidence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div>
                <p className="font-semibold text-black">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
