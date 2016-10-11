
import jwt from 'jsonwebtoken'
import _ from 'lodash'
import bcrypt from 'bcrypt'
import Joi from 'joi'
import Boom from 'boom'

import UserModal from '../models/user'

export const authentication = async (req, res, next) => {
  try {
    const schema = Joi.object().keys({
      email: Joi.string().email().required(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required()
    })

    const errMessage = await Joi.validate(req.body, schema, (err) => err)
    if (errMessage) throw Boom.badRequest(errMessage)

    const email = req.body.email
    const user = await UserModal.findOne({ email: email })
    if (!user) throw Boom.unauthorized()

    const token = jwt.sign(user, process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
    res.json({
      token,
      response_time: new Date()
    })
  } catch (e) {
    next(e)
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
