/**
 * Main App Component
 * 
 * Root component that sets up the application with:
 * - React Query for server state management
 * - Toast notifications (Toaster and Sonner)
 * - Tooltip provider for UI components
 * - React Router for client-side routing
 * - Global providers and context setup
 */

// UI Components and Providers
import { Toaster } from "@/components/ui/toaster";         // Shadcn toast notifications
import { Toaster as Sonner } from "@/components/ui/sonner"; // Alternative toast system
import { TooltipProvider } from "@/components/ui/tooltip";  // Tooltip context provider

// React Query for data fetching and caching
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// React Router for navigation
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Page Components
import Index from "./pages/Index";       // Main landing page
import NotFound from "./pages/NotFound"; // 404 error page

/**
 * Query Client Configuration
 * Handles caching, background updates, and error retry logic
 */
const queryClient = new QueryClient();

/**
 * Main App Component
 * Sets up all providers and routing configuration
 */
const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* Toast notification systems - both types available */}
      <Toaster />
      <Sonner />
      
      {/* Client-side routing setup */}
      <BrowserRouter>
        <Routes>
          {/* Main landing page route */}
          <Route path="/" element={<Index />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          
          {/* 404 catch-all route - must be last */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
