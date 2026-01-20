import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const faqs = [
  {
    question: 'What MOQ do you require?',
    answer: 'We work with flexible MOQs depending on the product category. For most products, we can start with quantities as low as 100-500 units. For specialized or custom products, MOQs may be higher. Contact us to discuss your specific requirements.',
  },
  {
    question: 'Which e-commerce platforms do you support?',
    answer: 'We support all major e-commerce platforms including Amazon (USA, India, UK, EU), eBay, Walmart Marketplace, Etsy, Shopify, and most international marketplaces. We specialize in Amazon FBA prep and compliance.',
  },
  {
    question: 'How do you ensure quality?',
    answer: 'We implement a comprehensive 3-stage quality control process: pre-production inspection, during-production checks, and pre-shipment final inspection. We partner with certified third-party inspection agencies and provide detailed quality reports.',
  },
  {
    question: 'What shipping options are available?',
    answer: 'We offer multiple shipping options: sea freight (20-35 days), air freight (5-10 days), and express courier (3-5 days). We recommend the best option based on your budget, timeline, and product specifications.',
  },
  {
    question: 'Do you handle customs clearance?',
    answer: 'Yes, we provide complete customs clearance services in India. Our team has deep expertise in Indian import regulations, documentation, and duty optimization. We handle all paperwork and ensure smooth clearance.',
  },
  {
    question: 'Do you offer private labeling and white labeling?',
    answer: 'Absolutely! We specialize in private label and white label sourcing. We help with product customization, logo placement, custom packaging, and brand registration support for e-commerce platforms.',
  },
  {
    question: 'What is your sourcing capability?',
    answer: 'We source from China, Vietnam, Thailand, Indonesia, and other Asian manufacturing hubs. Our network includes 500+ verified suppliers across electronics, textiles, machinery, consumer goods, and more.',
  },
  {
    question: 'How long does the entire process take?',
    answer: 'Typical timeline is 45-60 days from order placement to delivery in India. This includes production (15-30 days), shipping (20-35 days for sea freight), and customs clearance (3-5 days). Rush orders can be completed faster.',
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="section-padding relative overflow-hidden bg-muted/20">
      {/* Background */}
      <motion.div 
        className="absolute top-0 right-1/4 w-80 h-80 bg-cyan-light/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-light/10 rounded-full blur-3xl"
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-light/30 text-cyan-dark text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Frequently Asked Questions</span>
          </h2>
        </ScrollReveal>

        {/* FAQ Grid */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 50}>
              <motion.div
                className="glass-card overflow-hidden"
                whileHover={{ scale: 1.01 }}
              >
                <motion.button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  whileHover={{ backgroundColor: 'hsl(190 65% 80% / 0.1)' }}
                >
                  <div className="flex items-center gap-3">
                    <motion.div
                      animate={{ rotate: openIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <HelpCircle className="w-5 h-5 text-cyan-medium flex-shrink-0" />
                    </motion.div>
                    <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                  </div>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                  </motion.div>
                </motion.button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p className="px-5 pb-5 pl-12 text-muted-foreground">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
