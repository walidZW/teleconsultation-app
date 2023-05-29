const mongoose = require('mongoose')
const Schema = mongoose.Schema

var notificationSchema = mongoose.Schema({
  //the title of the notification
    title: {
    type: String,
  },
//the description of that notification
  description: {
    type: String,
  },
  //the time of receiving the notification
  time: {
    type: Date,
    default: Date.now,
  },
  //the category of that notification
  category: {
    type: String,
  },
  //the user id of the receiver
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
  //the id for joining the video chat
  videoId: {
    type: String,
  },
  //the status of the notification
  unread: {
    type: String,
    default: 'yes',
  },
})

mongoose.model('notification', notificationSchema)