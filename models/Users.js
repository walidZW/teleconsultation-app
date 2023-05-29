const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const UserSchema = new Schema({
    //the user name
  userName: { type: String },
    //the name of the user
  name: { type: String },
   //the gender of the user
  gender: { type: String },
   //email of the user
  email: { type: String },
  
  contact: { type: String },
  //password of the user
  password: { type: String },
  //the role of the user (admin/doctor/patient)
  role: { type: String },
  //the educaton (for doctor)
  education: { type: String },
  //the experience(for doctor)
  experience: { type: String },
  //the degree(for doctor)
  degree: { type: String },

  chamber: { type: String },
  //the date of birth of the user
  dob: { type: Date },
  nationality: { type: String },
  //the speciality(for doctor)
  speciality: { type: String },
  //the adress(for doctor)
  address: { type: String },
  //the status (for doctor)
  status: { type: String },
  //
  gender: { type: String },
  //the image of the profile
  profileImage: { type: String },
  //request sent to the users(patient send to doctor or the opposite)
  sentRequest: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'users' },
      userName: { type: String, default: '' },
    },
  ],
  //requests recieved from users
  request: [
    {
      userId: { type: Schema.Types.ObjectId, ref: 'users' },
      userName: { type: String, default: '' },
    },
  ],
  //the list of friends
  friendList: [
    {
      friendId: { type: Schema.Types.ObjectId, ref: 'users' },
      friendName: { type: String, default: '' },
    },
  ],
  //number of total requests
  totalRequest: { type: Number, default: 0 },
  //time of creation
  time: {
    type: Date,
    default: Date.now,
  },
 
})

mongoose.model('users', UserSchema)
