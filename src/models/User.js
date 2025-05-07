
// Client-side mock model for User
// This is a simplified version that would normally use Mongoose on a server

// Define a schema-like structure for validation
const UserSchema = {
  validate: (userData) => {
    const errors = {};
    
    // Name validation
    if (!userData.name) {
      errors.name = "Name is required";
    }
    
    // Email validation
    if (!userData.email) {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(userData.email)) {
      errors.email = "Email is invalid";
    }
    
    // Password validation
    if (!userData.password) {
      errors.password = "Password is required";
    } else if (userData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }
    
    return {
      isValid: Object.keys(errors).length === 0,
      errors
    };
  }
};

export default { 
  Schema: UserSchema,
  // Mock methods that would be available on a Mongoose model
  findOne: (query) => {
    // Implementation would be provided by the db mock
    console.log("Mock User.findOne called with", query);
    return null;
  },
  create: (data) => {
    // Implementation would be provided by the db mock
    console.log("Mock User.create called with", data);
    return { ...data, id: 'mock_' + Date.now() };
  }
};
