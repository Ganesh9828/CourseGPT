
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to CourseGPT</h1>
          <p className="text-xl mb-8">Create engaging online courses with the power of AI</p>
          <div className="flex justify-center">
            <a href="/get-started" className="bg-primary text-white px-6 py-3 rounded-md hover:bg-opacity-90 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
