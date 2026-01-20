'use client';

import { motion } from 'framer-motion';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const clients = [
  { initials: 'TV', name: 'TechVision Solutions', gradient: 'from-cyan-400 to-blue-500' },
  { initials: 'CM', name: 'Creative Minds Agency', gradient: 'from-blue-400 to-indigo-500' },
  { initials: 'GV', name: 'Growth Ventures Ltd', gradient: 'from-violet-400 to-purple-500' },
  { initials: 'ER', name: 'Electronics Retail Co', gradient: 'from-purple-400 to-pink-500' },
  { initials: 'FF', name: 'Fashion Forward Inc', gradient: 'from-pink-400 to-rose-500' },
  { initials: 'BC', name: 'Beauty & Care Pro', gradient: 'from-fuchsia-400 to-purple-500' },
  { initials: 'SE', name: 'Sports Equipment Ltd', gradient: 'from-teal-400 to-cyan-500' },
  { initials: 'HE', name: 'Home Essentials Hub', gradient: 'from-orange-400 to-amber-500' },
];

const ClientsSection = () => {
  return (
    <section className="py-12 relative overflow-hidden bg-gradient-to-b from-muted/20 to-transparent">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-cyan-light/10 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-48 h-48 bg-purple-light/10 rounded-full blur-3xl"
          animate={{ scale: [1, 0.9, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
            <span className="gradient-text">Trusted by Industry Leaders</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Join hundreds of companies that have transformed their supply chain
          </p>
        </ScrollReveal>

        {/* Client logos */}
        <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 50}>
              <motion.div
                className="group flex flex-col items-center cursor-default"
                whileHover={{ y: -5 }}
              >
                <motion.div
                  className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${client.gradient} flex items-center justify-center shadow-lg`}
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 3,
                    boxShadow: '0 20px 40px -10px rgba(0, 150, 180, 0.35)' 
                  }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <span className="text-white font-bold text-xl">{client.initials}</span>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
