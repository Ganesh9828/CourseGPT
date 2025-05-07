
import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight, Tag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Fetch blog posts from database in a real app
    // For now, we'll use sample data
    const sampleBlogPosts = [
      {
        id: 1,
        title: '10 Tips for Creating Engaging Online Courses',
        excerpt: 'Learn how to design courses that keep students motivated and engaged from start to finish.',
        date: 'May 2, 2025',
        readTime: '5 min read',
        category: 'Course Design',
        author: 'Emma Johnson',
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
      },
      {
        id: 2,
        title: 'The Future of AI in Education: Beyond Content Creation',
        excerpt: 'Explore how artificial intelligence is revolutionizing not just content creation but the entire educational experience.',
        date: 'April 28, 2025',
        readTime: '8 min read',
        category: 'AI & Education',
        author: 'Marcus Chen',
        image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
      },
      {
        id: 3,
        title: 'How to Use Data Analytics to Improve Your Courses',
        excerpt: 'Discover practical ways to use learning analytics to identify strengths and weaknesses in your course materials.',
        date: 'April 15, 2025',
        readTime: '6 min read',
        category: 'Analytics',
        author: 'Sophia Rodriguez',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
      },
      {
        id: 4,
        title: 'Building Community in Online Learning Environments',
        excerpt: 'Strategies for fostering connection and collaboration among students in digital classrooms.',
        date: 'April 10, 2025',
        readTime: '7 min read',
        category: 'Online Learning',
        author: 'Daniel Park',
        image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=60'
      },
    ];
    
    setBlogPosts(sampleBlogPosts);
    setLoading(false);
    
    // In a real application with MongoDB, you would fetch data like this:
    /*
    const fetchBlogPosts = async () => {
      try {
        const response = await fetch('/api/blog-posts');
        const data = await response.json();
        setBlogPosts(data);
      } catch (error) {
        console.error('Error fetching blog posts:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogPosts();
    */
  }, []);

  // Sample categories
  const categories = [
    'Course Design',
    'AI & Education',
    'Online Learning',
    'Analytics',
    'Instructional Design',
    'EdTech',
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
                CourseGPT Blog
              </h1>
              <p className="mt-6 max-w-3xl mx-auto text-xl text-gray-500">
                Insights, tips, and stories about education, course creation, and the future of learning.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Content */}
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-3 lg:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {loading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
                </div>
              ) : (
                <div className="space-y-12">
                  {blogPosts.map((post) => (
                    <div key={post.id} className="border-b pb-12 last:border-b-0">
                      <div className="sm:grid sm:grid-cols-3 sm:gap-8">
                        <div className="mb-4 sm:mb-0">
                          <Link to={`/blog/${post.id}`}>
                            <img 
                              src={post.image} 
                              alt={post.title} 
                              className="h-48 w-full object-cover rounded-lg hover:opacity-90 transition-opacity" 
                            />
                          </Link>
                        </div>
                        <div className="sm:col-span-2">
                          <div className="flex items-center text-sm text-gray-500 mb-2">
                            <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                              {post.category}
                            </span>
                            <span className="mx-2">•</span>
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{post.date}</span>
                            <span className="mx-2">•</span>
                            <Clock className="h-4 w-4 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <h2 className="text-xl font-bold text-gray-900 mb-2">
                            <Link to={`/blog/${post.id}`} className="hover:text-primary transition-colors">
                              {post.title}
                            </Link>
                          </h2>
                          <p className="text-gray-600 mb-4">{post.excerpt}</p>
                          <div className="flex justify-between items-center">
                            <span className="text-sm text-gray-500">By {post.author}</span>
                            <Link 
                              to={`/blog/${post.id}`}
                              className="inline-flex items-center text-primary hover:text-primary-dark transition-colors text-sm font-medium"
                            >
                              Read more
                              <ArrowRight className="ml-1 h-4 w-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="mt-12 lg:mt-0">
              {/* Search */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>

              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <div key={index} className="flex items-center">
                      <Tag className="h-4 w-4 text-primary mr-2" />
                      <Link to={`/blog/category/${category.toLowerCase().replace(' & ', '-').replace(' ', '-')}`} className="text-gray-600 hover:text-primary transition-colors">
                        {category}
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Newsletter */}
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-medium text-gray-900 mb-2">Subscribe to our newsletter</h3>
                <p className="text-sm text-gray-500 mb-4">Get the latest articles and resources delivered to your inbox.</p>
                <form className="space-y-4">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
                  />
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors"
                  >
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
