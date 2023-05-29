const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
//i will check this again the next time
const ContactSchema = new Schema({
  
    name: {
    type: String,
  },
  email: {
    type: String,
  },
  country: {
    type: String,
  },
  phone: {
    type: String,
  },
  message: {
    type: String,
  },
})

mongoose.model('contact', ContactSchema)