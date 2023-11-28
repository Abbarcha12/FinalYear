import mongoose from 'mongoose';

const { Schema } = mongoose;

const OrganizationSchema = new Schema({
  organizationName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  bloodBankName: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
   
  },
  address: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  phoneNumber: {
    type: String,
    required: true,
    match: [/^\d{11}$/, 'Invalid phone number'],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
    index: { unique: true },
    match: [/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email address'],
  },
  mission: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 200,
  },
  forgotPasswordToken:String,
  forgotPasswordTokenExpiry:Date,
  verifyToken:String,
  verifyTokenExpiry:Date,

});

let Organization;

try {
  // If the model already exists, use it; otherwise, create a new one
  Organization = mongoose.models.Organization || mongoose.model('Organization', OrganizationSchema);
} catch (error) {
  Organization = mongoose.model('Organization', OrganizationSchema);
}

export default Organization;
