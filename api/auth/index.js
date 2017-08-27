import passport from 'passport'
import models from '../models'
var LocalStrategy = require('passport-local').Strategy

passport.serializeUser((user, done) => {
  done(null, user.id)
})

passport.deserializeUser((id, done) => {
  models.User.findById(id).then(user => {
    done(null, user)
  }).catch(err => {
    done(err, false)
  })
})

passport.use(new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  (email, password, done) => {
    models.User.findOne({
      where: {
        email
      }
    }).then(user => {
      if (!user) {
        return done(null, false)
      }
      user.validatePassword(password).then(result => {
        if (!result) {
          return done(null, false)
        }
        return done(null, user)
      })
    }).catch(err => {
      return done(err)
    })
  }
))

export default passport
