
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, Clock, Book, FileText, Layout, Edit, Trash, Star, Plus } from 'lucide-react';
import { Link } from 'react-router-dom';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import AIAssistant from '@/components/AIAssistant';

const CourseDetail = () => {
  const { courseId } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  // Updated mock course data with consistent images
  const mockCourses = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning algorithms and applications.',
      category: 'Technology',
      progress: 75,
      lastEdited: '2 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      modules: [
        { id: 1, title: 'Introduction to ML Concepts', completed: true },
        { id: 2, title: 'Supervised Learning', completed: true },
        { id: 3, title: 'Unsupervised Learning', completed: false },
        { id: 4, title: 'Neural Networks Basics', completed: false },
      ],
      content: 'This course covers the fundamentals of machine learning, including supervised and unsupervised learning techniques, evaluation metrics, and practical applications.'
    },
    {
      id: 2,
      title: 'Creative Writing Workshop',
      description: 'Develop your creative writing skills through guided exercises and feedback.',
      category: 'Humanities',
      progress: 40,
      lastEdited: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      modules: [
        { id: 1, title: 'Finding Your Voice', completed: true },
        { id: 2, title: 'Character Development', completed: false },
        { id: 3, title: 'Plot Structure', completed: false },
        { id: 4, title: 'Editing and Revising', completed: false },
      ],
      content: 'This workshop focuses on developing your unique writing style and voice through regular practice and feedback. You will learn techniques for character development, plot structure, and editing.'
    },
    {
      id: 3,
      title: 'Basic Spanish for Beginners',
      description: 'Start your journey to Spanish fluency with fundamental vocabulary and grammar.',
      category: 'Languages',
      progress: 90,
      lastEdited: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      modules: [
        { id: 1, title: 'Greetings and Introductions', completed: true },
        { id: 2, title: 'Basic Vocabulary', completed: true },
        { id: 3, title: 'Present Tense Verbs', completed: true },
        { id: 4, title: 'Simple Conversations', completed: false },
      ],
      content: 'This course provides a foundation in Spanish language, focusing on practical vocabulary and grammar that will help you communicate in everyday situations.'
    },
    {
      id: 4,
      title: 'Financial Literacy 101',
      description: 'Essential knowledge about personal finance, budgeting, and investments.',
      category: 'Business',
      progress: 20,
      lastEdited: '1 day ago',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
      modules: [
        { id: 1, title: 'Budgeting Basics', completed: true },
        { id: 2, title: 'Debt Management', completed: false },
        { id: 3, title: 'Investing Fundamentals', completed: false },
        { id: 4, title: 'Retirement Planning', completed: false },
      ],
      content: 'This course covers essential financial concepts including budgeting, saving, investing, and planning for the future. You will learn practical skills to improve your financial well-being.'
    },
    {
      id: 5,
      title: 'Digital Marketing Fundamentals',
      description: 'Learn key concepts and strategies for effective digital marketing campaigns.',
      category: 'Marketing',
      progress: 60,
      lastEdited: '5 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      modules: [
        { id: 1, title: 'Digital Marketing Overview', completed: true },
        { id: 2, title: 'Content Marketing', completed: true },
        { id: 3, title: 'Social Media Strategies', completed: false },
        { id: 4, title: 'Analytics and Optimization', completed: false },
      ],
      content: 'This course introduces you to the world of digital marketing, covering essential strategies for content creation, social media management, SEO, and analytics.'
    },
  ];

  useEffect(() => {
    // Simulate API call to fetch course details
    setLoading(true);
    setTimeout(() => {
      const foundCourse = mockCourses.find(c => c.id === parseInt(courseId));
      if (foundCourse) {
        setCourse(foundCourse);
      } else {
        // Handle course not found
        navigate('/not-found');
      }
      setLoading(false);
    }, 500);
  }, [courseId, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <div className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!course) {
    return null; // This should not happen as we navigate away if course not found
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Navbar />
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <Link to="/dashboard" className="inline-flex items-center text-sm text-gray-500 hover:text-primary transition-colors">
              <ChevronLeft className="mr-1 h-4 w-4" />
              Back to Dashboard
            </Link>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-6">
            <div className="h-48 bg-gray-200 relative">
              {course.thumbnail ? (
                <img 
                  src={course.thumbnail} 
                  alt={course.title} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex items-center justify-center h-full bg-gradient-to-r from-purple-50 to-indigo-50">
                  <Book className="h-16 w-16 text-primary opacity-50" />
                </div>
              )}
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary bg-opacity-10 text-primary">
                  {course.category}
                </span>
              </div>
            </div>
            <div className="p-6">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{course.title}</h1>
                  <p className="mt-2 text-gray-600">{course.description}</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <button className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                    <Edit className="mr-2 h-4 w-4 text-gray-500" />
                    Edit Course
                  </button>
                  <button className="inline-flex items-center px-4 py-2 border border-red-300 rounded-md shadow-sm text-sm font-medium text-red-700 bg-white hover:bg-red-50">
                    <Trash className="mr-2 h-4 w-4 text-red-500" />
                    Delete
                  </button>
                </div>
              </div>

              <div className="mt-6 flex items-center text-sm text-gray-500 space-x-4">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4" />
                  <span>Last edited: {course.lastEdited}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-20 h-2 bg-gray-100 rounded-full mr-2">
                    <div 
                      className="h-full bg-primary rounded-full" 
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                  <span>{course.progress}% Complete</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex -mb-px">
                <button
                  onClick={() => setActiveTab('overview')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'overview'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Overview
                </button>
                <button
                  onClick={() => setActiveTab('content')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'content'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Content
                </button>
                <button
                  onClick={() => setActiveTab('modules')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'modules'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Modules
                </button>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`py-4 px-6 font-medium text-sm border-b-2 ${
                    activeTab === 'settings'
                      ? 'border-primary text-primary'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  Settings
                </button>
              </nav>
            </div>

            <div className="p-6">
              {activeTab === 'overview' && (
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Course Overview</h3>
                      <p className="text-gray-600">{course.content}</p>
                    </CardContent>
                  </Card>
                  
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Progress Overview</h3>
                        <span className="text-sm font-medium text-gray-500">{course.progress}% Complete</span>
                      </div>
                      <div className="w-full h-2 bg-gray-100 rounded-full mb-6">
                        <div className="h-full bg-primary rounded-full" style={{ width: `${course.progress}%` }}></div>
                      </div>
                      <div className="space-y-4">
                        {course.modules.map((module) => (
                          <div key={module.id} className="flex items-center">
                            <div className={`h-5 w-5 rounded-full flex items-center justify-center ${module.completed ? 'bg-primary' : 'border border-gray-300'}`}>
                              {module.completed && <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>}
                            </div>
                            <span className={`ml-3 text-sm ${module.completed ? 'text-gray-900' : 'text-gray-500'}`}>{module.title}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {activeTab === 'content' && (
                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-100 rounded-md p-4 text-sm text-yellow-800">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p>The full content editor would be available in a complete implementation.</p>
                      </div>
                    </div>
                  </div>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-lg font-medium text-gray-900">Course Content</h3>
                        <button className="inline-flex items-center px-3 py-1.5 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
                          <Edit className="mr-1.5 h-3 w-3 text-gray-500" />
                          Edit Content
                        </button>
                      </div>
                      <p className="text-gray-600">{course.content}</p>
                    </CardContent>
                  </Card>
                </div>
              )}
              
              {activeTab === 'modules' && (
                <div className="space-y-4">
                  {course.modules.map((module) => (
                    <Card key={module.id}>
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className={`h-5 w-5 rounded-full flex items-center justify-center ${module.completed ? 'bg-primary' : 'border border-gray-300'}`}>
                              {module.completed && <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>}
                            </div>
                            <span className={`ml-3 text-sm font-medium ${module.completed ? 'text-gray-900' : 'text-gray-500'}`}>{module.title}</span>
                          </div>
                          <div className="flex space-x-2">
                            <button className="inline-flex items-center px-2.5 py-1 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
                              View
                            </button>
                            <button className="inline-flex items-center px-2.5 py-1 border border-gray-300 rounded-md shadow-sm text-xs font-medium text-gray-700 bg-white hover:bg-gray-50">
                              Edit
                            </button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="flex justify-center mt-6">
                    <button className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90">
                      <Plus className="mr-2 h-4 w-4" />
                      Add Module
                    </button>
                  </div>
                </div>
              )}
              
              {activeTab === 'settings' && (
                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-lg font-medium text-gray-900 mb-4">Course Settings</h3>
                      <div className="space-y-4">
                        <div>
                          <label htmlFor="title" className="block text-sm font-medium text-gray-700">Course Title</label>
                          <input
                            type="text"
                            id="title"
                            className="mt-1 focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={course.title}
                          />
                        </div>
                        <div>
                          <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
                          <textarea
                            id="description"
                            rows={3}
                            className="mt-1 focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={course.description}
                          />
                        </div>
                        <div>
                          <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
                          <select
                            id="category"
                            className="mt-1 focus:ring-primary focus:border-primary block w-full sm:text-sm border-gray-300 rounded-md"
                            defaultValue={course.category}
                          >
                            <option>Technology</option>
                            <option>Humanities</option>
                            <option>Languages</option>
                            <option>Business</option>
                            <option>Marketing</option>
                            <option>Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end">
                        <button
                          type="button"
                          className="mr-3 inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                          Cancel
                        </button>
                        <button
                          type="submit"
                          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90"
                        >
                          Save Changes
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default CourseDetail;
