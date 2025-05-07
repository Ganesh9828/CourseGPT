
import React from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@/components/ui/use-toast';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { MailIcon, PhoneIcon, MessageSquare, HelpCircle, BookOpen } from 'lucide-react';

const ContactSupport = () => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
      priority: 'normal',
    },
  });

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    toast({
      title: "Support request submitted",
      description: "We'll get back to you as soon as possible!",
      duration: 5000,
    });
    form.reset();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-primary/10 to-indigo-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                We're Here to Help
              </h1>
              <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
                Have questions about CourseGPT? Our support team is ready to assist you.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Options */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-medium">Email Support</CardTitle>
                  <MailIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Send us an email and we'll respond within 24 hours.</p>
                  <a href="mailto:support@coursegpt.com" className="text-primary font-medium hover:underline">
                    support@coursegpt.com
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-medium">Phone Support</CardTitle>
                  <PhoneIcon className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Available Monday to Friday, 9AM to 5PM EST.</p>
                  <a href="tel:+18005551234" className="text-primary font-medium hover:underline">
                    +1 (800) 555-1234
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-xl font-medium">Live Chat</CardTitle>
                  <MessageSquare className="h-8 w-8 text-primary" />
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Chat with our support team instantly.</p>
                  <Button variant="outline">
                    Start Chat
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Contact Form</h2>
              <p className="mt-4 text-lg text-gray-500">
                Fill out the form below and we'll get back to you as soon as possible
              </p>
            </div>
            
            <Card>
              <CardContent className="pt-6">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Your name" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Email</FormLabel>
                          <FormControl>
                            <Input type="email" placeholder="your.email@example.com" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="subject"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Subject</FormLabel>
                          <FormControl>
                            <Input placeholder="What is your inquiry about?" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="priority"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Priority</FormLabel>
                          <FormControl>
                            <RadioGroup
                              onValueChange={field.onChange}
                              defaultValue={field.value}
                              className="flex space-x-4"
                            >
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="low" />
                                </FormControl>
                                <FormLabel className="font-normal">Low</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="normal" />
                                </FormControl>
                                <FormLabel className="font-normal">Normal</FormLabel>
                              </FormItem>
                              <FormItem className="flex items-center space-x-2 space-y-0">
                                <FormControl>
                                  <RadioGroupItem value="high" />
                                </FormControl>
                                <FormLabel className="font-normal">High</FormLabel>
                              </FormItem>
                            </RadioGroup>
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea 
                              placeholder="Please describe your issue or question in detail" 
                              className="min-h-[150px]" 
                              {...field} 
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    
                    <Button type="submit" className="w-full">Submit Request</Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-extrabold text-gray-900">Frequently Asked Questions</h2>
              <p className="mt-4 text-lg text-gray-500">
                Find quick answers to common questions about CourseGPT
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                    How do I get started with CourseGPT?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    You can sign up for a free account and follow our simple onboarding process. Visit our 
                    <Link to="/get-started" className="text-primary hover:underline mx-1">
                      Get Started
                    </Link>
                    page for a step-by-step guide.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                    What types of courses can I create?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    CourseGPT supports various course types including academic courses, corporate training, online tutorials, and interactive workshops. Visit our course type pages for more information.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                    Is my content secure?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Yes, we take data security seriously. All your course content is encrypted and stored securely. We never share your content with third parties without your explicit permission.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <HelpCircle className="h-5 w-5 mr-2 text-primary" />
                    How much does CourseGPT cost?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    We offer various pricing plans to fit different needs. Check our 
                    <Link to="/pricing" className="text-primary hover:underline mx-1">
                      Pricing
                    </Link>
                    page for details on our free tier and premium options.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-10">
              <Link to="/demo" className="inline-flex items-center text-primary hover:underline">
                <BookOpen className="mr-2 h-5 w-5" />
                View all FAQs in our Knowledge Base
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactSupport;
