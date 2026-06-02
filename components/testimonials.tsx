'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'New Driver',
      quote:
        'I was incredibly anxious about driving, but the patient approach made all the difference. Within weeks, I went from terrified to confident behind the wheel!',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Student',
      quote:
        'The personalized lessons were exactly what I needed. The instructor adapted to my pace and always made me feel comfortable pushing boundaries safely.',
      rating: 5,
    },
    {
      name: 'Emma Williams',
      role: 'Working Professional',
      quote:
        'The flexible scheduling was perfect for my busy life. I learned real-world driving skills, not just test-passing techniques. Highly recommend DriveEd!',
      rating: 5,
    },
    {
      name: 'James Rodriguez',
      role: 'Adult Learner',
      quote:
        'I learned to drive later in life and was worried about keeping up. The instructors were so patient and encouraging. I passed my test first try!',
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
