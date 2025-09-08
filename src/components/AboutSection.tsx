/**
 * About Section Component
 * 
 * Displays company information and key statistics including:
 * - Company overview and mission
 * - Key statistics (years of experience, projects, satisfaction rate)
 * - Animated content that appears on scroll
 * - Professional layout with centered content
 */

import { motion } from "framer-motion"; // For scroll-triggered animations

export default function AboutSection() {
  return (
    // About Section - Uses semantic section tag with ID for navigation
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        {/* Animated container - Triggers when section comes into view */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}    // Start invisible and offset
          whileInView={{ opacity: 1, y: 0 }}  // Animate when in viewport
          transition={{ duration: 0.6 }}      // Animation duration
          viewport={{ once: true }}           // Only animate once
          className="text-center space-y-8"
        >
          {/* Section Header */}
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-primary">
              About Kamala Engineering
            </h2>
            {/* Decorative gold accent line */}
            <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          </div>
          
          {/* Company Description - Two paragraphs explaining services and mission */}
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Kamala Engineering Services LTD stands as a beacon of innovation in Kenya's 
              engineering landscape, delivering exceptional solutions that transform 
              industries and communities. With our commitment to excellence and 
              cutting-edge technology, we bridge the gap between vision and reality.
            </p>
            
            <p>
              Our expertise spans across power systems, industrial automation, 
              sustainable infrastructure, and security solutions. We pride ourselves 
              on delivering projects that not only meet current needs but anticipate 
              future challenges, ensuring long-term value for our clients.
            </p>
          </div>
          
          {/* Key Statistics Grid - Showcases company achievements */}
          <div className="grid md:grid-cols-3 gap-8 pt-12">
            {/* Years of Experience */}
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent-gold">15+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Years Experience
              </div>
            </div>
            {/* Projects Completed */}
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent-gold">200+</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Projects Completed
              </div>
            </div>
            {/* Client Satisfaction Rate */}
            <div className="text-center space-y-2">
              <div className="text-4xl font-bold text-accent-gold">99%</div>
              <div className="text-sm uppercase tracking-wider text-muted-foreground">
                Client Satisfaction
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}