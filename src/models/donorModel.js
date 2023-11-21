import mongoose from 'mongoose';

const { Schema } = mongoose;

const DonorSchema = new Schema({
  name: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  gender: {
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
  dateOfBirth: {
    type: Date,
    required: true,
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
  address: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 100,
  },
  weight: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => v >= 50,
      message: 'weight must be 50kg or more',
    },
  },
  age: {
    type: Number,
    required: true,
    validate: {
      validator: (v) => v >= 18,
      message: 'Must be 18 and above',
    },
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"],
    required: true,
  },
  city: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 50,
  },
  lastDonationDate: {
    type: Date,
    required: true,
  },
});

let Donor;

try {
  // If the model already exists, use it; otherwise, create a new one
  Donor = mongoose.models.Donor || mongoose.model('Donor', DonorSchema);
} catch (error) {
  Donor = mongoose.model('Donor', DonorSchema);
}

export default Donor;
