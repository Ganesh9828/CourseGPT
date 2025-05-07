
import React from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Video, Monitor, Share2, Lightbulb, Check } from 'lucide-react';

const OnlineTutorial = () => {
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
                  Online Tutorials
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl">
                  Create engaging skill-building tutorials that make learning accessible to everyone.
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
                      <Video className="h-16 w-16 text-primary" />
                    </div>
                    <h3 className="text-lg font-medium text-center">Knowledge Sharing & Skill Building</h3>
                    <ul className="mt-4 space-y-3">
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Step-by-step tutorial creation</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Video integration tools</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Interactive practice exercises</span>
                      </li>
                      <li className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5" />
                        <span>Progress checkpoints</span>
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
                Features for Online Tutorials
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Tools designed to make knowledge sharing easy and effective
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Monitor className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Screencast Integration</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Easily incorporate screen recordings with annotations for software and digital skills tutorials.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Practice Labs</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Create interactive practice environments where learners can apply new skills in real-time.
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary bg-opacity-10">
                  <Share2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-6 text-lg font-medium text-gray-900">Multi-platform Publishing</h3>
                <p className="mt-2 text-base text-gray-500 text-center">
                  Share your tutorials across various platforms including web, mobile, and learning management systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Templates Section */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Online Tutorial Templates</h2>
              <p className="mt-4 text-lg text-gray-500">
                Ready-to-use templates for popular tutorial formats
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Software Tutorial</CardTitle>
                  <CardDescription>Step-by-step application training</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Perfect for teaching software applications with screen recordings, annotations, and practice exercises.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Software Tutorial')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>DIY & Crafts</CardTitle>
                  <CardDescription>Visual demonstration format</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Showcase creative techniques with detailed visuals, materials lists, and follow-along instructions.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('DIY Tutorial')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Language Learning</CardTitle>
                  <CardDescription>Interactive vocabulary and conversation</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>Build language skills through vocabulary drills, pronunciation guides, and conversational practice.</p>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    onClick={() => handleTemplateClick('Language Learning')}
                  >
                    Use Template
                  </Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-10 text-center">
              <Link to="/templates">
                <Button variant="outline">
                  View All Tutorial Templates
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Creator Stories */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Creator Stories</h2>
              <p className="mt-4 text-lg text-gray-500">
                How content creators are building successful tutorial series with CourseGPT
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>"Doubled my YouTube subscribers"</CardTitle>
                  <CardDescription>Jason Lee, Tech Tutor</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "Since using CourseGPT to structure and plan my coding tutorials, I've seen my YouTube channel grow from 
                    5,000 to over 50,000 subscribers. The quality and consistency of my content improved dramatically."
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>"Created a profitable course business"</CardTitle>
                  <CardDescription>Emma Wilson, Creative Skills Educator</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    "CourseGPT helped me transform my hobby into a full-time career. I built a series of digital art tutorials 
                    that now generate a six-figure income through my online learning platform."
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
              <span className="block">Ready to create engaging tutorials?</span>
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

export default OnlineTutorial;
