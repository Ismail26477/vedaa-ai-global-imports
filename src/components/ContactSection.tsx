'use client';

import React from "react"

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Send, User, Building, MessageSquare } from 'lucide-react';
import { ScrollReveal } from '@/hooks/useScrollReveal';

const teamMembers = [
  { name: 'Vimal Gandhi', phone: '9823050721' },
  { name: 'Aakash Gandhi', phone: '9011675477' },
  { name: 'Prithvi Gandhi', phone: '8168619911' },
  { name: 'Sagar Gandhi', phone: '8830783396' },
];

const categories = [
  'Industrial Goods',
  'Electronics',
  'Machinery',
  'Raw Materials',
  'Consumer Products',
];

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    category: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message with form data
    const message = `Hello Global Imports!%0A%0AI am interested in your services.%0A%0AName: ${encodeURIComponent(formData.name)}%0AEmail: ${encodeURIComponent(formData.email)}%0ACompany: ${encodeURIComponent(formData.company)}%0AProduct Category: ${encodeURIComponent(formData.category)}%0A%0AMessage: ${encodeURIComponent(formData.message)}`;
    
    // WhatsApp link with number 8168619911
    const whatsappLink = `https://wa.me/918168619911?text=${message}`;
    
    // Open WhatsApp
    window.open(whatsappLink, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      category: '',
      message: '',
    });
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <motion.div 
        className="absolute top-1/4 left-0 w-96 h-96 bg-cyan-light/15 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-light/10 rounded-full blur-3xl"
        animate={{ scale: [1, 0.9, 1] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      <div className="container-custom relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up" className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-light/30 text-cyan-dark text-sm font-medium mb-4">
            Get in Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Send Us an Enquiry</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <motion.div 
              className="glass-card p-6 md:p-8 h-full"
              whileHover={{ boxShadow: '0 25px 50px -15px rgba(0, 150, 180, 0.15)' }}
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-6">Contact Information</h3>

              {/* Email */}
              <motion.div 
                className="flex items-start gap-3 md:gap-4 mb-6 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-light/50 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Mail className="w-5 h-5 md:w-6 md:h-6 text-cyan-dark" />
                </motion.div>
                <div className="min-w-0">
                  <p className="font-medium text-foreground text-sm md:text-base">Email</p>
                  <a href="mailto:globalimportsworldwide@gmail.com" className="text-muted-foreground group-hover:text-cyan-dark transition-colors text-xs md:text-sm break-words">
                    globalimportsworldwide@gmail.com
                  </a>
                </div>
              </motion.div>

              {/* Office Phone */}
              <motion.div 
                className="flex items-start gap-3 md:gap-4 mb-6 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-cyan-light/50 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                >
                  <Phone className="w-5 h-5 md:w-6 md:h-6 text-cyan-dark" />
                </motion.div>
                <div>
                  <p className="font-medium text-foreground text-sm md:text-base">Office Phone</p>
                  <a href="tel:+919270109911" className="text-muted-foreground group-hover:text-cyan-dark transition-colors text-xs md:text-sm">
                    +91 9270109911
                  </a>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div 
                className="flex items-start gap-3 md:gap-4 mb-6 group cursor-pointer"
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-purple-light/50 flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: -5 }}
                >
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-purple-medium" />
                </motion.div>
                <div>
                  <p className="font-medium text-foreground text-sm md:text-base">Location</p>
                  <p className="text-muted-foreground text-xs md:text-sm">Nagpur, Maharashtra, India</p>
                </div>
              </motion.div>

              {/* Team Members */}
              <div className="border-t border-border pt-6 mt-6">
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-medium" />
                  Contact Our Team
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {teamMembers.map((member, index) => (
                    <motion.a
                      key={index}
                      href={`tel:+91${member.phone}`}
                      className="flex items-center gap-2 p-3 rounded-lg bg-muted/50 group"
                      whileHover={{ 
                        scale: 1.02, 
                        backgroundColor: 'hsl(190 65% 80% / 0.3)' 
                      }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <motion.div 
                        className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center"
                        whileHover={{ scale: 1.1 }}
                      >
                        <span className="text-white text-xs font-medium">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </motion.div>
                      <div>
                        <p className="text-sm font-medium text-foreground">{member.name}</p>
                        <p className="text-xs text-muted-foreground group-hover:text-cyan-dark transition-colors">
                          +91 {member.phone}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal direction="right">
            <motion.form 
              onSubmit={handleSubmit} 
              className="glass-card p-6 md:p-8"
              whileHover={{ boxShadow: '0 25px 50px -15px rgba(0, 150, 180, 0.15)' }}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <div className="relative group">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-cyan-medium transition-colors" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white/50 focus:border-cyan-medium focus:ring-2 focus:ring-cyan-light/50 outline-none transition-all text-sm"
                      placeholder="Your name"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <div className="relative group">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-cyan-medium transition-colors" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white/50 focus:border-cyan-medium focus:ring-2 focus:ring-cyan-light/50 outline-none transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6">
                {/* Company */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company
                  </label>
                  <div className="relative group">
                    <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-cyan-medium transition-colors" />
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white/50 focus:border-cyan-medium focus:ring-2 focus:ring-cyan-light/50 outline-none transition-all text-sm"
                      placeholder="Your company"
                    />
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Product Category
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-white/50 focus:border-cyan-medium focus:ring-2 focus:ring-cyan-light/50 outline-none transition-all text-foreground text-sm"
                  >
                    <option value="">Select category</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <div className="relative group">
                  <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-muted-foreground group-focus-within:text-cyan-medium transition-colors" />
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-white/50 focus:border-cyan-medium focus:ring-2 focus:ring-cyan-light/50 outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements..."
                  />
                </div>
              </div>

              <motion.button
                type="submit"
                className="w-full btn-primary flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send className="w-5 h-5" />
                Send Enquiry
              </motion.button>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
