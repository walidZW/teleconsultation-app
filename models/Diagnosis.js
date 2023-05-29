const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const DiagnosisSchema = new Schema({
 //the id of the disease
    diseaseId: {
    type: Schema.Types.ObjectId,
    ref: 'disease',
  },
  //the id of the patient
  patientId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  //the probability 
  probability: {
    type: Number,
  },
  //the date of that diagnosis
  diagnosisDate: {
    type: Date,
    default: Date.now,
  },
})

mongoose.model('diagnosis', DiagnosisSchema)
