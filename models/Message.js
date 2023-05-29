const mongoose = require('mongoose')
const Schema = mongoose.Schema

var messageSchema = mongoose.Schema({
//the content of the message  
  message: { type: String },
  //the sender of the message
  sender: { type: Schema.Types.ObjectId, ref: 'users' },
  //the receiver of that message
  receiver: { type: Schema.Types.ObjectId, ref: 'users' },
  //the sender name
  senderName: { type: String },
  //the receiver name
  receiverName: { type: String },
  //if the message is read or not yet
  isRead: { type: Boolean, default: false },
  //date of sending the message
  createdAt: { type: Date, default: Date.now },
})

mongoose.model('message', messageSchema)