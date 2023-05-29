const LocalStrategy = require('passport-local').Strategy
const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')

// Load user model
require('../models/Users')
const User = mongoose.model('users')
// determine the strategy of signup and sign in
module.exports = function (passport) {
  passport.use(
    'local.signup',
    new LocalStrategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true,
      },
      (req, email, password, done) => {
        // Match user
        User.findOne({ $or: [{ email: email }, { userName: email }] }).then(
          (user) => {
            if (!user) {
              return done(null, false, { message: 'No User Found' })
            }

            // Match password
            bcrypt.compare(password, user.password, (err, isMatch) => {
              if (err) throw err
              if (isMatch) {
                return done(null, user)
              } else {
                return done(null, false, { message: 'Password Incorrect' })
              }
            })
          }
        )
      }
    )
  )

  //serializeUser function is used to take the user object and convert it into a session object.

  passport.serializeUser(function (user, done) {
    done(null, user.id)
  })


// deserializeUser is used to take the session object and convert it back into a user object.
  passport.deserializeUser(function (id, done) {
    User.findById(id, function (err, user) {
      done(err, user)
    })
  })
}
