
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PlayCircle, Download, GraduationCap, ArrowRight } from 'lucide-react';

const Demo = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('educator');

  const handlePlayDemo = (demoType) => {
    toast({
      title: "Demo Started",
      description: `${demoType} demo is now playing.`,
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
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">See CourseGPT in Action</span>
                <span className="block text-primary">Experience the Future of Course Creation</span>
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Watch how CourseGPT transforms educational content creation and helps educators deliver engaging learning experiences.
              </p>
              <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
                <div className="rounded-md shadow">
                  <Button 
                    onClick={() => handlePlayDemo('Featured')} 
                    size="lg" 
                    className="w-full flex items-center justify-center"
                  >
                    <PlayCircle className="mr-2 h-5 w-5" />
                    Play Featured Demo
                  </Button>
                </div>
                <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                  <Link to="/get-started">
                    <Button variant="outline" size="lg" className="w-full flex items-center justify-center">
                      Try It Yourself
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Videos Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Choose Your Demo Experience</h2>
              <p className="mt-4 text-lg text-gray-500">
                Select the demo that best matches your educational context
              </p>
            </div>

            <div className="mt-12">
              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="educator">For Educators</TabsTrigger>
                  <TabsTrigger value="student">For Students</TabsTrigger>
                </TabsList>
                
                <TabsContent value="educator" className="space-y-4">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Course Structure Generation</CardTitle>
                        <CardDescription>See how to create a full course outline in minutes</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                          <PlayCircle className="h-16 w-16 text-primary opacity-70" />
                        </div>
                        <p className="text-sm text-gray-500">Duration: 4:32</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => handlePlayDemo('Course Structure')}>
                          Watch Demo
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Interactive Content Creation</CardTitle>
                        <CardDescription>Build engaging quizzes and activities</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                          <PlayCircle className="h-16 w-16 text-primary opacity-70" />
                        </div>
                        <p className="text-sm text-gray-500">Duration: 3:45</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => handlePlayDemo('Interactive Content')}>
                          Watch Demo
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>AI-Assisted Grading</CardTitle>
                        <CardDescription>Streamline assessment and feedback</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                          <PlayCircle className="h-16 w-16 text-primary opacity-70" />
                        </div>
                        <p className="text-sm text-gray-500">Duration: 5:21</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => handlePlayDemo('AI Grading')}>
                          Watch Demo
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="student" className="space-y-4">
                  <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    <Card>
                      <CardHeader>
                        <CardTitle>Personalized Learning</CardTitle>
                        <CardDescription>Adaptive content that fits your learning style</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                          <PlayCircle className="h-16 w-16 text-primary opacity-70" />
                        </div>
                        <p className="text-sm text-gray-500">Duration: 3:18</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => handlePlayDemo('Personalized Learning')}>
                          Watch Demo
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Interactive Exercises</CardTitle>
                        <CardDescription>Engage with content through various activities</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                          <PlayCircle className="h-16 w-16 text-primary opacity-70" />
                        </div>
                        <p className="text-sm text-gray-500">Duration: 4:05</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => handlePlayDemo('Interactive Exercises')}>
                          Watch Demo
                        </Button>
                      </CardFooter>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Progress Tracking</CardTitle>
                        <CardDescription>Monitor your learning journey</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="aspect-video bg-gray-200 rounded-md flex items-center justify-center mb-4">
                          <PlayCircle className="h-16 w-16 text-primary opacity-70" />
                        </div>
                        <p className="text-sm text-gray-500">Duration: 2:47</p>
                      </CardContent>
                      <CardFooter>
                        <Button className="w-full" onClick={() => handlePlayDemo('Progress Tracking')}>
                          Watch Demo
                        </Button>
                      </CardFooter>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
        
        {/* Download Resources Section */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Demo Resources</h2>
              <p className="mt-4 text-lg text-gray-500">
                Download additional materials to learn more about CourseGPT
              </p>
            </div>
            
            <div className="mt-10 grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Product Brochure</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Comprehensive overview of CourseGPT features and benefits</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Case Studies</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Real-world examples of how educators are using CourseGPT</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download PDF
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Demo Files</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Sample course files to try in your own environment</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    <Download className="mr-2 h-4 w-4" /> Download ZIP
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span className="block">Ready to transform your courses?</span>
              <span className="block text-primary">Get started with CourseGPT today.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Link
                  to="/get-started"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90"
                >
                  Get started
                  <ArrowRight className="ml-2 -mr-1 h-5 w-5" />
                </Link>
              </div>
              <div className="ml-3 inline-flex rounded-md shadow">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white hover:bg-gray-50"
                >
                  Contact Sales
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

export default Demo;
