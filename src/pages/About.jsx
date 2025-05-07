
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Info, CheckCircle, Users, Award, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                About CourseGPT
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
                We're revolutionizing education by making it easier to create, share, and learn from high-quality courses.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
                <p className="mt-4 text-lg text-gray-500">
                  CourseGPT was founded with a simple but powerful mission: to democratize education 
                  by giving teachers, trainers, and content creators the AI-powered tools they need 
                  to build engaging educational experiences without technical barriers.
                </p>
                <p className="mt-4 text-lg text-gray-500">
                  We believe that knowledge should be accessible, and that technology should enable 
                  educators, not complicate their work. That's why we've created a platform that makes 
                  course creation intuitive, efficient, and even enjoyable.
                </p>
              </div>
              <div className="mt-10 lg:mt-0 flex justify-center">
                <div className="bg-gradient-to-r from-purple-100 to-indigo-100 rounded-xl p-8">
                  <Sparkles className="h-16 w-16 text-primary mb-4" />
                  <h3 className="text-xl font-medium text-gray-900">Empowering Educators</h3>
                  <p className="mt-2 text-gray-600">
                    By removing technical barriers, we enable educators to focus on what they do best: teaching.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
                These core principles guide everything we do at CourseGPT.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="p-2 bg-primary bg-opacity-10 rounded-md inline-block">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Quality Education</h3>
                <p className="mt-2 text-gray-500">We believe in the power of well-designed courses to transform lives.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="p-2 bg-primary bg-opacity-10 rounded-md inline-block">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Inclusive Design</h3>
                <p className="mt-2 text-gray-500">Our platform is built to be accessible to educators of all technical abilities.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="p-2 bg-primary bg-opacity-10 rounded-md inline-block">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mt-4 text-xl font-medium text-gray-900">Constant Innovation</h3>
                <p className="mt-2 text-gray-500">We continuously improve our AI to deliver the best course creation tools.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Team</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
                We're a diverse team of educators, engineers, and designers passionate about transforming education.
              </p>
            </div>
            <div className="mt-12 space-y-4">
              <p className="text-center text-gray-500">
                Our team brings together expertise from educational technology, artificial intelligence, and instructional design
                to create tools that truly serve the needs of modern educators and learners.
              </p>
              <p className="text-center text-gray-500">
                We're always looking for talented individuals who share our passion for education and technology.
                Check our careers page to join us on our mission.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
