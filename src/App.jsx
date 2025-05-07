
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from 'react';
import { AuthProvider } from "./contexts/AuthContext";
import connectDB from './lib/db';
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import CreateCourse from "./pages/CreateCourse";
import CourseDetail from "./pages/CourseDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import GetStarted from "./pages/GetStarted";
import Demo from "./pages/Demo";
import AcademicCourse from "./pages/courses/AcademicCourse";
import CorporateTraining from "./pages/courses/CorporateTraining";
import OnlineTutorial from "./pages/courses/OnlineTutorial";
import WorkshopSeminar from "./pages/courses/WorkshopSeminar";
import ContactSupport from "./pages/ContactSupport";
import Templates from "./pages/Templates";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Careers from "./pages/Careers";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

const queryClient = new QueryClient();

const App = () => {
  // Initialize our mock database when the app loads
  useEffect(() => {
    connectDB();
    console.log("Mock database initialized");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/create-course" element={<CreateCourse />} />
              <Route path="/course/:courseId" element={<CourseDetail />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/get-started" element={<GetStarted />} />
              <Route path="/demo" element={<Demo />} />
              <Route path="/courses/academic" element={<AcademicCourse />} />
              <Route path="/courses/corporate" element={<CorporateTraining />} />
              <Route path="/courses/tutorial" element={<OnlineTutorial />} />
              <Route path="/courses/workshop" element={<WorkshopSeminar />} />
              <Route path="/contact" element={<ContactSupport />} />
              <Route path="/templates" element={<Templates />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<BlogPost />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
