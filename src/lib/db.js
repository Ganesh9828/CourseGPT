
// Mock MongoDB connection for client-side
const connectDB = () => {
  console.log('Mock MongoDB connection initialized');
  return Promise.resolve();
};

// Create a simple in-memory storage system
export const db = {
  users: [],
  courses: [],
  blogs: []
};

// Mock DB operations
export const mockDbOperations = {
  // User operations
  findUserByEmail: (email) => {
    return db.users.find(user => user.email === email);
  },
  createUser: (userData) => {
    const newUser = { 
      id: 'user_' + Date.now(), 
      ...userData, 
      date: new Date() 
    };
    db.users.push(newUser);
    return newUser;
  },
  
  // Course operations
  getAllCourses: () => {
    return db.courses;
  },
  getCourseById: (id) => {
    return db.courses.find(course => course.id === id);
  },
  createCourse: (courseData) => {
    const newCourse = { 
      id: 'course_' + Date.now(), 
      ...courseData, 
      createdAt: new Date() 
    };
    db.courses.push(newCourse);
    return newCourse;
  },
  
  // Blog operations
  getAllBlogs: () => {
    return db.blogs;
  },
  getBlogById: (id) => {
    return db.blogs.find(blog => blog.id === id);
  },
  createBlog: (blogData) => {
    const newBlog = { 
      id: 'blog_' + Date.now(), 
      ...blogData, 
      createdAt: new Date() 
    };
    db.blogs.push(newBlog);
    return newBlog;
  }
};

// Add some initial mock data
const initializeMockData = () => {
  // Sample users
  if (db.users.length === 0) {
    db.users.push({
      id: 'user_1',
      name: 'John Doe',
      email: 'john@example.com',
      password: 'password123',
      date: new Date()
    });
  }
  
  // Sample courses
  if (db.courses.length === 0) {
    db.courses.push({
      id: 'course_1',
      title: 'Introduction to AI',
      description: 'Learn the basics of artificial intelligence',
      type: 'academic',
      instructor: 'Dr. Alan Turing',
      duration: '8 weeks',
      price: 299,
      image: '/placeholder.svg',
      createdBy: 'user_1'
    });
  }
  
  // Sample blogs
  if (db.blogs.length === 0) {
    db.blogs.push({
      id: 'blog_1',
      title: 'The Future of AI in Education',
      excerpt: 'Exploring how AI is transforming the way we learn and teach',
      content: '<p>Artificial intelligence is revolutionizing education in ways we never imagined...</p>',
      date: 'May 1, 2025',
      readTime: '5 min read',
      category: 'Education',
      author: 'Jane Smith',
      image: '/placeholder.svg'
    });
  }
};

// Run initialization
initializeMockData();

export default connectDB;
