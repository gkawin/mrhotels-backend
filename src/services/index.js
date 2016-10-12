
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Joi from 'joi'
import Boom from 'boom'
import _ from 'lodash'

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
    const plainPassword = req.body.password
    const user = await UserModal.findOne({ email: email }).lean()
    if (!user) throw Boom.unauthorized()

    const hashed_password = user.hashed_password
    const isValidated = bcrypt.compareSync(plainPassword, hashed_password)
    if (!isValidated) throw Boom.unauthorized()

    const token = jwt.sign(_.omit(user, [ 'hashed_password', 'salt' ]), process.env.JWT_SECRET_KEY, { expiresIn: '1h' })
    res.json({
      token,
      response_time: new Date()
    })
  } catch (e) {
    next(e)
  }
}

export const createUser = async (req, res, next) => {
  res.json({ message: 'create' })
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
