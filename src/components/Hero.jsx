
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Brain } from 'lucide-react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    // You would typically send this to your backend
    setEmail('');
    // Show some feedback to the user
    alert('Thanks for your interest! We\'ll be in touch soon.');
  };

  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Create Intelligent</span>
                <span className="block gradient-text">Educational Content</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                CourseGPT helps educators and content creators build engaging courses with AI-powered assistance. Generate ideas, structure content, and create interactive materials in minutes.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Link
                    to="/get-started"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-opacity-90 md:py-4 md:text-lg md:px-10"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link
                    to="/demo"
                    className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-primary bg-white border-primary hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                  >
                    See Demo
                  </Link>
                </div>
              </div>
              
              {/* Course Type Links */}
              <div className="mt-6">
                <p className="text-sm text-gray-500 mb-2">What type of course are you creating?</p>
                <div className="flex flex-wrap gap-2">
                  <Link 
                    to="/courses/academic" 
                    className="text-sm text-primary hover:text-primary-dark hover:underline"
                  >
                    Academic Course
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link 
                    to="/courses/corporate" 
                    className="text-sm text-primary hover:text-primary-dark hover:underline"
                  >
                    Corporate Training
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link 
                    to="/courses/tutorial" 
                    className="text-sm text-primary hover:text-primary-dark hover:underline"
                  >
                    Online Tutorial
                  </Link>
                  <span className="text-gray-300">•</span>
                  <Link 
                    to="/courses/workshop" 
                    className="text-sm text-primary hover:text-primary-dark hover:underline"
                  >
                    Workshop/Seminar
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="h-56 w-full bg-gradient-to-r from-purple-100 to-indigo-100 sm:h-72 lg:h-full flex items-center justify-center p-6">
          <div className="relative w-full max-w-md animate-float">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
              <div className="bg-gradient-to-r from-primary to-indigo-500 px-4 py-3 flex items-center">
                <Sparkles className="h-5 w-5 text-white mr-2" />
                <span className="text-white font-medium">AI Content Generator</span>
              </div>
              <div className="p-4">
                <div className="mb-3">
                  <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
                </div>
                <div className="mb-3 flex items-start">
                  <Brain className="h-5 w-5 text-primary mr-2 mt-1" />
                  <div className="flex-1">
                    <div className="h-3 bg-gray-200 rounded-full w-full mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded-full w-5/6"></div>
                  </div>
                </div>
                <div className="h-20 bg-gray-100 rounded-md flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Interactive Content Preview</span>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-100 w-48">
              <div className="h-3 bg-gray-200 rounded-full w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-200 rounded-full w-1/2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
