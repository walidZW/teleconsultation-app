const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ReportSchema = new Schema({
    //the appointement id
  aptId: { type: Schema.Types.ObjectId, ref: 'appointment' },
   //the id of the doctor
  docId: { type: Schema.Types.ObjectId, ref: 'users' },
  //the id of the patient
  patientId: { type: Schema.Types.ObjectId, ref: 'users' },
  //the diseast name
  disease: { type: String },
  //the symptoms
  symptom: [{ type: String }],
  //the date of the report
  date: { type: String },
  //the details of the symptoms
  symptomDetails: [{ type: String }],
  //the medidicien name
  medicine_name: [{ type: String }],
  //the daily dose
  daily_dose: [{ type: String }],
  //the description 
  description: [{ type: String }],
  //observations
  observation: { type: String },
  pdf: { type: String },
})

mongoose.model('report', ReportSchema)