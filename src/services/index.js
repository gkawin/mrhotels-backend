
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'
import Joi from 'joi'

import UserModal from '../models/user'
import { badRequest, boom, unauthorized } from '../lib/errorHandler'

export const authentication = async (req, res, next) => {
  const schema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
  })
  Joi.validate(req.body, schema, (err) => {
    if (err) next(badRequest(err.message))
  })
  try {
    const email = req.body.email
    UserModal.findOne({ email: email }).then((result) => {
      if (_.isEmpty(result)) next(unauthorized())
      const token = jwt.sign(result, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
      res.json({
        token,
        response_time: new Date()
      })
    })
  } catch (e) {
    next(boom(e.message))
  }
}

export const createUser = async (req, res, next) => {
  await res.json({ message: 'create' })
  next()
}

export const getUserById = (req, res, next) => {
  res.json({ message: 'all member is here' })
  next()
}

export const updateUserById = (req, res, next) => {
  next()
}

export const updateUserSettingsById = (req, res, next) => {
  next()
}

export const deleteUserById = (req, res, next) => {
  next()
}

export const getActivitiesLogs = (req, res, next) => {
  next()
}
