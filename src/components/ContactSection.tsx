import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+254 748 134 486",
    href: "tel:+254748134486"
  },
  {
    icon: Mail,
    label: "Email",
    value: "sales@kesltd.co.ke",
    href: "mailto:sales@kesltd.co.ke"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
    href: "#"
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Mon - Fri: 8:00 AM - 6:00 PM",
    href: "#"
  }
];

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-accent-gold mx-auto"></div>
          <p className="max-w-2xl mx-auto text-lg text-white/90">
            Ready to start your next engineering project? Contact us for 
            professional consultation and innovative solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center space-y-4"
            >
              <div className="mx-auto w-16 h-16 bg-accent-gold/20 rounded-full flex items-center justify-center">
                <item.icon className="w-8 h-8 text-accent-gold" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-accent-gold">{item.label}</h3>
                {item.href && item.href !== "#" ? (
                  <a 
                    href={item.href}
                    className="block text-white/90 hover:text-accent-gold transition-colors duration-300"
                  >
                    {item.value}
                  </a>
                ) : (
                  <p className="text-white/90">{item.value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Get Free Quote Form */}
        <motion.div
          id="quote-form"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-lg p-8"
        >
          <h3 className="text-2xl font-bold text-accent-gold mb-6 text-center">
            Get Your Free Quote
          </h3>
          <form className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name *"
                required
                className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-gold"
              />
              <input
                type="email"
                placeholder="Email Address *"
                required
                className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-gold"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone Number *"
                required
                className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-gold"
              />
              <select
                className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 focus:outline-none focus:ring-2 focus:ring-accent-gold"
                required
              >
                <option value="">Service Type *</option>
                <option value="power-systems">Power Systems</option>
                <option value="automation">Industrial Automation</option>
                <option value="infrastructure">Infrastructure Development</option>
                <option value="security">Security Solutions</option>
                <option value="cctv">CCTV Installation</option>
                <option value="residential">Residential Projects</option>
                <option value="other">Other</option>
              </select>
            </div>
            <textarea
              placeholder="Project Details *"
              required
              rows={4}
              className="w-full px-4 py-3 rounded-md bg-white/90 text-gray-900 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-accent-gold resize-none"
            ></textarea>
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full text-lg py-4"
            >
              Submit Quote Request
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}