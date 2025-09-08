/**
 * Insights Section Component
 * 
 * Displays engineering blog posts and industry insights with:
 * - Grid layout of insight/blog cards
 * - Publication dates and reading time estimates
 * - Hover effects and smooth animations
 * - Responsive design for different screen sizes
 * - Call-to-action buttons for reading full articles
 */

import { motion } from "framer-motion"; // For scroll animations
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from "lucide-react"; // Icons for date and read more

/**
 * Insights data array - Contains blog post/article information
 * Each insight has: title, excerpt, publication date, and reading time
 */
const insights = [
  {
    title: "The Future of Renewable Energy in Africa",
    excerpt: "Exploring how renewable energy technologies are revolutionizing infrastructure development across the African continent.",
    date: "December 15, 2024",
    readTime: "5 min read"
  },
  {
    title: "Industrial Automation: Efficiency & Safety",
    excerpt: "How modern automation systems are transforming industrial operations while enhancing safety standards and productivity.",
    date: "December 10, 2024",
    readTime: "7 min read"
  },
  {
    title: "Smart Infrastructure for Sustainable Cities",
    excerpt: "The role of intelligent infrastructure in building sustainable urban environments for future generations.",
    date: "December 5, 2024",
    readTime: "6 min read"
  }
];

export default function InsightsSection() {
  return (
    // Insights Section - Light background for blog content
    <section id="insights" className="py-20 bg-secondary/30">
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
            Engineering Insights
          </h2>
          {/* Decorative gold accent line */}
          <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Stay informed with the latest trends, innovations, and best practices 
            in engineering and technology.
          </p>
        </motion.div>

        {/* Insights Grid - 3-column layout for blog posts */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Map through insights array to create blog post cards */}
          {insights.map((insight, index) => (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 30 }}                    // Start below and invisible
              whileInView={{ opacity: 1, y: 0 }}                 // Animate into view
              transition={{ duration: 0.6, delay: index * 0.1 }} // Staggered animation
              viewport={{ once: true }}                          // Only animate once
            >
              {/* Insight Card with hover effects and full height */}
              <Card className="card-professional group cursor-pointer h-full">
                <CardContent className="p-6 space-y-4 h-full flex flex-col">
                  
                  {/* Publication metadata - Date and reading time */}
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{insight.date}</span>
                    <span>•</span>
                    <span>{insight.readTime}</span>
                  </div>
                  
                  {/* Article Title with hover color change */}
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent-gold transition-colors duration-300">
                    {insight.title}
                  </h3>
                  
                  {/* Article Excerpt - Flexible height to fill space */}
                  <p className="text-muted-foreground leading-relaxed flex-grow">
                    {insight.excerpt}
                  </p>
                  
                  {/* Read More Button - Always at bottom of card */}
                  <Button variant="ghost" className="self-start p-0 text-accent-gold hover:text-accent-gold/80">
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />
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