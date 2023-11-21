import mongoose from 'mongoose';

const { Schema } = mongoose;

const PatientSchema = new Schema({
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

let Patient;

try {
  // If the model already exists, use it; otherwise, create a new one
  Patient = mongoose.models.Patient || mongoose.model('Patient', PatientSchema);
} catch (error) {
  Patient = mongoose.model('Patient', PatientSchema);
}

export default Patient;
