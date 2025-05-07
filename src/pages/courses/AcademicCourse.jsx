
import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, GraduationCap, Book, FileText, Users, Check } from 'lucide-react';

const AcademicCourse = () => {
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
                  Academic Course Creation
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                  Build university and college credit courses that engage students and meet educational standards.
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
                      <GraduationCap className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-center">University & College Courses</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Aligned with academic standards</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Credit-worthy curriculum design</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Robust assessment frameworks</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Research integration tools</span>
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
                Features for Academic Course Creation
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Tools specifically designed for higher education environments
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Book className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Syllabus Generator</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create comprehensive syllabi that meet accreditation standards with just a few clicks.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Assignment Builder</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Design assignments that develop critical thinking and align with learning objectives.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Discussion Facilitator</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Generate thought-provoking discussion prompts and rubrics for meaningful engagement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Academic Course Templates</h2>
              <p className="mt-4 text-lg text-gray-500">
                Ready-to-use templates for different academic disciplines
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Introduction to Psychology</CardTitle>
                  <CardDescription>Undergraduate foundation course</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>A comprehensive template covering core psychological concepts, theories, and research methods.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Psychology')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Business Management</CardTitle>
                  <CardDescription>MBA-level course structure</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Business strategy, organizational behavior, and management principles for graduate-level education.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Business Management')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Computer Science Fundamentals</CardTitle>
                  <CardDescription>Technical curriculum with practical labs</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Programming concepts, algorithms, and data structures with integrated coding exercises and projects.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Computer Science')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Link to="/templates">
                <Button variant="outline">
                  View All Academic Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Success Stories</h2>
              <p className="mt-4 text-lg text-gray-500">
                How educators are transforming academic courses with CourseGPT
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>"Revolutionized my teaching approach"</CardTitle>
                  <CardDescription>Dr. Sarah Chen, Stanford University</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "CourseGPT helped me redesign my Introduction to Sociology course with more interactive elements. 
                    Student engagement increased by 40% and final grades improved significantly compared to previous semesters."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>"Saved countless hours of preparation"</CardTitle>
                  <CardDescription>Prof. Michael Johnson, NYU</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Creating a new graduate-level economics course used to take weeks. With CourseGPT, I developed a 
                    comprehensive curriculum in just days, complete with assessments and reading materials."
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
              <span className="block">Ready to create your academic course?</span>
              <span className="block text-indigo-100">Get started with CourseGPT today.</span>
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

export default AcademicCourse;
