import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: 'Vikram Patel',
    company: 'Electronics Retail Ltd',
    role: 'Procurement Manager',
    content: 'Global Imports transformed our supply chain. Their quality control and transparent pricing saved us 30% on procurement costs.',
    rating: 5,
  },
  {
    name: 'Anjali Singh',
    company: 'Amazon FBA Seller',
    role: 'Business Owner',
    content: 'Perfect partner for scaling on Amazon USA. Their FBA expertise and end-to-end support is unmatched.',
    rating: 5,
  },
  {
    name: 'Rohit Kapoor',
    company: 'Wholesale Distributor',
    role: 'Operations Head',
    content: '16 years of experience shows in their work. Every shipment arrives on time with impeccable quality.',
    rating: 5,
  },
  {
    name: 'Priya Nair',
    company: 'D2C Fashion Brand',
    role: 'Founder',
    content: 'Best decision for our private label sourcing. They understood our brand requirements perfectly.',
    rating: 5,
  },
  {
    name: 'Deepak Joshi',
    company: 'Home & Kitchen Retail',
    role: 'CEO',
    content: 'Reduced procurement costs by 35% and improved product quality. Highly recommended for serious importers.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    company: 'Tech Accessories Co',
    role: 'Supply Chain Manager',
    content: 'Exceptional service quality. Their customs expertise helped us avoid countless delays.',
    rating: 5,
  },
  {
    name: 'Sandeep Rao',
    company: 'Sports Equipment Import',
    role: 'Operations Director',
    content: 'Game-changer for our business. Professional team with deep industry knowledge.',
    rating: 5,
  },
  {
    name: 'Meera Sharma',
    company: 'Beauty & Cosmetics Ltd',
    role: 'Procurement Head',
    content: 'Outstanding logistics partner. They handle complex regulatory requirements effortlessly.',
    rating: 5,
  },
  {
    name: 'Arun Verma',
    company: 'Electronics Distributor',
    role: 'Business Manager',
    content: 'Most transparent supplier we have worked with. No hidden costs, no surprises.',
    rating: 5,
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const itemsPerView = 3;
  const maxIndex = Math.ceil(testimonials.length / itemsPerView) - 1;

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const visibleTestimonials = testimonials.slice(
    currentIndex * itemsPerView,
    currentIndex * itemsPerView + itemsPerView
  );

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute top-1/3 left-0 w-96 h-96 bg-cyan-light/15 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/3 right-0 w-80 h-80 bg-purple-light/15 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-light/30 text-cyan-dark text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">What Our Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Trusted by importers, e-commerce sellers, and brands worldwide
          </p>
        </ScrollReveal>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <motion.button
            onClick={handlePrev}
            className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'hsl(190 65% 80% / 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronLeft className="w-6 h-6 text-foreground" />
          </motion.button>
          <motion.button
            onClick={handleNext}
            className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full glass-card flex items-center justify-center"
            whileHover={{ scale: 1.1, backgroundColor: 'hsl(190 65% 80% / 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            <ChevronRight className="w-6 h-6 text-foreground" />
          </motion.button>

          {/* Testimonial cards */}
          <div className="grid md:grid-cols-3 gap-6 px-4">
            <AnimatePresence mode="wait">
              {visibleTestimonials.map((testimonial, index) => (
                <motion.div
                  key={`${currentIndex}-${index}`}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -30, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -10, boxShadow: '0 20px 40px -10px rgba(0, 150, 180, 0.2)' }}
                  className="glass-card p-6 relative"
                >
                  {/* Quote icon */}
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-cyan-light/50" />

                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                      >
                        <Star className="w-4 h-4 fill-orange-light text-orange-light" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <motion.div 
                      className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <span className="text-white font-medium text-sm">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </motion.div>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{testimonial.name}</p>
                      <p className="text-xs text-muted-foreground">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {[...Array(maxIndex + 1)].map((_, index) => (
              <motion.button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className="rounded-full transition-all duration-300"
                animate={{
                  width: index === currentIndex ? 32 : 8,
                  height: 8,
                  backgroundColor: index === currentIndex ? 'hsl(190 70% 60%)' : 'hsl(215 20% 65% / 0.3)',
                }}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
