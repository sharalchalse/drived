'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    timing: '',
    experience: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setFormData({
        name: '',
        phone: '',
        email: '',
        timing: '',
        experience: '',
        message: '',
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to start your driving journey? Contact us today to book your first lesson.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl text-center"
          >
            <div className="inline-block p-3 bg-yellow-100 rounded-lg mb-4">
              <Phone className="text-yellow-400" size={24} />
            </div>
            <h3 className="font-semibold text-black mb-2">Phone</h3>
            <p className="text-gray-600">
              <a href="tel:+918169891400" className="hover:text-yellow-400 transition-colors">
                +918169891400
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl text-center"
          >
            <div className="inline-block p-3 bg-yellow-100 rounded-lg mb-4">
              <Mail className="text-yellow-400" size={24} />
            </div>
            <h3 className="font-semibold text-black mb-2">Email</h3>
            <p className="text-gray-600">
              <a
                href="mailto:hello@drived.com"
                className="hover:text-yellow-400 transition-colors"
              >
                https://drived-bice.vercel.app/
              </a>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-8 rounded-xl text-center"
          >
            <div className="inline-block p-3 bg-yellow-100 rounded-lg mb-4">
              <MapPin className="text-yellow-400" size={24} />
            </div>
            <h3 className="font-semibold text-black mb-2">Location</h3>
            <p className="text-gray-600">
               <a
                href=" https://www.google.com/maps/place/DrivEd+-+Personal+Driving+Instructor+and+Consultant/@18.5695258,73.7343022,14z/data=!4m10!1m2!2m1!1sdrive+ed!3m6!1s0x3bc2b951d55d1a6d:0xb7d29bf28c263cda!8m2!3d18.5695258!4d73.7703511!15sCghkcml2ZSBlZFoKIghkcml2ZSBlZJIBDmRyaXZpbmdfc2Nob29s4AEA!16s%2Fg%2F11rhq33n9w?entry=ttu&g_ep=EgoyMDI2MDUzMS4wIKXMDSoASAFQAw%3D%3D"
                className="hover:text-yellow-400 transition-colors"
              >
                Click to load google maps
              </a>
            </p>
            

          </motion.div>
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-gray-50 p-8 rounded-xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8"
            >
              <div className="text-5xl mb-4">✓</div>
              <h3 className="text-2xl font-bold text-black mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-600">
                We&apos;ll get back to you within 24 hours.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none transition-colors"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-black mb-2">
                    Experience Level *
                  </label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none transition-colors"
                  >
                    <option value="">Select level</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Preferred Timing *
                </label>
                <select
                  name="timing"
                  value={formData.timing}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none transition-colors"
                >
                  <option value="">Select timing</option>
                  <option value="morning">Morning (6 AM - 12 PM)</option>
                  <option value="afternoon">Afternoon (12 PM - 5 PM)</option>
                  <option value="evening">Evening (5 PM - 9 PM)</option>
                  <option value="weekend">Weekends</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-black mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-yellow-400 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your driving goals..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-yellow-400 text-black py-4 rounded-lg font-semibold hover:bg-yellow-500 transition-all hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
