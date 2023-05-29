const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const TempDiagnosisSchema = new Schema({
  //the id of the patient
    patientId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  //the matching disease
  matching: [
    {
      diseaseName: { type: String },
      matchPercent: { type: Number },
      docType: { type: String },
    },
  ],
  //the symptoms
  symptoms: [
    {
      type: String,
    },
  ],
  //the diagnosis date
  diagnosisDate: {
    type: Date,
    default: Date.now,
  },
})

mongoose.model('tempDiagnosis', TempDiagnosisSchema)