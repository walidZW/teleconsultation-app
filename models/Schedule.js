const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const ScheduleSchema = new Schema({
    //the if of the schedule's doctor
  doctorId: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
   //the startiing time
  start: [{ type: String }],
  //the ending time
  end: [{ type: String }],
  //the slots of the schedule
  slot: [{ type: Array }],
  //the days of the schedule
  day: [{ type: Number }],
})

mongoose.model('schedule', ScheduleSchema)
