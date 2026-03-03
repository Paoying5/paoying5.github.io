import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LangProvider } from "@/contexts/LangContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import ProjectsPage from "@/pages/ProjectsPage";
import BlogPage from "@/pages/BlogPage";
import ResumePage from "@/pages/ResumePage";
import ContactPage from "@/pages/ContactPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <LangProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <HashRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
          </HashRouter>
        </TooltipProvider>
      </LangProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
