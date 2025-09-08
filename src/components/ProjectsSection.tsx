/**
 * Projects Section Component
 * 
 * Showcases the company's featured engineering projects with:
 * - Grid layout of project cards
 * - Image hover effects and animations
 * - Project categorization
 * - Responsive design for different screen sizes
 * - Staggered animations for visual appeal
 */

import { motion } from "framer-motion"; // For animations
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Import project images
// If the file is named 'POWER_IMAGE.jpg' (no space), update the import:
import powerImage from "@/assets/POWER-IMAGE.jpg";

// If the file name is correct, add a TypeScript declaration file for images:
// Create a file named 'images.d.ts' in your 'src' or 'types' folder with the following content:
// declare module "*.jpg" {
//   const value: string;
//   export default value;
// }
import automationImage from "@/assets/project-automation.jpg";
import sustainableImage from "@/assets/RENEWABLE-ENERGY-IMAGE.jpg";
import residentialImage from "@/assets/RESIDENTIAL.jpg";

/**
 * Projects data array - Contains all project information
 * Each project has: title, description, image, and category
 */
const projects = [
  {
    title: "Industrial Power Upgrade",
    description: "Comprehensive power system installation and modernization for large-scale manufacturing facilities across Kenya.",
    image: powerImage,
    category: "Power Systems"
  },
  {
    title: "Smart Automation Solutions", 
    description: "Advanced automation systems designed to enhance efficiency, safety, and productivity in industrial operations.",
    image: automationImage,
    category: "Automation"
  },
  {
    title: "Sustainable Infrastructure",
    description: "Green energy solutions and sustainable infrastructure development for environmentally conscious growth.",
    image: sustainableImage,
    category: "Sustainability"
  },
  {
    title: "Residential Development Projects",
    description: "Complete electrical and infrastructure solutions for residential developments, ensuring safe and reliable power distribution.",
    image: residentialImage,
    category: "Residential"
  }
];

export default function ProjectsSection() {
  return (
    // Projects Section - Light background for contrast
    <section id="projects" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}    // Start invisible
          whileInView={{ opacity: 1, y: 0 }}  // Animate when visible
          transition={{ duration: 0.6 }}      // Animation timing
          viewport={{ once: true }}           // Only animate once
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            Featured Projects
          </h2>
          {/* Decorative accent line */}
          <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our portfolio of successful engineering projects that showcase 
            our expertise and commitment to excellence.
          </p>
        </motion.div>

        {/* Projects Grid - Responsive layout */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Map through projects array to create project cards */}
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}                    // Start below and invisible
              whileInView={{ opacity: 1, y: 0 }}                 // Animate into view
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation delay
              viewport={{ once: true }}                          // Only animate once
            >
              {/* Project Card with hover effects */}
              <Card className="card-professional group cursor-pointer">
                {/* Project Image Container */}
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* Category Badge overlay */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent-gold text-accent-gold-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>
                
                {/* Project Content */}
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-primary">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  {/* Call-to-action button */}
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}