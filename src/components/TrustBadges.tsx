'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Globe, Truck } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import trustBg from '@/assets/trust-bg.jpg';

const badges = [
  {
    icon: Shield,
    title: '100% Secure',
    description: 'ISO 9001 certified with secure payment gateways',
    gradient: 'from-cyan-400 to-blue-500',
    bgColor: 'bg-cyan-50',
    iconColor: 'text-cyan-500',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Third-party inspections on all shipments',
    gradient: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    iconColor: 'text-purple-500',
  },
  {
    icon: Globe,
    title: 'Global Reach',
    description: 'Operating in 50+ countries worldwide',
    gradient: 'from-orange-400 to-pink-500',
    bgColor: 'bg-orange-50',
    iconColor: 'text-orange-500',
  },
  {
    icon: Truck,
    title: 'Fast Delivery',
    description: 'Average 15-20 days from order to delivery',
    gradient: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-teal-50',
    iconColor: 'text-teal-500',
  },
];

const TrustBadges = () => {
  return (
    <section className="py-8 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${trustBg})` }}
      />
      
      {/* Overlay for better contrast */}
      <div className="absolute inset-0 bg-white/30" />

      {/* Animated decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-10 left-20 w-32 h-32 bg-cyan-light/20 rounded-full blur-2xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-10 right-20 w-40 h-40 bg-purple-light/20 rounded-full blur-2xl"
          animate={{ scale: [1, 0.9, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {badges.map((badge, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center h-full cursor-default border border-white/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]"
                whileHover={{ 
                  y: -8, 
                  boxShadow: '0 20px 40px -10px rgba(0, 150, 180, 0.2)',
                  borderColor: 'rgba(0, 200, 220, 0.3)',
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${badge.gradient} flex items-center justify-center mx-auto mb-4 shadow-lg`}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <badge.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="font-bold text-foreground mb-2 text-lg">{badge.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{badge.description}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
