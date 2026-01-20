import { motion } from 'framer-motion';
import { 
  Globe, 
  Package, 
  ClipboardCheck, 
  Ship, 
  FileCheck, 
  Truck,
  ArrowRight,
  CheckCircle,
  Sparkles,
  Shield,
  Clock,
  DollarSign
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import ScrollProgress from '@/components/ScrollProgress';
import ParticleBackground from '@/components/ParticleBackground';

const services = [
  {
    id: 'global-sourcing',
    icon: Globe,
    title: 'Global Sourcing & Import Solutions',
    shortDesc: 'Find the right manufacturers and suppliers worldwide',
    description: 'We connect you with verified manufacturers across China and 50+ countries. Our extensive network ensures you get the best products at competitive prices.',
    features: [
      'Access to 10,000+ verified manufacturers',
      'Multi-country sourcing capabilities',
      'Competitive price negotiations',
      'Product customization support',
      'Sample procurement and evaluation',
      'Supplier verification and auditing'
    ],
    benefits: ['Save 20-40% on procurement costs', 'Access exclusive products', 'Reduce supplier risks'],
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
  },
  {
    id: 'procurement',
    icon: Package,
    title: 'End-to-End Procurement',
    shortDesc: 'Complete sourcing support from negotiation to delivery',
    description: 'From initial inquiry to final delivery, we manage every aspect of your procurement process. Our team handles negotiations, documentation, and logistics seamlessly.',
    features: [
      'Complete order management',
      'Price and terms negotiation',
      'Payment facilitation and LC handling',
      'Production monitoring',
      'Documentation preparation',
      'Inventory management support'
    ],
    benefits: ['Single point of contact', 'Reduced administrative burden', 'Faster order processing'],
    color: 'from-purple-500 to-pink-500',
    bgColor: 'bg-purple-50',
  },
  {
    id: 'quality-inspection',
    icon: ClipboardCheck,
    title: 'Quality Inspection',
    shortDesc: 'Pre-production, during, and pre-shipment quality checks',
    description: 'Our rigorous quality control process ensures every product meets your standards. We conduct multiple inspection stages to guarantee quality.',
    features: [
      'Pre-production inspection',
      'During production inspection',
      'Pre-shipment final inspection',
      'Container loading supervision',
      'Defect rate analysis',
      'Third-party lab testing'
    ],
    benefits: ['Zero defect tolerance', 'Detailed inspection reports', 'Peace of mind guarantee'],
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  {
    id: 'shipping',
    icon: Ship,
    title: 'International Shipping',
    shortDesc: 'Sea freight, air freight, and express courier services',
    description: 'We offer flexible shipping solutions tailored to your timeline and budget. From sea freight for bulk orders to air express for urgent shipments.',
    features: [
      'Sea freight (FCL & LCL)',
      'Air freight services',
      'Express courier options',
      'Multi-modal transportation',
      'Real-time shipment tracking',
      'Insurance coverage options'
    ],
    benefits: ['Competitive freight rates', 'Flexible shipping options', 'On-time delivery guarantee'],
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
  },
  {
    id: 'customs',
    icon: FileCheck,
    title: 'Custom Clearance',
    shortDesc: 'Expert customs handling and regulatory compliance',
    description: 'Navigate complex customs regulations with ease. Our customs experts ensure smooth clearance and full compliance with Indian import laws.',
    features: [
      'Import/export documentation',
      'HS code classification',
      'Duty and tax calculation',
      'Regulatory compliance',
      'License and permit handling',
      'Anti-dumping duty management'
    ],
    benefits: ['Avoid customs delays', 'Minimize duty payments', 'Full regulatory compliance'],
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
  },
  {
    id: 'delivery',
    icon: Truck,
    title: 'Last Mile Delivery in India',
    shortDesc: 'Direct delivery to your doorstep across India',
    description: 'We complete the journey by delivering your goods directly to your warehouse or fulfillment center anywhere in India.',
    features: [
      'Pan-India delivery network',
      'Warehouse-to-warehouse service',
      'FBA prep and delivery',
      'Packaging and labeling',
      'Real-time tracking',
      'COD collection support'
    ],
    benefits: ['Seamless last-mile logistics', 'Direct FBA integration', 'Nationwide coverage'],
    color: 'from-red-500 to-rose-500',
    bgColor: 'bg-red-50',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Services = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden relative">
      <ParticleBackground />
      <ScrollProgress />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-6"
            >
              <Sparkles className="w-4 h-4 text-cyan-dark" />
              <span className="text-sm font-medium text-foreground/80">Comprehensive Trade Solutions</span>
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Our Services</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 mb-8 max-w-3xl mx-auto">
              From sourcing to doorstep delivery, we provide end-to-end import solutions 
              that simplify global trade for businesses of all sizes.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {[
                { icon: Shield, label: 'Verified Suppliers', value: '10,000+' },
                { icon: Globe, label: 'Countries', value: '50+' },
                { icon: Clock, label: 'Avg. Delivery', value: '15-20 Days' },
                { icon: DollarSign, label: 'Cost Savings', value: 'Up to 40%' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="glass-card p-4 hover-lift"
                >
                  <stat.icon className="w-6 h-6 text-cyan-dark mx-auto mb-2" />
                  <div className="text-xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-24"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                id={service.id}
                className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* Service Visual */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className={`w-full lg:w-1/2 ${service.bgColor} rounded-3xl p-8 relative overflow-hidden group`}
                >
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* Floating elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
                  <div className="absolute bottom-4 left-4 w-32 h-32 bg-white/20 rounded-full blur-3xl" />
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}
                    >
                      <service.icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                    <p className="text-foreground/70 mb-6">{service.description}</p>
                    
                    {/* Benefits pills */}
                    <div className="flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <span
                          key={benefit}
                          className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${service.color} text-white`}
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Service Features */}
                <div className="w-full lg:w-1/2">
                  <div className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-dark mb-4">
                    Service {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-3xl font-bold mb-4 gradient-text">{service.title}</h3>
                  <p className="text-lg text-foreground/70 mb-6">{service.shortDesc}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-start gap-3 group"
                      >
                        <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-foreground/80 group-hover:text-foreground transition-colors">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    whileHover={{ x: 5 }}
                    className="mt-8"
                  >
                    <Link
                      to="/#contact"
                      className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${service.color} text-white font-semibold shadow-lg hover:shadow-xl transition-shadow`}
                    >
                      Get Started <ArrowRight className="w-4 h-4" />
                    </Link>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIgMS44LTQgNC00czQgMS44IDQgNC0xLjggNC00IDQtNC0xLjgtNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30" />
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Simplify Your Imports?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
              Get in touch with our team and let us handle your global sourcing needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="https://wa.me/919011675422"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-white text-cyan-dark font-semibold shadow-lg hover:shadow-xl transition-shadow inline-flex items-center justify-center gap-2"
              >
                Chat on WhatsApp <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/#contact"
                  className="px-8 py-4 rounded-xl border-2 border-white text-white font-semibold hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Send Enquiry
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Services;
