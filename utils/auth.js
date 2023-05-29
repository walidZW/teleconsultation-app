//check if the user is authenticated before access a specific view
module.exports = {
    ensureAuthenticated: function (req, res, next) {
      if (req.isAuthenticated()) {
        return next()
      }
      req.flash('error_msg', 'Not Authorized')
      res.redirect('/users/login')
    },
  }
  