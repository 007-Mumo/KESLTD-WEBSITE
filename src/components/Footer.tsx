/**
 * Footer Component
 * 
 * Simple footer section displaying:
 * - Company name and tagline
 * - Copyright information
 * - Responsive layout for mobile and desktop
 * - Professional styling consistent with brand
 */

export default function Footer() {
  return (
    // Footer Section - Light background with top border
    <footer className="bg-secondary py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6">
        {/* Footer Content - Responsive flex layout */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          
          {/* Company Branding - Left side on desktop, centered on mobile */}
          <div className="text-center md:text-left">
            <div className="font-bold text-primary">
              KAMALA ENGINEERING SERVICES LTD
            </div>
            <div className="text-sm text-muted-foreground">
              Engineering Excellence Since 2009
            </div>
          </div>
          
          {/* Copyright Information - Right side on desktop, centered on mobile */}
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Kamala Engineering Services LTD. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}