
import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Briefcase, Target, BarChart, Award, Check } from 'lucide-react';

const CorporateTraining = () => {
  const { toast } = useToast();

  const handleTemplateClick = (templateName) => {
    toast({
      title: `${templateName} template selected`,
      description: "Template added to your dashboard",
      duration: 3000,
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:justify-between">
              <div className="md:w-1/2">
                <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                  Corporate Training Solutions
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                  Create professional development courses that drive results and improve workforce performance.
                </p>
                <div className="mt-5 sm:mt-8">
                  <Link to="/get-started">
                    <Button size="lg" className="px-8 py-4 text-lg">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="mt-10 md:mt-0 md:w-1/2">
                <div className="relative">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-indigo-400 rounded-lg opacity-75 blur"></div>
                  <div className="relative bg-white p-6 rounded-lg shadow">
                    <div className="flex items-center justify-center mb-6">
                      <Briefcase className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-center">Professional Development</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>ROI-focused training solutions</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Compliance-ready content</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Customizable skills assessments</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Progress tracking for managers</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Features for Corporate Training
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Tools designed to drive business outcomes and employee development
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Skill Gap Analysis</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Identify and address skill gaps with targeted training modules and assessments.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <BarChart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Performance Analytics</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Track employee progress and measure the impact of training on business outcomes.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Certification Paths</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create customized learning paths that lead to industry-recognized certifications.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Corporate Training Templates</h2>
              <p className="mt-4 text-lg text-gray-500">
                Ready-to-use templates for common business training needs
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Leadership Development</CardTitle>
                  <CardDescription>For emerging managers and executives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Build leadership skills including team management, strategic thinking, and effective communication.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Leadership Development')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Sales Training</CardTitle>
                  <CardDescription>Convert prospects into customers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive sales methodology training with role-playing scenarios and objection handling techniques.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Sales Training')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Compliance & Ethics</CardTitle>
                  <CardDescription>Regulatory and policy training</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Ensure organizational compliance with industry regulations and internal policies through interactive learning.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Compliance Training')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Link to="/templates">
                <Button variant="outline">
                  View All Corporate Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Case Studies</h2>
              <p className="mt-4 text-lg text-gray-500">
                How companies are improving employee performance with CourseGPT
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>"30% increase in sales performance"</CardTitle>
                  <CardDescription>TechCorp, Global Technology Company</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "We implemented CourseGPT for our global sales team's training and saw a 30% increase in close rates 
                    within the first quarter. The interactive scenarios and real-time feedback were game-changers for our team."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>"Streamlined compliance training"</CardTitle>
                  <CardDescription>FinanceFirst, Financial Services</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "CourseGPT helped us transform our regulatory compliance training from a dreaded annual requirement to 
                    an engaging learning experience. Completion rates went from 70% to 98% and comprehension scores improved dramatically."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to elevate your corporate training?</span>
              <span className="block text-indigo-100">Start with CourseGPT today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                >
                  Start Creating
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CorporateTraining;
