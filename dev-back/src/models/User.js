import mongoose from 'mongoose'

// Define the user schema
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['user', 'admin'], // roles can be ['dev', 'front', 'back'] 
    default: 'user'
  }
}, {
  timestamps: true // This will add createdAt and updatedAt fields
});

// User model based on the schema
const User = mongoose.model('User', userSchema);

export default User;
