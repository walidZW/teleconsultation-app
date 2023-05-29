const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const DiseaseSchema = new Schema({
    //the name of the disease
  name: {
    type: String,
  },
  //the symptoms relatives to that disease
  symptom: [{ type: String }],
  // probability:{
  // 	type:Number
  // },
  //the treatment of that disease
  treatment: {
    type: String,
  },
  docType: {
    type: String,
  },
})

mongoose.model('disease', DiseaseSchema)