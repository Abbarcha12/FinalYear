import mongoose from 'mongoose';

const { Schema } = mongoose;

const AdminSchema = new Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: { unique: true },
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address'],
  },
  password: {
    type: String,
    required: true,
    
  },
  userRole: {
    type: String,
    required: true,
  },
  isVerified:{
    type:Boolean,
    default:false
  },
  isAdmin:{
    type:Boolean,
    default:false
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date,



});

let Admin;

try {
  // If the model already exists, use it; otherwise, create a new one
  Admin = mongoose.models.Admin || mongoose.model('Admin', AdminSchema);
} catch (error) {
    Admin = mongoose.model('Admin', AdminSchema);
}

export default Admin;
