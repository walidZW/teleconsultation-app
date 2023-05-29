const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const AppointmentSchema = new Schema({
  //foreign key to the schedule
    scheduleId: {
    type: Schema.Types.ObjectId,
    ref: 'schedule',
  },
  //foreign key to a doctor
  docId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  //foreign key to a patient
  patientId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  //the type of the appointement
  appointmentType: {
    type: String,
  },
  //the start date of the appointement
  appointmentDate: {
    type: Date,
  },
  //the end date of the appointment
  appointmentEnd: {
    type: Date,
  },
  //
  slotNo: {
    type: Number,
  },
  dayNo: {
    type: Number,
  },
  //the status of the appointement (pending / done )
  status: {
    type: String,
  },
  //symptoms of the patient
  symptoms: {
    type: String,
  },
  //medication details of the patient
  medication: {
    type: String,
  },
  //report of the appointment
  reportSent: {
    type: String,
    default: 'No',
  },
  //
  pdf: {
    type: String,
  },
})

mongoose.model('appointment', AppointmentSchema)