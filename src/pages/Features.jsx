
import { useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import {
  ArrowRight,
  MessageSquare,
  Search,
  PieChart,
  FileText,
  BarChart3,
  BookOpen,
  ListChecks,
  Sparkles,
  Zap,
  CreditCard,
  Calendar,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Features = () => {
  const { toast } = useToast();
  
  useEffect(() => {
    toast({
      title: "Features Page",
      description: "Explore all the powerful features of CourseGPT.",
      duration: 3000,
    });
  }, []);
  
  // Feature categories
  const featureCategories = [
    {
      title: "Content Creation",
      description: "Create engaging educational content in minutes with AI assistance",
      features: [
        { name: "AI-Powered Content Generation", description: "Generate educational content with a single prompt", icon: Sparkles },
        { name: "Multi-Format Support", description: "Create text, quizzes, assessments, and interactive elements", icon: FileText },
        { name: "Content Templates", description: "Choose from dozens of educational templates", icon: BookOpen },
        { name: "Quiz Generator", description: "Auto-generate quizzes from your content", icon: MessageSquare }
      ]
    },
    {
      title: "Course Organization",
      description: "Organize your course content with intuitive tools",
      features: [
        { name: "Drag-and-Drop Editor", description: "Easily organize and rearrange your course structure", icon: ListChecks },
        { name: "Learning Paths", description: "Create custom learning paths for different student needs", icon: ArrowRight },
        { name: "Progress Tracking", description: "Track course creation progress and student completion rates", icon: BarChart3 },
        { name: "Search & Filter", description: "Quickly find and manage course content", icon: Search }
      ]
    },
    {
      title: "Analytics & Insights",
      description: "Gain valuable insights about your course effectiveness",
      features: [
        { name: "Performance Dashboard", description: "Monitor course effectiveness and student engagement", icon: PieChart },
        { name: "Content Analytics", description: "Identify which content performs best with students", icon: BarChart3 },
        { name: "Time Management", description: "Track time spent on course creation and delivery", icon: Clock },
        { name: "Scheduling Tools", description: "Plan and schedule your course development timeline", icon: Calendar }
      ]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero section */}
        <section className="bg-gradient-to-r from-purple-50 to-indigo-50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Powerful Features for <span className="text-primary">Course Creators</span></h1>
              <p className="text-xl text-gray-600 mb-8">
                Everything you need to create, organize, and enhance your educational content
              </p>
              <Link to="/get-started" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90">
                Explore Features
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
        
        {/* Feature categories */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            {featureCategories.map((category, idx) => (
              <div key={idx} className={`mb-20 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''} md:flex items-center gap-10`}>
                <div className="md:w-1/2 mb-8 md:mb-0">
                  <h2 className="text-3xl font-bold mb-4">{category.title}</h2>
                  <p className="text-xl text-gray-600 mb-6">{category.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {category.features.map((feature, featureIdx) => (
                      <Card key={featureIdx} className="border border-gray-100 shadow-sm hover:shadow transition-shadow">
                        <CardContent className="p-4">
                          <div className="flex items-start space-x-3">
                            <div className="mt-1 flex-shrink-0">
                              <div className="h-10 w-10 rounded-full bg-primary-50 flex items-center justify-center">
                                <feature.icon className="h-5 w-5 text-primary" />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-lg font-semibold">{feature.name}</h3>
                              <p className="text-sm text-gray-500">{feature.description}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                <div className="md:w-1/2 bg-gray-100 rounded-lg p-6 h-80 flex items-center justify-center">
                  <div className="text-xl text-gray-400">
                    {category.title} Illustration
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* CTA section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to transform your course creation?</h2>
            <p className="text-xl mb-8">Join thousands of educators creating better courses with CourseGPT</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/get-started" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-primary transition-colors">
                Get Started
                <Zap className="ml-2 h-5 w-5" />
              </Link>
              <Link to="/pricing" className="inline-flex items-center justify-center px-6 py-3 border-2 border-white bg-white text-base font-medium rounded-md text-primary hover:bg-opacity-90 transition-colors">
                View Pricing
                <CreditCard className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Features;
