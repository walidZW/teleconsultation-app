const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const DetailDiseaseSchema = new Schema({
 //the name of the disease
  diseaseName: { type: String },
  //overview of the disease
  overview: { type: String },
  //the symptoms of that disease
  symptoms: [{ type: String }],
})

mongoose.model('detaildisease', DetailDiseaseSchema)