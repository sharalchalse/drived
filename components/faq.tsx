'use client';

import { m } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Do I need to have a car to take lessons?',
    answer:
      'Yes, Our programs are tailored to teach you driving in your own car',
  },
  {
    question: 'How long does it take to become road test ready?',
    answer:
      'Most students finish the training within 30 days. The timeline depends on how much and how frequently student practices.',
  },
  {
    question: 'What if I have severe driving anxiety?',
    answer:
      'Anxiety is something we specialize in addressing! Our patient instructors work with you at your pace, using proven techniques to build confidence gradually.',
  },
  {
    question: 'What areas do you cover for driving lessons?',
    answer:
      'We operate across the Pune metropolitan area, covering urban streets, highways, suburban roads , and all types of driving scenarios.',
  },
  {
    question: 'Can I cancel my scheduled session?',
    answer:
      'Absolutely! We understand life happens. Let us know 12 hours in advance, and we will reschedule it. We are flexible.',
  },
];

// FAQPage structured data: lets Google understand these as Q&A and
// possibly show them directly in search results. Built from the same list
// as the visible FAQ so the two never go out of sync.
const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: { '@type': 'Answer', text: faq.answer },
  })),
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="py-16 md:py-24 bg-gray-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our programs and services
          </p>
        </m.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <m.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  className="w-full p-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-black text-left">{faq.question}</h3>
                  <ChevronDown
                    size={24}
                    aria-hidden="true"
                    className={`text-yellow-400 flex-shrink-0 transition-transform ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Every answer stays in the HTML (collapsed when closed) so
                    Google can read all of them, not just the open one. */}
                <m.div
                  id={`faq-answer-${index}`}
                  initial={false}
                  animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                  aria-hidden={!isOpen}
                >
                  <div className="border-t border-gray-100 px-6 py-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </m.div>
              </m.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
