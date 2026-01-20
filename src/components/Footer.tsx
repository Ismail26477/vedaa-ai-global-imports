import { Mail, MapPin, Phone, Linkedin, Twitter, ExternalLink, Globe } from 'lucide-react';
import globalLogo from '../assets/global-logo.png';

const footerLinks = {
  services: [
    { name: 'Global Sourcing', href: '#services' },
    { name: 'Quality Inspection', href: '#services' },
    { name: 'Shipping & Logistics', href: '#services' },
    { name: 'Custom Clearance', href: '#services' },
  ],
  company: [
    { name: 'About Us', href: '#about' },
    { name: 'Our Journey', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  support: [
    { name: 'FAQ', href: '#faq' },
    { name: 'How We Work', href: '#services' },
    { name: 'Product Categories', href: '#portfolio' },
    { name: 'Get Quote', href: '#contact' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Shipping Policy', href: '#' },
    { name: 'Refund Policy', href: '#' },
  ],
};

const teamMembers = [
  { name: 'Vimal', phone: '9823050721' },
  { name: 'Aakash', phone: '9011675477' },
  { name: 'Prithvi', phone: '8168619911' },
  { name: 'Sagar', phone: '8830783396' },
];

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-foreground text-white/80">
      {/* Background decorations */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-dark/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-purple-medium/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 py-16">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <img 
                src={globalLogo || "/placeholder.svg"} 
                alt="Global Imports" 
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-white">Global Imports</span>
            </a>
            <p className="text-white/60 mb-6 max-w-sm">
              Simplified Global Sourcing & Import Solutions. Connecting Indian businesses with trusted manufacturers worldwide since 2008.
            </p>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cyan-medium/50 transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cyan-medium/50 transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-cyan-medium/50 transition-colors"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-cyan-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-cyan-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-sm hover:text-cyan-light transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-sm">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-light" />
                <a href="mailto:globalimportsworldwide@gmail.com" className="hover:text-cyan-light transition-colors break-all">
                  globalimportsworldwide@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-light" />
                <span>Nagpur, Maharashtra, India</span>
              </li>
              <li className="flex items-start gap-2 text-sm">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-light" />
                <a href="tel:+919270109911" className="hover:text-cyan-light transition-colors">
                  +91 9270109911
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Team contacts */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-4">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={`tel:+91${member.phone}`}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-cyan-medium/20 transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan-light" />
                <span className="text-sm">{member.name}: +91 {member.phone}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} Global Imports Nagpur. All rights reserved. 16+ years of excellence in global trade.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
