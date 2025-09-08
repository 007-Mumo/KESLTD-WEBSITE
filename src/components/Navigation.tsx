/**
 * Navigation Component
 * 
 * This component handles the main navigation for the Kamala Engineering website.
 * Features:
 * - Responsive design with mobile hamburger menu
 * - Smooth scrolling to page sections
 * - Company logo and branding
 * - Call-to-action button for quotes
 * - Mobile-optimized touch targets
 */

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react"; // Icons for mobile menu toggle
import { useState } from "react";
import kesLogo from "@/assets/KESLTD LOGO.png"; // Company logo

export default function Navigation() {
  // State to control mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /**
   * Scrolls to a specific section of the page
   * Special handling for "quote" section which navigates to contact form
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId: string) => {
    if (sectionId === "quote") {
      // Special case: "quote" scrolls to contact section first
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
        // Then focus on the actual quote form with a delay
        setTimeout(() => {
          const quoteSection = document.getElementById("quote-form");
          if (quoteSection) {
            quoteSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 500);
      }
    } else {
      // Standard section scrolling
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Main Navigation Header - Fixed positioning for overlay effect */}
      <header className="absolute top-0 left-0 right-0 z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo and Company Branding Section */}
          <div className="flex items-center space-x-4">
            <img src={kesLogo} alt="KES LTD Logo" className="h-12 w-auto" />
            <div className="text-xl font-bold text-white">
              KAMALA ENGINEERING
              <div className="text-xs text-accent-gold font-medium tracking-wider">
                SERVICES LTD
              </div>
            </div>
          </div>
          
          {/* Desktop Navigation Menu - Hidden on mobile/tablet */}
          <nav className="hidden lg:flex space-x-8">
            <button onClick={() => scrollToSection("about")} className="nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("projects")} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection("services")} className="nav-link">
              Services
            </button>
            <button onClick={() => scrollToSection("insights")} className="nav-link">
              Insights
            </button>
            <button onClick={() => scrollToSection("contact")} className="nav-link">
              Contact
            </button>
          </nav>
          
          {/* Right Side Actions - CTA Button and Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Call-to-Action Button - Hidden on mobile */}
            <Button variant="hero" size="lg" onClick={() => scrollToSection("quote")} className="hidden sm:block">
              Get Free Quote
            </Button>
            
            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-white hover:text-accent-gold transition-colors"
            >
              {/* Toggle between hamburger and X icon based on menu state */}
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown - Conditionally rendered */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-primary/95 backdrop-blur-sm border-t border-white/10">
            <nav className="max-w-7xl mx-auto px-6 py-4 space-y-4">
              {/* Mobile navigation links - Full width buttons for easy touch */}
              <button 
                onClick={() => scrollToSection("about")} 
                className="block nav-link text-left w-full"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection("projects")} 
                className="block nav-link text-left w-full"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection("services")} 
                className="block nav-link text-left w-full"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection("insights")} 
                className="block nav-link text-left w-full"
              >
                Insights
              </button>
              <button 
                onClick={() => scrollToSection("contact")} 
                className="block nav-link text-left w-full"
              >
                Contact
              </button>
              {/* Mobile CTA Button - Only shown on very small screens */}
              <Button 
                variant="hero" 
                size="lg" 
                onClick={() => scrollToSection("quote")}
                className="w-full sm:hidden"
              >
                Get Free Quote
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}