module.exports = {
  authenticator: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next()
    }
    req.flash('warning_msg', '請先登入才能使用')
    req.flash('loginError', res.locals.loginError)
    res.redirect('/users/login')
  }
}