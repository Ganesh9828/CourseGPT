
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { fetchBlogPostById } from '../services/api';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        setLoading(true);
        const postData = await fetchBlogPostById(id);
        
        if (!postData) {
          setError('Post not found');
          return;
        }
        
        setPost(postData);
      } catch (err) {
        setError(err.message);
        console.error('Error loading post:', err);
      } finally {
        setLoading(false);
      }
    };
    
    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Post Not Found</h2>
            <p className="mt-2 text-gray-600">Sorry, we couldn't find the blog post you're looking for.</p>
            <button 
              onClick={() => navigate('/blog')} 
              className="mt-4 inline-flex items-center text-primary hover:text-primary-dark"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to Blog
            </button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Image */}
        <div className="relative h-64 md:h-96 w-full">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{post.title}</h1>
            </div>
          </div>
        </div>
        
        {/* Article Content */}
        <div className="max-w-4xl mx-auto px-4 py-12">
          {/* Back to Blog */}
          <Link to="/blog" className="inline-flex items-center text-primary hover:text-primary-dark mb-8">
            <ArrowLeft className="mr-1 h-4 w-4" />
            Back to Blog
          </Link>
          
          {/* Article Meta */}
          <div className="flex flex-wrap items-center text-sm text-gray-500 mb-8 space-x-4">
            <span className="bg-primary bg-opacity-10 text-primary px-2 py-1 rounded-full text-xs font-medium">
              {post.category}
            </span>
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              <span>{post.date}</span>
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <User className="h-4 w-4 mr-1" />
              <span>By {post.author}</span>
            </div>
          </div>
          
          {/* Article Body */}
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
        
        {/* Related Articles */}
        <div className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* We would normally fetch related articles from the API */}
              {/* For now we'll show placeholder content */}
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-5">
                    <div className="h-5 bg-gray-200 rounded animate-pulse mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-4 w-1/2"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse mb-4"></div>
                    <div className="h-4 bg-gray-200 rounded animate-pulse w-5/6"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
