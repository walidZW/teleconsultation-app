const express = require('express')
const mongoose = require('mongoose')
const moment = require('moment')

//create the router
const router = express.Router()

//import users model
require('../models/Users')
const Users = mongoose.model('users')

//import message model
require('../models/Message')
const Message = mongoose.model('message')

//import notification modeil
require('../models/Notification')
const Notification = mongoose.model('notification')

//POST ==> update notification status
router.post('/updateNav', (req, res) => {
  Users.findOne({ userName: req.body.userName })
    .exec()
    .then((user) => {
      Notification.find({ userId: user._id }).then((notifications) => {
        notifications.forEach((notification) => {
          notification.unread = 'no'
          notification.save()
        })
      })
    })
  res.send('success')
})

// POST ==> sending image
router.post('/getImage', (req, res, next) => {
  Users.findOne({ userName: req.body.userName }).then((user) => {
    var current_time = moment().add(6, 'hours').format('LLL')
    var data = {
      image: user.profileImage,
      time: current_time,
    }
    res.send(data)
  })
})


//POST ==> sending a message
router.post('/:name', (req, res, next) => {
  const params = req.params.name.split('.')
  const sender = params[0]
  const receiver = params[1]
  if (req.body.message) {
    Users.findOne({ userName: sender }).then((sender) => {
      Users.findOne({ userName: receiver }).then((receiver) => {
        const newMessage = new Message()
        newMessage.sender = sender._id
        newMessage.receiver = receiver._id
        newMessage.senderName = sender.userName
        newMessage.receiverName = receiver.userName
        newMessage.message = req.body.message
        newMessage.createdAt = new Date()
        newMessage.save().then((result) => {})
      })
    })
  }
})

module.exports = router
