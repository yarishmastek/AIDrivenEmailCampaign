const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  phone: { type: String, required: true },
  address: {
    street: { type: String },
    city: { type: String },
    state: { type: String },
    zipcode: { type: String },
    country: { type: String }
  },
  dateOfBirth: { type: Date },
  gender: { type: String, enum: ['Male', 'Female', 'Other'] },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  isActive: { type: Boolean, default: true },
  preferences: {
    newsletter: { type: Boolean, default: false },
    theme: { type: String, default: 'Light' }
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  roles: { type: [String], default: ['user'] }
});

module.exports = mongoose.model('User', userSchema);