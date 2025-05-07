
// Client-side mock model for Course
// This is a simplified version that would normally use Mongoose on a server

// Define a schema-like structure for validation
const CourseSchema = {
  validate: (courseData) => {
    const errors = {};
    
    // Title validation
    if (!courseData.title) {
      errors.title = "Title is required";
    }
    
    // Description validation
    if (!courseData.description) {
      errors.description = "Description is required";
    }
    
    // Type validation
    const validTypes = ['academic', 'corporate', 'tutorial', 'workshop'];
    if (!courseData.type) {
      errors.type = "Course type is required";
    } else if (!validTypes.includes(courseData.type)) {
      errors.type = "Invalid course type";
    }
    
    // Instructor validation
    if (!courseData.instructor) {
      errors.instructor = "Instructor name is required";
    }
    
    // Duration validation
    if (!courseData.duration) {
      errors.duration = "Duration is required";
    }
    
    // Price validation
    if (courseData.price === undefined || courseData.price === null) {
      errors.price = "Price is required";
    } else if (isNaN(courseData.price) || courseData.price < 0) {
      errors.price = "Price must be a valid number";
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

export default {
  Schema: CourseSchema,
  // Mock methods that would be available on a Mongoose model
  find: () => {
    // Implementation would be provided by the db mock
    console.log("Mock Course.find called");
    return [];
  },
  findById: (id) => {
    // Implementation would be provided by the db mock
    console.log("Mock Course.findById called with", id);
    return null;
  },
  create: (data) => {
    // Implementation would be provided by the db mock
    console.log("Mock Course.create called with", data);
    return { ...data, id: 'mock_' + Date.now() };
  }
};
