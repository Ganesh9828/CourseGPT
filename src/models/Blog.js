
// Client-side mock model for Blog
// This is a simplified version that would normally use Mongoose on a server

// Define a schema-like structure for validation
const BlogSchema = {
  validate: (blogData) => {
    const errors = {};
    
    // Title validation
    if (!blogData.title) {
      errors.title = "Title is required";
    }
    
    // Excerpt validation
    if (!blogData.excerpt) {
      errors.excerpt = "Excerpt is required";
    }
    
    // Content validation
    if (!blogData.content) {
      errors.content = "Content is required";
    }
    
    // Date validation
    if (!blogData.date) {
      errors.date = "Date is required";
    }
    
    // Read time validation
    if (!blogData.readTime) {
      errors.readTime = "Read time is required";
    }
    
    // Category validation
    if (!blogData.category) {
      errors.category = "Category is required";
    }
    
    // Author validation
    if (!blogData.author) {
      errors.author = "Author is required";
    }
    
    // Image validation
    if (!blogData.image) {
      errors.image = "Image is required";
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

export default {
  Schema: BlogSchema,
  // Mock methods that would be available on a Mongoose model
  find: () => {
    // Implementation would be provided by the db mock
    console.log("Mock Blog.find called");
    return [];
  },
  findById: (id) => {
    // Implementation would be provided by the db mock
    console.log("Mock Blog.findById called with", id);
    return null;
  },
  create: (data) => {
    // Implementation would be provided by the db mock
    console.log("Mock Blog.create called with", data);
    return { ...data, id: 'mock_' + Date.now() };
  }
};
