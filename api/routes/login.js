import express from 'express'
import passport from 'passport'

var router = express.Router()

router.post('/', passport.authenticate('local'), (request, response) => {
  response.redirect('/')
})

export default router
