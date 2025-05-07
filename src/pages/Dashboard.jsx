
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Grid, 
  List, 
  Zap, 
  CheckCircle2, 
  Clock, 
  FileText 
} from 'lucide-react';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseCard from '@/components/CourseCard';
import AIAssistant from '@/components/AIAssistant';

const Dashboard = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [filter, setFilter] = useState('all');
  
  // Updated course data with specific images
  const courses = [
    {
      id: 1,
      title: 'Introduction to Machine Learning',
      description: 'Learn the fundamentals of machine learning algorithms and applications.',
      category: 'Technology',
      progress: 75,
      lastEdited: '2 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 2,
      title: 'Creative Writing Workshop',
      description: 'Develop your creative writing skills through guided exercises and feedback.',
      category: 'Humanities',
      progress: 40,
      lastEdited: '1 week ago',
      thumbnail: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 3,
      title: 'Basic Spanish for Beginners',
      description: 'Start your journey to Spanish fluency with fundamental vocabulary and grammar.',
      category: 'Languages',
      progress: 90,
      lastEdited: '3 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
    {
      id: 4,
      title: 'Financial Literacy 101',
      description: 'Essential knowledge about personal finance, budgeting, and investments.',
      category: 'Business',
      progress: 20,
      lastEdited: '1 day ago',
      thumbnail: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80',
    },
    {
      id: 5,
      title: 'Digital Marketing Fundamentals',
      description: 'Learn key concepts and strategies for effective digital marketing campaigns.',
      category: 'Marketing',
      progress: 60,
      lastEdited: '5 days ago',
      thumbnail: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
    },
  ];
  
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    if (filter === 'all') return matchesSearch;
    if (filter === 'inProgress') return matchesSearch && course.progress < 100 && course.progress > 0;
    if (filter === 'completed') return matchesSearch && course.progress === 100;
    if (filter === 'notStarted') return matchesSearch && course.progress === 0;
    
    return matchesSearch;
  });

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">My Courses</h1>
              <p className="text-gray-500 mt-1">Manage and organize your educational content</p>
            </div>
            
            <div className="mt-4 md:mt-0">
              <Link
                to="/create-course"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                <Plus className="mr-2 h-4 w-4" />
                New Course
              </Link>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
              <div className="relative rounded-md w-full md:w-64">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="search"
                  className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search courses..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              
              <div className="flex space-x-4">
                <div className="relative w-48">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Filter className="h-5 w-5 text-gray-400" />
                  </div>
                  <select
                    className="focus:ring-primary focus:border-primary block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                  >
                    <option value="all">All Courses</option>
                    <option value="inProgress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="notStarted">Not Started</option>
                  </select>
                </div>
                
                <div className="flex items-center border border-gray-200 rounded-md">
                  <button
                    className={`p-2 ${viewMode === 'grid' ? 'text-primary bg-gray-50' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setViewMode('grid')}
                  >
                    <Grid className="h-5 w-5" />
                  </button>
                  <button
                    className={`p-2 ${viewMode === 'list' ? 'text-primary bg-gray-50' : 'text-gray-500 hover:text-gray-700'}`}
                    onClick={() => setViewMode('list')}
                  >
                    <List className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {filteredCourses.length > 0 ? (
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
              {filteredCourses.map((course) => (
                viewMode === 'grid' ? (
                  <CourseCard key={course.id} course={course} />
                ) : (
                  <div key={course.id} className="bg-white rounded-lg shadow-sm border border-gray-100 p-4 flex">
                    <div className="h-20 w-20 bg-gray-200 rounded flex-shrink-0">
                      {course.thumbnail && (
                        <img 
                          src={course.thumbnail} 
                          alt={course.title} 
                          className="w-full h-full object-cover rounded"
                        />
                      )}
                    </div>
                    <div className="ml-4 flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-medium text-gray-900">{course.title}</h3>
                          <p className="text-sm text-gray-500 line-clamp-1">{course.description}</p>
                        </div>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary bg-opacity-10 text-primary">
                          {course.category}
                        </span>
                      </div>
                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center text-sm text-gray-500">
                          <Clock className="h-4 w-4 mr-1" />
                          <span>{course.lastEdited}</span>
                        </div>
                        <div className="flex items-center">
                          <div className="w-24 h-1.5 bg-gray-100 rounded-full mr-2">
                            <div 
                              className="h-full bg-primary rounded-full" 
                              style={{ width: `${course.progress}%` }}
                            />
                          </div>
                          <span className="text-xs text-gray-500">{course.progress}%</span>
                        </div>
                        <Link 
                          to={`/course/${course.id}`}
                          className="text-sm font-medium text-primary hover:text-primary-dark"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <div className="mx-auto h-16 w-16 bg-gray-100 rounded-full flex items-center justify-center">
                <FileText className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mt-4 text-lg font-medium text-gray-900">No courses found</h3>
              <p className="mt-2 text-gray-500">
                {searchQuery
                  ? `No courses match your search for "${searchQuery}"`
                  : "You haven't created any courses yet"}
              </p>
              <div className="mt-6">
                <Link
                  to="/create-course"
                  className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-primary hover:bg-opacity-90"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Create your first course
                </Link>
              </div>
            </div>
          )}
          
          {filteredCourses.length > 0 && (
            <div className="mt-10 bg-gradient-to-r from-purple-50 to-indigo-50 rounded-lg p-6">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-primary bg-opacity-10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-gray-900">AI Course Enhancement</h3>
                  <p className="mt-1 text-gray-500">
                    Let our AI analyze your courses and suggest improvements to increase engagement and learning outcomes.
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Content Gap Analysis
                    </div>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Assessment Recommendations
                    </div>
                    <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Engagement Optimization
                    </div>
                  </div>
                  <button
                    className="mt-4 inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded text-primary bg-primary bg-opacity-10 hover:bg-opacity-20"
                  >
                    Analyze My Courses
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Dashboard;
