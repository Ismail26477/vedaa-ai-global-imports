'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Calendar, ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import heroPortImage from '@/assets/hero-port.jpg';

const CTASection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroPortImage || "/placeholder.svg"} 
          alt="Global shipping" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-dark/95 via-cyan-dark/90 to-purple-dark/85" />
      </div>
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <motion.div 
          className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
          animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </motion.div>

      <div className="container-custom relative z-10 text-center">
        <ScrollReveal direction="up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Supply Chain?
          </h2>
        </ScrollReveal>
        <ScrollReveal direction="up" delay={100}>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">
            Join Global Imports today and experience seamless, reliable logistics
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://wa.me/918168619911?text=Hello%20Global%20Imports!%20I%20am%20interested%20in%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-cyan-dark font-semibold rounded-xl shadow-medium"
              whileHover={{ scale: 1.05, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white text-white font-semibold rounded-xl"
              whileHover={{ scale: 1.05, y: -3, backgroundColor: 'rgba(255,255,255,0.1)' }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-5 h-5" />
              Schedule a Demo
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CTASection;
