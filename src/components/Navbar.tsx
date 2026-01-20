'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import globalLogo from '../assets/global-logo.png'

const navLinks = [
  { name: 'Home', href: '/', isRoute: true },
  { name: 'About', href: '/#about', isRoute: false },
  { name: 'Services', href: '/services', isRoute: true },
  { name: 'Portfolio', href: '/#portfolio', isRoute: false },
  { name: 'Testimonials', href: '/#testimonials', isRoute: false },
  { name: 'Contact', href: '/#contact', isRoute: false },
]

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        isScrolled ? 'glass-strong shadow-medium' : 'bg-transparent'
      }`}
    >
      {/* FIXED HEIGHT HEADER */}
      <div className="h-18 flex items-center">
        <div className="container-custom px-0 w-full">
          <div className="flex items-center justify-between">

            {/* LOGO (NO SIZE CHANGE) */}
            <Link to="/" className="flex items-center gap-0">
              <img
                src={globalLogo}
                alt="Global Imports"
                className="w-28 h-16 object-contain"
              />
              <span className="text-xl font-bold gradient-text whitespace-nowrap">
                Global Imports
              </span>
            </Link>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) =>
                link.isRoute ? (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-cyan-dark transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-medium to-blue-medium transition-all duration-300 group-hover:w-full" />
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-sm font-medium text-foreground/80 hover:text-cyan-dark transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-medium to-blue-medium transition-all duration-300 group-hover:w-full" />
                  </a>
                )
              )}
            </div>

            {/* CTA */}
            <div className="hidden lg:block">
              <a href="/#contact" className="btn-primary text-sm">
                Get Started
              </a>
            </div>

            {/* MOBILE BUTTON */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-card px-6 py-4 animate-slide-down">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) =>
              link.isRoute ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-foreground/80 hover:text-cyan-dark"
                >
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-medium text-foreground/80 hover:text-cyan-dark"
                >
                  {link.name}
                </a>
              )
            )}
            <a href="/#contact" className="btn-primary text-center text-sm">
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
