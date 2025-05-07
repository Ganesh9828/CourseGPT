
import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Mic, Users, Clock, Calendar, Check } from 'lucide-react';

const WorkshopSeminar = () => {
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
                  Workshops & Seminars
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                  Design interactive learning sessions that engage participants and deliver focused learning experiences.
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
                      <Mic className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-center">Interactive Learning Sessions</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Facilitation guides & materials</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Group activities & exercises</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Session timing & scheduling</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Participation tracking</span>
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
                Features for Workshop & Seminar Creation
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Tools designed for interactive, facilitator-led learning experiences
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Group Activities</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Design collaborative exercises that foster group discussion and active participation.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Session Planning</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create detailed agendas with precise timing to keep your workshop on track and maximize productivity.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Follow-up Resources</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Provide participants with post-workshop materials to reinforce learning and encourage implementation.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Workshop & Seminar Templates</h2>
              <p className="mt-4 text-lg text-gray-500">
                Ready-to-use templates for effective facilitated sessions
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Design Thinking Workshop</CardTitle>
                  <CardDescription>Problem-solving methodology</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Guide participants through the design thinking process with collaborative activities and case studies.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Design Thinking Workshop')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Strategic Planning</CardTitle>
                  <CardDescription>Team alignment and goal-setting</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Facilitate a productive planning session with structured exercises to establish vision, goals, and action plans.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Strategic Planning')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Professional Development</CardTitle>
                  <CardDescription>Skill-building workshop format</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Develop targeted professional skills through interactive exercises, role-playing, and practical applications.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Professional Development')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Link to="/templates">
                <Button variant="outline">
                  View All Workshop Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Facilitator Stories */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Facilitator Stories</h2>
              <p className="mt-4 text-lg text-gray-500">
                How workshop leaders are creating impactful sessions with CourseGPT
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>"My workshops are now fully booked"</CardTitle>
                  <CardDescription>David Mendez, Innovation Consultant</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Using CourseGPT to design my design thinking workshops has transformed my facilitation business. 
                    The quality of materials and exercises I can now offer has led to consistent 5-star reviews and a waitlist for my sessions."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>"Perfect balance of structure and flexibility"</CardTitle>
                  <CardDescription>Aisha Jones, Leadership Coach</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "CourseGPT helps me create workshop frameworks that provide the right amount of structure while 
                    allowing for the spontaneous moments that make facilitated sessions so valuable. My clients are impressed with the materials."
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
              <span className="block">Ready to design your next workshop?</span>
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

export default WorkshopSeminar;
