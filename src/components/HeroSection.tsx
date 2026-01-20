'use client';

import React from "react"

import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Package, Ship, TrendingUp, Globe, Anchor, Container, Plane, MapPin } from "lucide-react";
import HeroMap from "./HeroMap";
import AnimatedStat from "./AnimatedStat";
import heroPortImage from "@/assets/hero-port.jpg";
import { useRef } from "react";

const stats = [
  { icon: Package, endValue: 500, suffix: "+", label: "Products Sourced" },
  { icon: Ship, endValue: 50, suffix: "+", label: "Countries Served" },
  { icon: TrendingUp, endValue: 98, suffix: "%", label: "Success Rate" },
];

// Floating icon component for parallax effect
const FloatingIcon = ({ 
  icon: Icon, 
  className, 
  delay = 0,
  duration = 4,
  floatRange = 15
}: { 
  icon: React.ElementType; 
  className: string; 
  delay?: number;
  duration?: number;
  floatRange?: number;
}) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ 
      opacity: [0.3, 0.6, 0.3],
      scale: 1,
      y: [-floatRange, floatRange, -floatRange],
      rotate: [-5, 5, -5]
    }}
    transition={{ 
      opacity: { duration: duration, repeat: Infinity, ease: "easeInOut", delay },
      scale: { duration: 0.5, delay },
      y: { duration: duration, repeat: Infinity, ease: "easeInOut", delay },
      rotate: { duration: duration * 1.5, repeat: Infinity, ease: "easeInOut", delay }
    }}
  >
    <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-light/30 to-purple-light/20 backdrop-blur-sm border border-white/10 shadow-lg">
      <Icon className="w-6 h-6 text-cyan-dark" />
    </div>
  </motion.div>
);

const HeroSection = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const mapY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const floatingElementsY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section 
      ref={containerRef}
      id="home" 
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0"
        style={{ y: backgroundY }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img 
            src={heroPortImage || "/placeholder.svg"} 
            alt="Global shipping port" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>
      </motion.div>

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-cyan-light/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-96 h-96 bg-purple-light/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 0.8, 1],
            x: [0, -60, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 left-1/3 w-64 h-64 bg-cyan-medium/15 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* Floating Icons with Parallax */}
      <motion.div 
        className="absolute inset-0 pointer-events-none"
        style={{ y: floatingElementsY }}
      >
        <FloatingIcon icon={Anchor} className="top-[15%] left-[5%]" delay={0} duration={5} floatRange={20} />
        <FloatingIcon icon={Container} className="top-[25%] right-[8%]" delay={0.5} duration={4} floatRange={15} />
        <FloatingIcon icon={Plane} className="top-[60%] left-[3%]" delay={1} duration={6} floatRange={25} />
        <FloatingIcon icon={Globe} className="bottom-[20%] right-[5%]" delay={1.5} duration={5} floatRange={18} />
        <FloatingIcon icon={MapPin} className="top-[10%] left-[30%]" delay={2} duration={4.5} floatRange={12} />
        <FloatingIcon icon={Ship} className="bottom-[30%] left-[8%]" delay={0.8} duration={5.5} floatRange={22} />
      </motion.div>

      {/* Animated particles/dots */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-medium/40 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Main Content with Parallax */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div 
            className="text-center lg:text-left"
            style={{ y: textY }}
          >
            <motion.div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-light/30 border border-cyan-medium/30 mb-6"
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            >
              <motion.span 
                className="w-2 h-2 rounded-full bg-cyan-dark"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              <span className="text-sm font-medium text-cyan-dark">Trusted by 500+ Businesses</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <motion.span 
                className="gradient-text inline-block"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Simplified Global
              </motion.span>
              <br />
              <motion.span 
                className="text-foreground inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                Sourcing & Import
              </motion.span>
              <br />
              <motion.span 
                className="text-foreground inline-block"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Solutions
              </motion.span>
            </motion.h1>

            <motion.p 
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Connect with trusted suppliers worldwide. We handle everything from sourcing to doorstep delivery with complete transparency and expert support.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary flex items-center justify-center gap-2 group relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%", skewX: "-15deg" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.5 }}
                />
                <span className="relative">Start Sourcing Today</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative" />
              </motion.a>
              <motion.a 
                href="#about" 
                className="btn-outline flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Play className="w-5 h-5" />
                </motion.div>
                Learn More
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.map((stat, index) => (
                <AnimatedStat
                  key={index}
                  icon={stat.icon}
                  endValue={stat.endValue}
                  suffix={stat.suffix}
                  label={stat.label}
                  duration={2 + index * 0.3}
                />
              ))}
            </motion.div>
          </motion.div>
          
          {/* Right Content - Map with Parallax */}
          <motion.div 
            className="relative hidden lg:block"
            style={{ y: mapY }}
          >
            <motion.div 
              className="relative aspect-square"
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            >
              <HeroMap />
              
              {/* Floating Cards with enhanced animations */}
              <motion.div 
                className="absolute -bottom-4 -left-4 glass-card p-4 rounded-xl"
                initial={{ opacity: 0, x: -50, y: 50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: [0, -8, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 0.8 },
                  x: { duration: 0.6, delay: 0.8 },
                  y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-light to-cyan-medium flex items-center justify-center"
                    animate={{ rotate: [0, 360] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <Globe className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.p 
                      className="text-2xl font-bold gradient-text"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      50+
                    </motion.p>
                    <p className="text-sm text-muted-foreground">Countries</p>
                  </div>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 glass-card p-4 rounded-xl"
                initial={{ opacity: 0, x: 50, y: -50 }}
                animate={{ 
                  opacity: 1, 
                  x: 0, 
                  y: [0, 8, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.6, delay: 1 },
                  x: { duration: 0.6, delay: 1 },
                  y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                whileHover={{ scale: 1.05, rotate: -2 }}
              >
                <div className="flex items-center gap-3">
                  <motion.div 
                    className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-light to-purple-dark flex items-center justify-center"
                    animate={{ 
                      boxShadow: [
                        "0 0 0 0 rgba(155, 135, 245, 0.4)",
                        "0 0 0 10px rgba(155, 135, 245, 0)",
                        "0 0 0 0 rgba(155, 135, 245, 0)"
                      ]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Package className="w-6 h-6 text-white" />
                  </motion.div>
                  <div>
                    <motion.p 
                      className="text-2xl font-bold gradient-text"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    >
                      10K+
                    </motion.p>
                    <p className="text-sm text-muted-foreground">Shipments</p>
                  </div>
                </div>
              </motion.div>

              {/* New floating element - Success indicator */}
              <motion.div 
                className="absolute top-1/2 -left-8 glass-card px-3 py-2 rounded-full"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ 
                  opacity: 1, 
                  scale: 1,
                  x: [0, -5, 0],
                }}
                transition={{ 
                  opacity: { duration: 0.5, delay: 1.2 },
                  scale: { duration: 0.5, delay: 1.2, type: "spring" },
                  x: { duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }
                }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="flex items-center gap-2">
                  <motion.div 
                    className="w-3 h-3 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs font-medium text-foreground">Live Tracking</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator with bounce animation */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 cursor-pointer"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest">Scroll</span>
          <motion.div 
            className="w-6 h-10 rounded-full border-2 border-cyan-medium/50 flex items-start justify-center p-2"
          >
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-cyan-medium"
              animate={{ y: [0, 12, 0], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
