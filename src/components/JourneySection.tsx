import { motion } from 'framer-motion';
import { Milestone } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const timeline = [
  {
    period: '2008-2018',
    title: 'Foundation & Specialization',
    description: 'Started in import business focusing on woodworking machinery and plywood raw materials',
    color: 'bg-cyan-medium',
  },
  {
    period: '2018-2024',
    title: 'Evolution to E-Commerce',
    description: 'Adapted to rapid e-commerce growth, expanding to multi-category sourcing',
    color: 'bg-purple-medium',
  },
  {
    period: '2024+',
    title: 'Global Trade Partnership',
    description: 'Established Global Imports Nagpur as a dedicated company for comprehensive trade solutions',
    color: 'bg-blue-medium',
  },
];

const JourneySection = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute top-20 right-20 w-64 h-64 bg-purple-light/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-light/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], scale: [1, 0.9, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-purple-light/30 text-purple-medium text-sm font-medium mb-4">
            Our Story
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text-secondary">Our Journey</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From specialized expertise to global trade partnership
          </p>
        </ScrollReveal>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <motion.div 
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-medium via-purple-medium to-blue-medium"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              style={{ originY: 0 }}
            />

            {timeline.map((item, index) => (
              <ScrollReveal 
                key={index}
                direction={index % 2 === 0 ? 'left' : 'right'}
                delay={index * 200}
              >
                <div
                  className={`relative flex items-center mb-12 last:mb-0 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Timeline dot */}
                  <motion.div 
                    className="absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-white border-4 border-cyan-medium -translate-x-1/2 z-10 shadow-lg"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                  />

                  {/* Content */}
                  <div className={`ml-20 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div 
                      className="glass-card p-6 group"
                      whileHover={{ 
                        scale: 1.03, 
                        boxShadow: '0 20px 40px -15px rgba(0, 150, 180, 0.2)' 
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span 
                          className={`px-3 py-1 rounded-full text-white text-xs font-medium ${item.color}`}
                          whileHover={{ scale: 1.1 }}
                        >
                          {item.period}
                        </motion.span>
                        <Milestone className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:gradient-text transition-all">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default JourneySection;
