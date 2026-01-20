import { motion } from 'framer-motion';
import { Globe, Sparkles, Users, MapPin, Layers, ShoppingBag } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';
import warehouseImage from '@/assets/warehouse-operations.jpg';
import globalShippingImage from '@/assets/global-shipping.jpg';
import tradeBg from '@/assets/trade-bg.jpg';

const platforms = [
  { name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
  { name: 'eBay', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg' },
  { name: 'Walmart', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ca/Walmart_logo.svg' },
  { name: 'Etsy', logo: 'https://upload.wikimedia.org/wikipedia/commons/8/89/Etsy_logo.svg' },
  { name: 'Shopify', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Shopify_logo_2018.svg' },
  { name: 'Alibaba', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Alibaba-Logo.svg' },
  { name: 'AliExpress', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/2e/AliExpress_logo.svg' },
  { name: 'Flipkart', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Flipkart_logo.svg' },
];

const stats = [
  { icon: Users, value: '16+', label: 'Years in Global Trade' },
  { icon: Sparkles, value: 'Expert', label: 'Professional Management' },
  { icon: MapPin, value: 'Global', label: 'China & 50+ Countries' },
  { icon: Layers, value: 'Multi', label: 'Diverse Solutions' },
];

const AboutSection = () => {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decorations */}
      <motion.div 
        className="absolute top-0 right-0 w-96 h-96 bg-cyan-light/20 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-80 h-80 bg-purple-light/15 rounded-full blur-3xl"
        animate={{ scale: [1, 0.9, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-light/30 text-cyan-dark text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Your Trusted</span>
            <br />
            Global Trade Partner
          </h2>
        </ScrollReveal>

        {/* Mission Card */}
        <ScrollReveal direction="scale">
          <motion.div 
            className="glass-card p-8 md:p-12 mb-12 text-center max-w-4xl mx-auto"
            whileHover={{ scale: 1.02, boxShadow: '0 25px 50px -15px rgba(0, 150, 180, 0.2)' }}
          >
            <motion.div 
              className="inline-flex items-center justify-center w-16 h-16 rounded-2xl gradient-primary mb-6"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <Globe className="w-8 h-8 text-white" />
            </motion.div>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 gradient-text">
              Hassle-free Import & Global E-Commerce Sourcing
            </h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              We bridge the gap between Indian businesses and global manufacturers, making international trade simple and profitable.
            </p>
          </motion.div>
        </ScrollReveal>

        {/* Image Gallery Row */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <ScrollReveal direction="left">
            <motion.div 
              className="relative rounded-2xl overflow-hidden h-72 group"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={warehouseImage} 
                alt="Warehouse operations" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Modern Warehouse Facilities</h3>
                <p className="text-white/80 text-sm">State-of-the-art warehousing and logistics operations</p>
              </div>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal direction="right">
            <motion.div 
              className="relative rounded-2xl overflow-hidden h-72 group"
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src={globalShippingImage} 
                alt="Global shipping" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-2">Global Shipping Network</h3>
                <p className="text-white/80 text-sm">Air and sea freight to 50+ countries worldwide</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Cyan Card */}
          <ScrollReveal direction="left">
            <motion.div 
              className="glass-card p-8 border-l-4 border-cyan-medium group h-full"
              whileHover={{ x: 10, boxShadow: '0 0 40px -10px rgba(0, 200, 220, 0.4)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-cyan-light/50 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                >
                  <Globe className="w-6 h-6 text-cyan-dark" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">Global Supply Network</h3>
              </div>
              <ul className="space-y-3">
                {[
                  'Direct partnerships with verified manufacturers',
                  'Access to competitive pricing & exclusive products',
                  'Fast sourcing & production timelines',
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-medium mt-2" />
                    <span className="text-muted-foreground">{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>

          {/* Purple Card */}
          <ScrollReveal direction="right">
            <motion.div 
              className="glass-card p-8 border-l-4 border-purple-medium group h-full"
              whileHover={{ x: -10, boxShadow: '0 0 40px -10px rgba(150, 100, 220, 0.4)' }}
            >
              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  className="w-12 h-12 rounded-xl bg-purple-light/50 flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: -10 }}
                >
                  <Sparkles className="w-6 h-6 text-purple-medium" />
                </motion.div>
                <h3 className="text-xl font-bold text-foreground">Our Evolution</h3>
              </div>
              <ul className="space-y-3">
                {[
                  { label: 'Before:', text: 'Limited product categories' },
                  { label: 'Now:', text: 'Multi-category sourcing expertise' },
                  { label: 'Focus:', text: 'E-commerce & global marketplace sellers' },
                ].map((item, i) => (
                  <motion.li 
                    key={i} 
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <span className="text-sm font-medium text-purple-medium min-w-[60px]">{item.label}</span>
                    <span className="text-muted-foreground">{item.text}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </ScrollReveal>
        </div>

        {/* Stats Row with Background */}
        <div className="relative rounded-3xl overflow-hidden mb-16">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${tradeBg})` }}
          />
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" />
          
          <div className="relative z-10 py-12 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <ScrollReveal key={index} direction="up" delay={index * 100}>
                  <motion.div 
                    className="text-center p-8 bg-white/90 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.08)] cursor-default"
                    whileHover={{ 
                      y: -8, 
                      scale: 1.02,
                      boxShadow: '0 20px 40px -10px rgba(0, 150, 180, 0.2)',
                      borderColor: 'rgba(0, 200, 220, 0.3)',
                    }}
                  >
                    <motion.div 
                      className="w-14 h-14 mx-auto mb-4 rounded-xl bg-cyan-light/40 flex items-center justify-center"
                      whileHover={{ rotate: 360 }} 
                      transition={{ duration: 0.5 }}
                    >
                      <stat.icon className="w-7 h-7 text-cyan-dark" />
                    </motion.div>
                    <p className="text-2xl md:text-3xl font-bold gradient-text mb-1">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>

        {/* E-commerce Platforms with Scrolling Marquee */}
        <ScrollReveal direction="up" className="text-center">
          <h4 className="text-lg font-semibold text-foreground mb-8 flex items-center justify-center gap-2">
            <ShoppingBag className="w-5 h-5 text-cyan-medium" />
            E-Commerce Platforms We Support
          </h4>
          
          {/* Marquee Container */}
          <div className="relative overflow-hidden">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
            
            {/* Scrolling logos */}
            <motion.div 
              className="flex gap-12 items-center"
              animate={{ x: ['0%', '-50%'] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: 'linear',
              }}
            >
              {/* Double the logos for seamless loop */}
              {[...platforms, ...platforms].map((platform, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 px-6 py-4 bg-white/80 backdrop-blur-sm rounded-2xl border border-white/60 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.08)] cursor-default"
                  whileHover={{ 
                    scale: 1.1, 
                    boxShadow: '0 10px 30px -5px rgba(0, 150, 180, 0.2)',
                  }}
                >
                  <img 
                    src={platform.logo} 
                    alt={platform.name} 
                    className="h-8 w-auto object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
