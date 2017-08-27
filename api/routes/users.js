import models from '../models'
import express from 'express'
import { authenticated } from '../auth'
import _ from 'lodash'

var router = express.Router()

function mapToUserViewModel(user) {
  return {
    email: user.email,
    firstname: user.firstname,
    lastname: user.lastname
  }
}

router.get('/', authenticated(), (req, res) => {
  models.User.findAll().then(users => {
    res.send(_(users).map(mapToUserViewModel))
  })
})

router.get('/:user_id', authenticated(), (req, res) => {
  models.User.findById(req.params.user_id).then(user => {
    res.send(mapToUserViewModel(user))
  })
})

router.post('/create', authenticated(), function (req, res) {
  models.User.create({
    email: req.body.email
  }).then(function () {
    res.redirect('/')
  })
})

router.get('/:user_id/destroy', authenticated(), function (req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function () {
    res.redirect('/')
  })
})

export default router
