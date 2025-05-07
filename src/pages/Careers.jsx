
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Briefcase, MapPin, ArrowRight, Star, Users, Globe, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const Careers = () => {
  // Sample open positions
  const openPositions = [
    {
      id: 1,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA (Remote Option)',
      type: 'Full-time',
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'AI & Machine Learning',
      location: 'Boston, MA (Remote Option)',
      type: 'Full-time',
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
    },
    {
      id: 4,
      title: 'Content Marketing Specialist',
      department: 'Marketing',
      location: 'New York, NY (Remote Option)',
      type: 'Full-time',
    },
    {
      id: 5,
      title: 'Customer Success Manager',
      department: 'Customer Success',
      location: 'Remote',
      type: 'Full-time',
    },
  ];

  // Sample departments
  const departments = [
    {
      name: 'Engineering',
      icon: <Star className="h-8 w-8 text-primary" />,
      description: 'Build the technology that powers our AI-driven course creation platform.'
    },
    {
      name: 'AI & Machine Learning',
      icon: <Brain className="h-8 w-8 text-primary" />,
      description: 'Develop the AI models that make intelligent content generation possible.'
    },
    {
      name: 'Design',
      icon: <Palette className="h-8 w-8 text-primary" />,
      description: 'Create beautiful, intuitive interfaces that make course creation a joy.'
    },
    {
      name: 'Marketing',
      icon: <Globe className="h-8 w-8 text-primary" />,
      description: 'Share our story with the world and help educators discover our platform.'
    },
    {
      name: 'Customer Success',
      icon: <Heart className="h-8 w-8 text-primary" />,
      description: 'Support our users in creating amazing educational experiences.'
    },
  ];

  // Sample values
  const values = [
    {
      title: 'Innovation First',
      description: 'We push boundaries and embrace new technologies to solve complex problems.'
    },
    {
      title: 'User-Centered',
      description: "Everything we build starts with our users' needs and goals."
    },
    {
      title: 'Inclusive Excellence',
      description: 'We value diverse perspectives and create an environment where everyone can thrive.'
    },
    {
      title: 'Continuous Learning',
      description: "We're committed to growth, both for our platform and ourselves."
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-b from-purple-50 to-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Join Our Team
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
                Help us transform education by building AI-powered tools for course creators around the world.
              </p>
            </div>
          </div>
        </div>

        {/* Why Join Us */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl font-extrabold text-gray-900">Why Join CourseGPT?</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
                We're building the future of education technology with a mission-driven team.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="bg-gray-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Impactful Work</h3>
                <p className="mt-2 text-gray-500">Your work will directly help educators create better learning experiences.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Star className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Cutting-Edge Tech</h3>
                <p className="mt-2 text-gray-500">Work with the latest in AI and educational technology.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Heart className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Flexible Work</h3>
                <p className="mt-2 text-gray-500">Remote-friendly culture with focus on work-life balance.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <Globe className="h-8 w-8 text-primary mb-4" />
                <h3 className="text-lg font-medium text-gray-900">Global Reach</h3>
                <p className="mt-2 text-gray-500">Help educators worldwide create better learning experiences.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Our Values */}
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Our Values</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
                These principles guide how we work and build our team.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-extrabold text-gray-900">Open Positions</h2>
              <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-500">
                Join us in our mission to transform education with AI.
              </p>
            </div>

            <div className="space-y-4">
              {openPositions.map((position) => (
                <div key={position.id} className="border rounded-lg p-6 hover:border-primary transition-colors">
                  <div className="sm:flex sm:justify-between sm:items-center">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{position.title}</h3>
                      <div className="mt-2 flex items-center text-sm text-gray-500">
                        <Briefcase className="h-4 w-4 mr-1" />
                        <span>{position.department}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{position.location}</span>
                        <span className="mx-2">•</span>
                        <span>{position.type}</span>
                      </div>
                    </div>
                    <div className="mt-4 sm:mt-0">
                      <Link
                        to={`/careers/${position.id}`}
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-opacity-90 transition-colors"
                      >
                        View Position
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">Don't see a position that fits your skills?</p>
              <Link
                to="/careers/general"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Submit a general application
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

// Add missing icons
const Brain = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
  </svg>
);

const Palette = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="13.5" cy="6.5" r=".5" />
    <circle cx="17.5" cy="10.5" r=".5" />
    <circle cx="8.5" cy="7.5" r=".5" />
    <circle cx="6.5" cy="12.5" r=".5" />
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
  </svg>
);

export default Careers;
