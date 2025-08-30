"use client"

import { useState } from 'react';
import { Menu, X, Code, Zap, Users, Mail } from 'lucide-react';
import { Typography } from '@/components/ui/Typography';
import { colors } from '@/lib/design-tokens';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Services', href: '#services', icon: Code },
    { label: 'About', href: '#about', icon: Users },
    { label: 'Work', href: '#work', icon: Zap },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <>
      {/* Fixed navbar container */}
      <nav className="
        /* Layout & Position */
        fixed top-4 left-1/2 transform -translate-x-1/2 z-50
        
        /* Size & Spacing */
        w-[95%] max-w-6xl
        px-4 py-3
        md:px-6 md:py-4
        
        /* Glass effect using your color palette */
        bg-neutral-50/70 backdrop-blur-md
        border border-neutral-400/30
        rounded-2xl
        
        /* Shadow & Effects */
        shadow-lg shadow-neutral-900/5
        
        /* Responsive behavior */
        mx-auto
      ">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="
              w-8 h-8 
              bg-gradient-to-br from-primary-500 to-primary-700
              rounded-lg
              flex items-center justify-center
            ">
              <Code className="w-4 h-4 text-neutral-50" />
            </div>
            <Typography 
              as="span" 
              className="
                text-lg font-bold
                bg-gradient-to-r from-neutral-900 to-neutral-700
                bg-clip-text text-transparent
                md:text-xl
                font-heading
              "
            >
              WebDev Pro
            </Typography>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  /* Layout */
                  flex items-center space-x-2
                  
                  /* Spacing */
                  px-4 py-2
                  
                  /* Typography using your design tokens */
                  text-sm font-medium text-neutral-700
                  
                  /* Effects */
                  rounded-lg
                  transition-all duration-200
                  hover:bg-neutral-100/50
                  hover:text-primary-600
                  hover:backdrop-blur-sm
                "
              >
                <item.icon className="w-4 h-4" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <button className="
              /* Layout */
              inline-flex items-center space-x-2
              
              /* Spacing */
              px-6 py-2.5
              
              /* Typography */
              text-sm font-semibold text-neutral-50
              
              /* Background & Effects using your primary colors */
              bg-gradient-to-r from-primary-500 to-primary-600
              hover:from-primary-600 hover:to-primary-700
              rounded-lg
              shadow-md shadow-primary-600/25
              hover:shadow-lg hover:shadow-primary-600/30
              transition-all duration-200
              
              /* Focus state */
              focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
            ">
              <Zap className="w-4 h-4" />
              <span>Get Started</span>
            </button>
          </div>

          {/* Mobile hamburger button */}
          <button
            onClick={toggleMenu}
            className="
              /* Layout */
              md:hidden flex items-center justify-center
              
              /* Size */
              w-10 h-10
              
              /* Background & Effects using your neutral palette */
              bg-neutral-100/50 hover:bg-neutral-200/60
              backdrop-blur-sm
              rounded-lg
              border border-neutral-400/30
              
              /* Transitions */
              transition-all duration-200
              
              /* Focus state */
              focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
            "
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? (
              <X className="w-5 h-5 text-neutral-700" />
            ) : (
              <Menu className="w-5 h-5 text-neutral-700" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="
              fixed inset-0 z-40
              bg-neutral-900/20 backdrop-blur-sm
              md:hidden
            "
            onClick={toggleMenu}
          />
          
          {/* Mobile Menu */}
          <div className="
            /* Position */
            fixed top-20 left-1/2 transform -translate-x-1/2 z-50
            
            /* Size */
            w-[90%] max-w-sm
            
            /* Background & Effects using your surface colors */
            bg-surface-light/90 backdrop-blur-lg
            border border-neutral-400/30
            rounded-2xl
            shadow-xl shadow-neutral-900/10
            
            /* Spacing */
            py-6
            
            /* Animation */
            animate-fade-in
            
            /* Only show on mobile */
            md:hidden
          ">
            {/* Mobile Navigation Links */}
            <div className="px-4 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={toggleMenu}
                  className="
                    /* Layout */
                    flex items-center space-x-3
                    
                    /* Spacing */
                    px-4 py-3
                    
                    /* Typography using your color tokens */
                    text-base font-medium text-neutral-700
                    
                    /* Effects */
                    rounded-xl
                    transition-all duration-200
                    hover:bg-primary-50
                    hover:text-primary-600
                    
                    /* Animation delay for stagger effect */
                  "
                  style={{
                    animationDelay: `${index * 50}ms`
                  }}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            
            {/* Mobile CTA */}
            <div className="px-4 mt-6 pt-6 border-t border-neutral-400/30">
              <button 
                onClick={toggleMenu}
                className="
                  /* Layout */
                  w-full flex items-center justify-center space-x-2
                  
                  /* Spacing */
                  px-6 py-3
                  
                  /* Typography */
                  text-base font-semibold text-neutral-50
                  
                  /* Background & Effects using your primary palette */
                  bg-gradient-to-r from-primary-500 to-primary-600
                  hover:from-primary-600 hover:to-primary-700
                  rounded-xl
                  shadow-lg shadow-primary-600/25
                  
                  /* Transitions */
                  transition-all duration-200
                  
                  /* Focus state */
                  focus:outline-none focus:ring-2 focus:ring-primary-400 focus:ring-offset-2
                "
              >
                <Zap className="w-5 h-5" />
                <span>Get Started</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Demo content to show navbar behavior */}
      <div className="pt-24">
        <section className="min-h-screen bg-gradient-to-br from-primary-50 via-neutral-50 to-primary-100 flex items-center justify-center">
          <div className="text-center space-y-4 max-w-4xl px-6">
            <Typography 
              variant="h1" 
              as="h1" 
              className="text-gradient"
            >
              Professional Web Development
            </Typography>
            <Typography 
              variant="body" 
              className="text-neutral-600 max-w-2xl mx-auto"
            >
              Building modern, responsive websites that drive results for your business using cutting-edge technology and design principles.
            </Typography>
            <div className="pt-8">
              <button className="
                px-8 py-4
                bg-gradient-to-r from-primary-500 to-primary-600
                hover:from-primary-600 hover:to-primary-700
                text-neutral-50 font-semibold rounded-lg
                shadow-lg shadow-primary-600/25
                transition-all duration-200
              ">
                View Our Work
              </button>
            </div>
          </div>
        </section>
        
        <section id="services" className="min-h-screen bg-neutral-50 flex items-center justify-center">
          <Typography variant="h2" as="h2" className="text-neutral-900">
            Services Section
          </Typography>
        </section>
        
        <section id="about" className="min-h-screen bg-surface-light flex items-center justify-center">
          <Typography variant="h2" as="h2" className="text-neutral-900">
            About Section
          </Typography>
        </section>
        
        <section id="work" className="min-h-screen bg-neutral-50 flex items-center justify-center">
          <Typography variant="h2" as="h2" className="text-neutral-900">
            Work Section
          </Typography>
        </section>
        
        <section id="contact" className="min-h-screen bg-primary-50 flex items-center justify-center">
          <Typography variant="h2" as="h2" className="text-primary-700">
            Contact Section
          </Typography>
        </section>
      </div>
    </>
  );
};

export default Navigation;