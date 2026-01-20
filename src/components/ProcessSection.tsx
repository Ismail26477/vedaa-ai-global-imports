import { motion } from 'framer-motion';
import { Search, ShoppingCart, ClipboardCheck, Ship, FileCheck, Truck } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import qualityInspectionImage from '@/assets/quality-inspection.jpg';
import customsClearanceImage from '@/assets/customs-clearance.jpg';
import deliveryTruckImage from '@/assets/delivery-truck.jpg';

const steps = [
  {
    icon: Search,
    step: '01',
    title: 'Global Sourcing',
    description: 'Find the right manufacturers and suppliers worldwide',
    gradient: 'from-cyan-400 to-blue-500',
  },
  {
    icon: ShoppingCart,
    step: '02',
    title: 'End-to-End Procurement',
    description: 'Complete sourcing support from negotiation to delivery',
    gradient: 'from-blue-400 to-indigo-500',
  },
  {
    icon: ClipboardCheck,
    step: '03',
    title: 'Quality Inspection',
    description: 'Pre-production, during, and pre-shipment quality checks',
    gradient: 'from-indigo-400 to-purple-500',
  },
  {
    icon: Ship,
    step: '04',
    title: 'International Shipping',
    description: 'Sea freight, air freight, and express courier services',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: FileCheck,
    step: '05',
    title: 'Custom Clearance',
    description: 'Expert customs handling and regulatory compliance',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Truck,
    step: '06',
    title: 'Last Mile Delivery',
    description: 'Direct delivery to your doorstep across India',
    gradient: 'from-teal-400 to-cyan-500',
  },
];

const ProcessSection = () => {
  return (
    <section id="services" className="section-padding relative overflow-hidden bg-gradient-to-b from-muted/20 via-cyan-light/5 to-muted/20">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-48 h-48 bg-cyan-light/20 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-64 h-64 bg-purple-light/15 rounded-full blur-3xl"
          animate={{ scale: [1, 0.9, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-light/5 rounded-full blur-3xl"
        />
      </div>

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-light/30 text-cyan-dark text-sm font-medium mb-4">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">How We Work</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete end-to-end service flow for your import and sourcing needs
          </p>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {steps.map((item, index) => (
            <ScrollReveal key={index} direction="up" delay={index * 100}>
              <motion.div
                className="relative group h-full"
                whileHover={{ y: -8 }}
              >
                <motion.div 
                  className="h-full p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] relative overflow-hidden"
                  whileHover={{ 
                    boxShadow: '0 20px 40px -10px rgba(0, 150, 180, 0.2)',
                    borderColor: 'rgba(0, 200, 220, 0.3)',
                  }}
                >
                  {/* Step number background */}
                  <span className="absolute -top-2 -right-2 text-8xl font-bold text-cyan-100 select-none opacity-50">
                    {item.step}
                  </span>

                  <div className="relative z-10">
                    <motion.div 
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-5 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <item.icon className="w-7 h-7 text-white" />
                    </motion.div>

                    <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-cyan-dark transition-colors">{item.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

        {/* Process Images Gallery */}
        <ScrollReveal direction="up">
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div 
              className="relative rounded-2xl overflow-hidden h-64 group shadow-lg"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img 
                src={qualityInspectionImage} 
                alt="Quality inspection" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/90 via-cyan-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <ClipboardCheck className="w-5 h-5 text-cyan-300" />
                  <span className="text-sm font-medium text-cyan-300">Step 03</span>
                </div>
                <h4 className="text-lg font-bold text-white">Quality Inspection</h4>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-2xl overflow-hidden h-64 group shadow-lg"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img 
                src={customsClearanceImage} 
                alt="Customs clearance" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-purple-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <FileCheck className="w-5 h-5 text-purple-300" />
                  <span className="text-sm font-medium text-purple-300">Step 05</span>
                </div>
                <h4 className="text-lg font-bold text-white">Customs Clearance</h4>
              </div>
            </motion.div>

            <motion.div 
              className="relative rounded-2xl overflow-hidden h-64 group shadow-lg"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <img 
                src={deliveryTruckImage} 
                alt="Last mile delivery" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="flex items-center gap-2 mb-2">
                  <Truck className="w-5 h-5 text-blue-300" />
                  <span className="text-sm font-medium text-blue-300">Step 06</span>
                </div>
                <h4 className="text-lg font-bold text-white">Last Mile Delivery</h4>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default ProcessSection;