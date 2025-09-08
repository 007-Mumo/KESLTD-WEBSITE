/**
 * Services Section Component
 * 
 * Displays the engineering services offered by the company with:
 * - Grid layout of service cards
 * - Animated icons and content
 * - Service descriptions with professional styling
 * - Responsive design for all devices
 * - Hover effects for interactive experience
 */

import { motion } from "framer-motion"; // For scroll animations
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Home, Building2, Cpu } from "lucide-react"; // Service icons

/**
 * Services data array - Contains all service information
 * Each service has: icon component, title, and description
 */
const services = [
  {
    icon: Camera, // CCTV & Security Systems icon
    title: "CCTV & Security Systems",
    description: "Advanced surveillance and security solutions with cutting-edge technology for comprehensive protection and monitoring."
  },
  {
    icon: Home, // Residential Solutions icon
    title: "Residential Solutions",
    description: "Tailored electrical and automation systems designed specifically for modern residential developments and smart homes."
  },
  {
    icon: Building2, // Industrial Engineering icon
    title: "Industrial Engineering",
    description: "Large-scale industrial projects including power distribution, automation systems, and infrastructure development."
  },
  {
    icon: Cpu, // Automation Systems icon
    title: "Automation Systems",
    description: "Intelligent automation solutions designed for maximum efficiency, reliability, and sustainable operations."
  }
];

export default function ServicesSection() {
  return (
    // Services Section - Clean background for service showcase
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}    // Start invisible and offset
          whileInView={{ opacity: 1, y: 0 }}  // Animate when in viewport
          transition={{ duration: 0.6 }}      // Animation duration
          viewport={{ once: true }}           // Only animate once
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Engineering Services
          </h2>
          {/* Decorative gold accent line */}
          <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Comprehensive engineering solutions tailored to meet diverse 
            industry needs and technological requirements.
          </p>
        </motion.div>

        {/* Services Grid - 4-column responsive layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Map through services array to create service cards */}
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}                    // Start below and invisible
              whileInView={{ opacity: 1, y: 0 }}                 // Animate into view
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true }}                          // Only animate once
            >
              {/* Service Card with centered content and hover effects */}
              <Card className="card-professional group text-center h-full">
                <CardContent className="p-8 space-y-6">
                  {/* Service Icon with background circle and hover effects */}
                  <div className="mx-auto w-16 h-16 bg-accent-gold/10 rounded-full flex items-center justify-center group-hover:bg-accent-gold/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-accent-gold" />
                  </div>
                  {/* Service Title */}
                  <h3 className="text-xl font-semibold text-primary">
                    {service.title}
                  </h3>
                  {/* Service Description */}
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}