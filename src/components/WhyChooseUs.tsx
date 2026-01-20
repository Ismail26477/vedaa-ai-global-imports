'use client';

import { motion } from 'framer-motion';
import { Zap, Users, Shield, DollarSign, FileText, ShoppingBag } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const features = [
  {
    icon: Zap,
    title: 'One-Stop Solution',
    description: 'From sourcing to delivery, we handle everything under one roof',
    gradient: 'from-cyan-400 to-teal-500',
    iconBg: 'bg-cyan-50',
  },
  {
    icon: Users,
    title: 'Trusted Supplier Network',
    description: 'Verified manufacturers across Asia with proven track records',
    gradient: 'from-blue-400 to-indigo-500',
    iconBg: 'bg-blue-50',
  },
  {
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Strong quality control systems with third-party inspections',
    gradient: 'from-teal-400 to-cyan-500',
    iconBg: 'bg-teal-50',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'No hidden costs - clear pricing from sourcing to doorstep',
    gradient: 'from-emerald-400 to-teal-500',
    iconBg: 'bg-emerald-50',
  },
  {
    icon: FileText,
    title: 'Customs Expertise',
    description: 'Deep knowledge of Indian & international trade regulations',
    gradient: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-cyan-50',
  },
  {
    icon: ShoppingBag,
    title: 'Amazon Specialization',
    description: 'Dedicated support for e-commerce and FBA sellers',
    gradient: 'from-blue-400 to-cyan-500',
    iconBg: 'bg-blue-50',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/20 via-cyan-light/5 to-transparent">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-1/4 right-10 w-64 h-64 bg-purple-light/10 rounded-full blur-3xl"
          animate={{ x: [0, -20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-10 w-48 h-48 bg-cyan-light/15 rounded-full blur-3xl"
          animate={{ x: [0, 20, 0], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-light/30 text-cyan-dark text-sm font-medium mb-4">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Why Choose Us</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Reduce risk, save time, and improve profitability with our expertise
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <motion.div
                className="group h-full"
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className="h-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)]"
                  whileHover={{ 
                    boxShadow: '0 20px 40px -10px rgba(0, 150, 180, 0.2)',
                    borderColor: 'rgba(0, 200, 220, 0.3)',
                  }}
                >
                <motion.div 
                  className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl ${feature.iconBg} flex items-center justify-center mb-3 md:mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <motion.div
                    className={`w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center shadow-lg`}
                    whileHover={{ rotate: 5 }}
                  >
                    <feature.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </motion.div>
                </motion.div>
                <h3 className="text-base md:text-lg font-bold text-foreground mb-2 group-hover:text-cyan-dark transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground text-xs md:text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
