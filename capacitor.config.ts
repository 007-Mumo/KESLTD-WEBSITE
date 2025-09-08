/**
 * Capacitor Configuration File
 * 
 * Configures the Capacitor framework for mobile app deployment:
 * - App identification and metadata
 * - Development server configuration for hot reload
 * - Native mobile platform settings
 * - Splash screen customization
 * 
 * This enables the website to be packaged as a native mobile app
 * for Android and iOS platforms while maintaining web functionality.
 */

import { CapacitorConfig } from '@capacitor/cli';

/**
 * Main Capacitor Configuration
 * Sets up the app for mobile deployment with development server support
 */
const config: CapacitorConfig = {
  // Unique application identifier - required for app stores
  appId: 'app.lovable.4d2bd757b23547d989bbf551562f6387',
  
  // Application display name shown to users
  appName: 'kamala-engineering-showcase',
  
  // Build output directory containing the compiled web assets
  webDir: 'dist',
  
  // Development server configuration for live reload during development
  server: {
    // URL of the Lovable development server for hot reload
    url: 'https://4d2bd757-b235-47d9-89bb-f551562f6387.lovableproject.com?forceHideBadge=true',
    // Allow HTTP traffic (required for development)
    cleartext: true
  },
  
  // Native platform plugins configuration
  plugins: {
    // Splash screen configuration
    SplashScreen: {
      // Duration to show splash screen (in milliseconds)
      launchShowDuration: 2000,
      // Background color matching company brand (navy blue)
      backgroundColor: '#1e3a8a',
      // Hide loading spinner for cleaner appearance
      showSpinner: false
    }
  }
};

export default config;