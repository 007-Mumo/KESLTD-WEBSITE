/**
 * Hero Section Component
 * 
 * The main hero/banner section of the website featuring:
 * - Full-screen background image with overlay
 * - Animated text content using Framer Motion
 * - Call-to-action buttons for user engagement
 * - Responsive design for all screen sizes
 * - Smooth scrolling navigation to other sections
 */

import { motion } from "framer-motion"; // For animations
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-engineering.jpg"; // Background image

export default function HeroSection() {
  /**
   * Scrolls to the contact section and focuses on the quote form
   * Includes delay to ensure smooth scrolling experience
   */
  const scrollToQuote = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      // Focus on quote form after main scroll completes
      setTimeout(() => {
        const quoteSection = document.getElementById("quote-form");
        if (quoteSection) {
          quoteSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 500);
    }
  };

  /**
   * Scrolls to the projects section to showcase company work
   */
  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // Main Hero Section - Full viewport height with background image
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-section">
      
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern engineering infrastructure" 
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 gradient-hero"></div>
      </div>
      
      {/* Hero Content - Positioned above background */}
      <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4 sm:px-6">
        {/* Animated content container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }} // Start invisible and moved down
          animate={{ opacity: 1, y: 0 }}   // Fade in and move to position
          transition={{ duration: 0.8 }}   // Animation duration
          className="space-y-6"
        >
          {/* Main Heading - Responsive font sizes */}
          <div className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight">
            <span className="text-gold">ENGINEERING</span>
            <br />
            <span className="text-white">EXCELLENCE</span>
          </div>
          
          {/* Subheading/Description - Responsive text */}
          <div className="text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed">
            Driving innovation and infrastructure development through 
            cutting-edge engineering solutions, automation systems, 
            and sustainable technology implementations.
          </div>
          
          {/* Call-to-Action Buttons - Responsive layout */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            {/* Primary CTA - Explore Projects */}
            <Button 
              variant="hero" 
              size="lg" 
              className="text-lg px-12 py-4 w-full sm:w-auto"
              onClick={scrollToProjects}
            >
              Explore Projects
            </Button>
            {/* Secondary CTA - Get Quote */}
            <Button 
              variant="outline_gold" 
              size="lg" 
              className="text-lg px-12 py-4 w-full sm:w-auto"
              onClick={scrollToQuote}
            >
              Get Free Quote
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}